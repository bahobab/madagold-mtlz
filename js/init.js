(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// const sideNav = document.querySelector('.sidenav');
// sideNav.addEventListener('click', e => {   sideNav     .classList
// .toggle('hide-side-nav'); });
// document.querySelector('.sidenav-trigger').addEventListener('click', e => {
// sideNav     .classList     .toggle('hide-side-nav'); });

const scroll = new SmoothScroll('.nav-wrapper a[href*="#"]', {speed: 800});
