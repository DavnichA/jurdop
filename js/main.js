let elem = document.querySelector('.main-carousel');
let flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  autoPlay: 4000,
  pauseAutoPlayOnHover: true,
});

// mobile menu
function menuMobileActive() {
  const mobileNav = document.querySelector('.header-nav');
  mobileNav.classList.toggle('header-nav-active')
}

// submenu
function subMenuActive(e) {
  e.parentNode.classList.toggle('sub-nav-active');
}
