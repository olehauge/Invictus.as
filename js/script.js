const header = document.getElementById('site-header');
const toggleBtn = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Mobile Safari viewport fix
function setHeroHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  let headerHeight = header.offsetHeight;
  document.documentElement.style.setProperty('--header-height', `${
