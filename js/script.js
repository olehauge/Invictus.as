const header = document.getElementById('site-header');
const hero = document.querySelector('.hero');

function adjustHeroHeight(){
  const viewportHeight = window.innerHeight;
  const headerHeight = header.offsetHeight;
  hero.style.height = `${viewportHeight - headerHeight}px`;
}

window.addEventListener('load', adjustHeroHeight);
window.addEventListener('resize', adjustHeroHeight);

// Optional: Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.querySelector('ul').classList.toggle('open');
});
