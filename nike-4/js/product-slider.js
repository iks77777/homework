export const productSlider = () => {
    new Swiper (".product__slider" , {
        slidesPerView: "auto" ,
        centeredSlides: true,
        loop: true,
       mousewheel: {
        forceToAxis: true,
       } ,
navigation: {
    prevEL: ".product__slider-button--prev",
    nextEL: ".product__slider-button--next",
},
    });
};