const myMenu = document.querySelector('.my-menu');
const myMenuButton = document.querySelector('.my-menu-button');

const closeMyMenuOnClickOutside = (e) => {
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active');
    window.removeEventListener('click', closeMyMenuOnClickOutside);
  }
};

const toggleMyMenu = () => {
  myMenu.classList.toggle('is-active');
  if (myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMyMenuOnClickOutside);
  }
};

myMenuButton.addEventListener('click', toggleMyMenu);
