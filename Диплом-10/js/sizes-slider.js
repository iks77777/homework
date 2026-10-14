export const sizesSlider = () => {
  new Swiper(".sizes__slider", {
    loop: true,
    slidesPerView: 1,      
    spaceBetween: 16,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: ".sizes__slider-button--prev",
      nextEl: ".sizes__slider-button--next",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
};