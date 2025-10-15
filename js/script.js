const header = document.getElementById('site-header');
const hero = document.querySelector('.hero');

// Set viewport height CSS variable for mobile Safari
function setHeroHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  let headerHeight = header.offsetHeight;
  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
}

window.addEventListener('load', setHeroHeight);
window.addEventListener('resize', setHeroHeight);

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.querySelector('ul').classList.toggle('open');
});
