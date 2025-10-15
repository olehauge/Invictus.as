const toggleButton = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

toggleButton.addEventListener('click', () => {
  navMenu.querySelector('ul').classList.toggle('active');
});
