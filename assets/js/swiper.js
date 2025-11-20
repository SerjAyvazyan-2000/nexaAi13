let reviewsSwiper = null;
let lastMode = null;

function initReviewsSwiper() {
  const isDesktop = window.innerWidth >= 992;
  const mode = isDesktop ? "desktop" : "mobile";

  if (reviewsSwiper && lastMode === mode) return;

  if (reviewsSwiper) {
    reviewsSwiper.destroy(true, true);
    reviewsSwiper = null;
  }

  lastMode = mode;

  reviewsSwiper = new Swiper(".l-reviews-swiper", {
    direction: isDesktop ? "vertical" : "horizontal",
    loop: true,
    speed: isDesktop ? 6000 : 600,
    allowTouchMove: !isDesktop,

    autoplay: isDesktop
      ? {
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }
      : false,

    slidesPerView: isDesktop ? 3 : 1,
    spaceBetween: 10,

    pagination: {
      el: ".reviews-pagination",
      clickable: true,
    },

    breakpoints: {
      320: { slidesPerView: 1 },
      576: { slidesPerView: 1.4 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 2.7 },
    },
  });

  if (isDesktop) {
    const wrapper = document.querySelector(".l-reviews-swiper");

    wrapper.addEventListener("mouseenter", () => {
      if (reviewsSwiper?.autoplay) {
        reviewsSwiper.autoplay.stop();
      }
    });

    wrapper.addEventListener("mouseleave", () => {
      if (reviewsSwiper?.autoplay) {
        reviewsSwiper.autoplay.start();
      }
    });
  }
}

window.addEventListener("load", initReviewsSwiper);

let resizeTimer = null;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(initReviewsSwiper, 200);
});



const swiper = new Swiper(".k-possibilities-swiper", {
  spaceBetween: 10,
  slidesPerView: 1,
  pagination: {
    el: ".k-possibilities-pagination",
    clickable: true,
  },
});

const swiperProcess = new Swiper(".l-process-swiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  pagination: {
    el: ".l-process-pagination",
    clickable: true,
  },
  breakpoints: {
      300: {
      slidesPerView: 1,
    },
     540: {
      slidesPerView: 1.5,
    },
    640: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2.5,
    },

    1100: {
      slidesPerView: 3,
    },
  },
});
