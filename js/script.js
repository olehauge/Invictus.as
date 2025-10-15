const header = document.getElementById('site-header');
const toggleBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const sections = document.querySelectorAll('.section');
const hero = document.getElementById('hero');

// Mobile Safari viewport fix
function setHeroHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  let headerHeight = header.offsetHeight;
  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
}
window.addEventListener('resize', setHeroHeight);
window.addEventListener('load', setHeroHeight);

// Collapsible menu toggle
toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Fade-in sections on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{ threshold: 0.1 });

sections.forEach(sec => observer.observe(sec));
observer.observe(hero); // also observe hero
