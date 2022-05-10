const searchButton = document.querySelector(
  '.gnb-icon-button.is-search.lg-hidden'
);
const overlaySearch = document.querySelector('.overlay');
const searchModal = document.querySelector('.search-modal');
const searchModalCloseButton = searchModal.querySelector(
  '.search-modal-form .btn-ghost.btn-40'
);

const openSearchModal = () => {
  searchModal.classList.add('is-active');
  overlaySearch.classList.add('is-active');
};

searchButton.addEventListener('click', openSearchModal);

const closeSearchModal = () => {
  searchModal.classList.remove('is-active');
  overlaySearch.classList.remove('is-active');
};

searchModalCloseButton.addEventListener('click', closeSearchModal);
