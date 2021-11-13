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
const subMenuBtns = document.querySelectorAll('.sub-menu-mobile-control');
let iOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
let dEvent = "click";

if(iOS != null) {
  dEvent = "touchstart";
}

for (const button of subMenuBtns) {
  button.addEventListener(dEvent, event => {
    const subMenuEl = event.path[2]
    subMenuEl.classList.toggle('sub-nav-active')
  });
}
