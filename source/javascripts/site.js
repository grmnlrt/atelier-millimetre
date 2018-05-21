import { mobileMenu } from './components/navbar';
import { contactForm } from './components/contact_form';
import { changeBannerPicture } from './components/change_banner_picture';
import { populateCarousel, triggerClickOnProduct, fetchUrlId } from './components/product_carousel';
import { getData } from './services/prismic_api';
import { hideLoader } from './components/loader';

mobileMenu();
contactForm();
changeBannerPicture();


if (document.querySelector("#product-carousel")) {
  getData().then(results => {
    populateCarousel(results).then(() => {
      hideLoader();
      triggerClickOnProduct();
      fetchUrlId();
    });
  });
}
