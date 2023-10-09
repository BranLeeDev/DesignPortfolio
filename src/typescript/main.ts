import Swiper from "swiper";
import { EffectCreative, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, EffectCreative]);

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      560: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  });
});
