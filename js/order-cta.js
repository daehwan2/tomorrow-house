const orderCta = document.querySelector('.order-cta');
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children;

const orderModal = document.querySelector('.order-form-modal');
const orderModalOverlay = document.querySelector('.overlay');

const openOrderModal = () => {
  orderModal.classList.add('is-open');
  orderModalOverlay.classList.add('is-active');
};

orderCtaBuyButton.addEventListener('click', openOrderModal);

const closeOrderModal = () => {
  orderModal.classList.remove('is-open');
  orderModalOverlay.classList.remove('is-active');
};

orderModalOverlay.addEventListener('click', closeOrderModal);

function toggleOrderCtaBookmark() {
  const [icon, countSpan] = this.children;
  const count = +countSpan.innerHTML.replaceAll(',', '');
  let newCount = count;
  if (this.classList.contains('is-active')) {
    icon.classList.add('ic-bookmark');
    icon.classList.remove('ic-bookmark-filled');
    newCount--;
  } else {
    icon.classList.add('ic-bookmark-filled');
    icon.classList.remove('ic-bookmark');
    newCount++;
  }

  countSpan.innerHTML = newCount.toLocaleString();
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`);
  this.classList.toggle('is-active');
}

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark);
