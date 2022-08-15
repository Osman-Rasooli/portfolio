
// PRELOADER
$(window).on('load', function() {
  $('.gooey').delay(300).fadeOut();
  $('#preloader').delay(500).fadeOut();
});

$(function() {
    $('.process-tabs').responsiveTabs({
        animation: 'slide',
    });
});


// Hamburger Menu
$('#menu-btn').on('click', function() {
  $('#menu-btn').toggleClass('open');
  $('#menu').toggleClass('w-0');
  $('.link').toggleClass('opacity-0');
  $('#menu').toggleClass('opacity-0');
  $('#menu').toggleClass('w-full');
  $('.hamburger-top').toggleClass('menu-btn-open-style');
  $('.hamburger-bottom').toggleClass('menu-btn-open-style');
  $('#hero-name').toggleClass('text-black');
});


var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});