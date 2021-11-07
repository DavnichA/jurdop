let elem = document.querySelector('.main-carousel');
let flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  autoPlay: 4000,
  pauseAutoPlayOnHover: true,
});


function menuMobileActive() {

  const mobileNav = document.querySelector('.header-nav');

  mobileNav.classList.toggle('header-nav-active')
}

const subMenuBtns = document.querySelectorAll('.sub-menu-mobile-control');

for (const button of subMenuBtns) {
  button.addEventListener('click', event => {
    const subMenuEl = event.path[2]
    subMenuEl.classList.toggle('sub-nav-active')
  });
}