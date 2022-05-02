const drawerMenuButtonList = document.querySelectorAll('.drawer-menu-button');

const toggleDrawerMenu = (e) => {
  const drawerMenu = e.target.parentNode;
  drawerMenu.classList.toggle('is-open');
};

drawerMenuButtonList.forEach((drawerMenuButton) => {
  drawerMenuButton.addEventListener('click', toggleDrawerMenu);
});
