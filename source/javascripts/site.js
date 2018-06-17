import { mobileMenu } from './components/navbar';
import { contactForm } from './components/contact_form';
import { changeBannerPicture } from './components/change_banner_picture';
import { populateCarousel, triggerClickOnProduct, fetchUrlId } from './components/product_carousel';
import { getData } from './services/prismic_api';
import { hideLoader } from './components/loader';
import carouselAtelier from './components/page_atelier';
import populateEditions from './components/page_editions';
import populatePointsVente from './components/page_points_de_vente';

mobileMenu();
contactForm();

if (document.querySelector(".home-content")) {
  changeBannerPicture(2);
}

if (document.querySelector("#atelier-pictures")) {
  carouselAtelier(2);
}


if (document.querySelector("#product-carousel")) {
  getData().then(results => {
    populateCarousel(results).then(() => {
      hideLoader();
      triggerClickOnProduct();
      fetchUrlId();
    });
  });
}

if (document.querySelector('#container-editions')) {
  getData().then(results => {
    populateEditions(results).then(() => {
      hideLoader();
    });
  });
}

if (document.querySelector("#salons_boutiques")) {
  getData().then(results => {
    populatePointsVente(results);
  });
}
