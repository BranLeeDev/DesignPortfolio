"use strict";

var _swiper = _interopRequireDefault(require("swiper"));
var _modules = require("swiper/modules");
require("swiper/swiper-bundle.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_swiper.default.use([_modules.Navigation, _modules.EffectCreative]);
document.addEventListener("DOMContentLoaded", function () {
  new _swiper.default(".swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      560: {
        slidesPerView: 2
      },
      1000: {
        slidesPerView: 3
      }
    }
  });
});