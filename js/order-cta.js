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