const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');
const gnbSearchHistoryList = gnbSearch.querySelector('ol');

const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
);

const closeGnbSearchHistoryOnClickOutside = (e) => {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active');
    window.removeEventListener('click', closeGnbSearchHistoryOnClickOutside);
  }
};
const openGnbSearchHistory = () => {
  if (gnbSearchHistoryList.children.length === 0) {
    return;
  }
  if (!gnbSearchHistory.classList.contains('is-actve')) {
    window.addEventListener('click', closeGnbSearchHistoryOnClickOutside);
  }
  gnbSearchHistory.classList.add('is-active');
};

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);

const deleteAllSearchHistoryItems = () => {
  gnbSearchHistoryList.innerHTML = '';
  gnbSearchHistory.classList.remove('is-active');
};

deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems);
