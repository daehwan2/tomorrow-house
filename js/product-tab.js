const productTab = document.querySelector('.product-tab');
const productTabButtonList = document.querySelectorAll('button');

let currentActiveTab = productTab.querySelector('.is-active');

function toggleActiveTab() {
  const tabItem = this.parentNode;
  currentActiveTab.classList.remove('is-active');
  tabItem.classList.add('is-active');
  currentActiveTab = tabItem;
}

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab);
});
