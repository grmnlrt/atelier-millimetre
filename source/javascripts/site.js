import { mobileMenu } from './components/navbar';
import { contactForm } from './components/contactForm';
import { populateCarousel, triggerClickOnProduct, fetchUrlId } from './components/product_carousel';

import { getData } from './services/prismic_api';

mobileMenu();
contactForm();

if (document.querySelector("#product-carousel")) {
  getData().then(results => {
    populateCarousel(results).then(() => {
      triggerClickOnProduct();
      fetchUrlId();
    });
  });
}
