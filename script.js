
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
  //$('html, body').toggleClass('disable-scrolling');

  $('#menu-btn').toggleClass('open');
  $('#menu').toggleClass('w-0');
  $('.link').toggleClass('opacity-0');
  $('#menu').toggleClass('opacity-0');
  $('#menu').toggleClass('w-full');
  $('.hamburger-top').toggleClass('menu-btn-open-style');
  $('.hamburger-bottom').toggleClass('menu-btn-open-style');
  $('#hero-name').toggleClass('text-black');
});

$('.link').on('click', function() {
  $('#menu-btn').toggleClass('open');
  $('#menu').toggleClass('w-0');
  $('.link').toggleClass('opacity-0');
  $('#menu').toggleClass('opacity-0');
  $('#menu').toggleClass('w-full');
  $('.hamburger-top').toggleClass('menu-btn-open-style');
  $('.hamburger-bottom').toggleClass('menu-btn-open-style');
  $('#hero-name').toggleClass('text-black');
})

// Scrolled Nav

$(function() {
  $(window).on('load', function() {
    if($(window).scrollTop() > 50) {
      $('nav').addClass('scrolled-nav');
    } else {
      $('nav').removeClass('scrolled-nav');
    }
  });
  $(window).on('scroll', function() {
    if($(window).scrollTop() > 50) {
      $('nav').addClass('scrolled-nav');
    } else {
      $('nav').removeClass('scrolled-nav');
    }
  });
})


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

// Smooth Scrolling

$(function() {
  $('a.smooth-scroll').on('click', function(event) {
    event.preventDefault();

    var section_id = $(this).attr('href');
    console.log(section_id);

    $('html, body').animate({
      scrollTop: $(section_id).offset().top - 78
    }, 1250);
  })
})

// ScrollSpy

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

$(window).on('scroll', function() {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -160;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('nav a[href*=' + id + ']').classList.add('active');
      })
    }
  })
})

// Animation On Scroll

$(function() {
  new WOW().init();
})

$(window).on('load', function() {
  new WOW().init();
  $('h1#hero-name').addClass('animate__fadeInDown');
  $('#hero-desc').addClass('animate__fadeInUp');
  $('#hero-desc2').addClass('animate__fadeInUp');
  $('div#hero-img img').addClass('animate__zoomIn');
});