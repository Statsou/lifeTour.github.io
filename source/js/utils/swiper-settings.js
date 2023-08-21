const swiperSettings = function () {
  const swiperHero = new Swiper('.swiper-hero', {
    loop: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const swiperTours = new Swiper('.swiper-tours', {
    loop: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: false,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-tours-button-next',
      prevEl: '.swiper-tours-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  const swiperTraining = new Swiper('.swiper-training', {
    loop: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: false,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-training-button-next',
      prevEl: '.swiper-training-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  const swipeRreviews = new Swiper('.swiper-reviews', {
    loop: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: false,
    slidesPerView: 'auto',
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-reviews-button-next',
      prevEl: '.swiper-reviews-button-prev',
    },
  });

  function swipeAdvantagesSettings () {
    swipeAdvantages = new Swiper('.swiper-advantages', {
      loop: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: false,
      centeredSlides: true,
      slidesPerView: 'auto',
      initialSlide: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-advantages-button-next',
        prevEl: '.swiper-advantages-button-prev',
      },
    });
  }

  const breakpoint = window.matchMedia('(min-width:1200px)');
  let swipeAdvantages = null;

  function swipeAdvantagesInitial () {
    if (breakpoint.matches) {
      swipeAdvantagesSettings();
    }
  }

  function resizeScreen () {
    if (breakpoint.matches) {
      if (swipeAdvantages == null) {
        swipeAdvantagesSettings();
      }
    } else {
      if (swipeAdvantages !== null) {
        swipeAdvantages.destroy();
        swipeAdvantages = null;
      } else {
        return;
      }

    }
  }

  swipeAdvantagesInitial();

  window.addEventListener('resize', () => {
    resizeScreen();
  });

  const swipeGallery = new Swiper('.swiper-gallery', {
    loop: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: false,
    slidesPerView: 'auto',
    spaceBetween: 3,
    navigation: {
      nextEl: '.swiper-gallery-button-next',
      prevEl: '.swiper-gallery-button-prev',
    },

    breakpoints: {
      768: {
        spaceBetween: 5,
      },
    },
  });
};

export {swiperSettings};
