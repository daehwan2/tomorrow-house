const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');

const closeGnbSearchHistoryOnClickOutside = (e) => {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active');
    window.removeEventListener('click', closeGnbSearchHistoryOnClickOutside);
  }
};
const openGnbSearchHistory = () => {
  if (!gnbSearchHistory.classList.contains('is-actve')) {
    window.addEventListener('click', closeGnbSearchHistoryOnClickOutside);
  }
  gnbSearchHistory.classList.add('is-active');
};

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);
