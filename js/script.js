// Dynamically adjust hero height based on actual header height
const header = document.getElementById('site-header');
const hero = document.querySelector('.hero');

function adjustHeroHeight() {
  const headerHeight = header.offsetHeight;
  hero.style.height = `calc(100vh - ${headerHeight}px)`;
}

window.addEventListener('load', adjustHeroHeight);
window.addEventListener('resize', adjustHeroHeight);
