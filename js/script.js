const header = document.getElementById('site-header');
const hero = document.querySelector('.hero');

function adjustHeroHeight() {
  const viewportHeight = window.innerHeight;
  const headerHeight = header.offsetHeight;
  hero.style.height = `${viewportHeight - headerHeight}px`;
}

<<<<<<< HEAD
// Run on page load and resize
=======
>>>>>>> e80f8014b531054f93fa52a1c63fc99d4910de63
window.addEventListener('load', adjustHeroHeight);
window.addEventListener('resize', adjustHeroHeight);
