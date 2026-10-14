import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";
import Brands from "./brands.js";
import Modal from "./modal.js";
import SaleRegistration from "./sale-registration.js";
import { initShowMore } from './new-products.js';
import { initLeadersMore } from './leaders-more.js';
import {sizesSlider} from "./sizes-slider.js";





try {
  const headerFixed = new HeaderFixed({
    HEADER: "header",
    HEADER_FIXED: "header--fixed",
  });

  new BurgerMenu(
    {
      BURGER: "burger",
      BURGER_OPEN: "burger--open",
      HEADER_MENU: "header__menu",
      HEADER_MENU_OPEN: "header__menu--open",
      lABEL: {
        OPEN: "Открыть меню",
        CLOSE: "Закрыть меню",
      },
      PAGE_BODY: "page__body",
      PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
      MENU_LINK: "menu__link",
      BREAKPOINT: 768,
    },
    headerFixed
  );

new Modal({
    PAGE_BODY: "page__body",
    PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
});
new SaleRegistration({
  BAR: "sale-registration",
  CLOSE: "sale-registration__close",
  HIDDEN: "sale-registration--hidden",
});
new Brands({
    WRAPPER: ".brands__featured-brands",
    TRACK: ".brands__track",
  });

  document.addEventListener('DOMContentLoaded', initShowMore);
 initLeadersMore();

 sizesSlider();
} catch (error) {
  console.error(error);
}


