const menuBtn = document.querySelector('.is-menu');
const searchBtn = document.querySelector('.is-search');

const searchModal = document.querySelector('.search-modal');
const searchCancelBtn = searchModal.querySelector('.btn-ghost');

const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('is-active');
  overlay.classList.add('is-active');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('is-active');
  overlay.classList.remove('is-active');
});

searchBtn.addEventListener('click', () => {
  searchModal.classList.add('is-active');
});

searchCancelBtn.addEventListener('click', () => {
  searchModal.classList.remove('is-active');
});
