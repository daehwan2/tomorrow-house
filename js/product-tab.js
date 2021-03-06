const productTab = document.querySelector('.product-tab');
const productTabButtonList = productTab.querySelectorAll('button');

const TOP_HEADER_DESKTOP = 80 + 50 + 54;
const TOP_HEADER_MOBILE = 50 + 40 + 40;

let currentActiveTab = productTab.querySelector('.is-active');
let disabledUpdating = false;

function toggleActiveTab() {
  const tabItem = this.parentNode;
  if (currentActiveTab !== tabItem) {
    disabledUpdating = true;

    currentActiveTab.classList.remove('is-active');
    tabItem.classList.add('is-active');
    currentActiveTab = tabItem;
  }

  setTimeout(() => {
    disabledUpdating = false;
  }, 1000);
}

function scrollToTabPanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby');
  const tabPanel = document.querySelector(`#${tabPanelId}`);
  const scrollAmount =
    tabPanel.getBoundingClientRect().top -
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE);
  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  });
}

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab);
  button.addEventListener('click', scrollToTabPanel);
});

// 사전 정보: 각 tabPanel의 y축 위치 (문서의 시작점부터 얼마나 아래에 있는지..)
// 요소에 y축 위치 = window.scrollY + element.getBoundingRect().top

const productTabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
];

const productTabPalenlList = productTabPanelIdList.map((id) =>
  document.querySelector(`#${id}`)
);
const productTabPanelPositionMap = {};

function detectTabPanelPosition() {
  // 각각의 tabpanel의 y축 위치를 찾는다.
  //productTabPanelPositionMap 업데이트.

  productTabPalenlList.forEach((panel) => {
    const id = panel.getAttribute('id');
    const position = window.scrollY + panel.getBoundingClientRect().top;
    productTabPanelPositionMap[id] = position;
  });

  updateActiveTabOnScroll();
}
function updateActiveTabOnScroll() {
  if (disabledUpdating) {
    return;
  }

  const scrolledAmount =
    window.scrollY +
    (window.innerWidth >= 768
      ? TOP_HEADER_DESKTOP + 80
      : TOP_HEADER_MOBILE + 8);

  let newActiveTab;
  if (scrolledAmount >= productTabPanelPositionMap['product-recommendation']) {
    newActiveTab = productTabButtonList[4];
  } else if (scrolledAmount >= productTabPanelPositionMap['product-shipment']) {
    newActiveTab = productTabButtonList[3];
  } else if (scrolledAmount >= productTabPanelPositionMap['product-inquiry']) {
    newActiveTab = productTabButtonList[2];
  } else if (scrolledAmount >= productTabPanelPositionMap['product-review']) {
    newActiveTab = productTabButtonList[1];
  } else {
    newActiveTab = productTabButtonList[0];
  }

  const bodyHeight =
    document.body.offsetHeight + (window.innerWidth < 1200 ? 56 : 0);
  if (window.scrollY + window.innerHeight === bodyHeight) {
    newActiveTab = productTabButtonList[4];
  }

  if (newActiveTab) {
    newActiveTab = newActiveTab.parentNode;

    if (newActiveTab !== currentActiveTab) {
      if (currentActiveTab !== null) {
        currentActiveTab.classList.remove('is-active');
      }
      newActiveTab.classList.add('is-active');
      currentActiveTab = newActiveTab;
    }
  }
}

window.addEventListener('load', detectTabPanelPosition);
window.addEventListener('resize', _.throttle(detectTabPanelPosition, 1000));
window.addEventListener('scroll', _.throttle(updateActiveTabOnScroll, 300));
