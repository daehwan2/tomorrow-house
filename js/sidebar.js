const sidebarMenuButton = document.querySelector('.gnb-icon-button.is-menu');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

const openSidebar = () => {
  sidebar.classList.add('is-active');
  overlay.classList.add('is-active');
};

const closeSidebar = () => {
  sidebar.classList.remove('is-active');
  overlay.classList.remove('is-active');
};

sidebarMenuButton.addEventListener('click', openSidebar);
overlay.addEventListener('click', closeSidebar);
