const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');
const gnbSearchHistoryList = gnbSearch.querySelector('ol');

const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
);

const deleteButtonList =
  gnbSearchHistoryList.querySelectorAll('.delete-button');

const closeGnbSearchHistory = () => {
  gnbSearchHistory.classList.remove('is-active');
  window.removeEventListener('click', closeGnbSearchHistoryOnClickOutside);
};
const closeGnbSearchHistoryOnClickOutside = (e) => {
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearchHistory();
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
  closeGnbSearchHistory();
};

deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems);

function deleteSearchHistoryitem(e) {
  e.stopPropagation();
  const itemToDelete = this.parentNode;
  console.log(itemToDelete);
  gnbSearchHistoryList.removeChild(itemToDelete);

  if (gnbSearchHistoryList.children.length === 0) {
    closeGnbSearchHistory();
  }
}

deleteButtonList.forEach((deleteButton) =>
  deleteButton.addEventListener('click', deleteSearchHistoryitem)
);
