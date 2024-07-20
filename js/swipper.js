//  Initialize Swiper
var swiper = new Swiper(".slide-swp", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullesta: true,
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
});

//   swiper sale_slider
var swiper = new Swiper(".sale_sec", {
  slidesPerView: 5,
  spaceBetween: 20,
  autoplay: {
    delay: 2800,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  loop: true,
  breakpoints: {
    1000: {
      slidesPerView: 5,
      spaceBetween: 20,
    },

    850: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper(".product_swip", {
  slidesPerView: 4,
  spaceBetween: 10,
  autoplay: {
    delay: 2800,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  loop: true,
  breakpoints: {
    1000: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    850: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});
