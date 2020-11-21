function getData() {
  const type = document.querySelector('#product-carousel, #container-editions, #salons_boutiques').dataset.productType;
  const Prismic = require('prismic-javascript');
  const apiEndpoint = "https://mm-millimetrefr.prismic.io/api/v2";
  const apiQuery = Prismic.Predicates.at('document.type', type);

  return new Promise((resolve) => {
    Prismic.getApi(apiEndpoint).then(function(api) {
      return api.query(apiQuery);
    }).then(function(response) {
      resolve(response.results);
    }, function(err) {
      resolve(err);
    });
  });
}

function fetchCarouselImages() {
  const Prismic = require('prismic-javascript');
  const apiEndpoint = "https://mm-millimetrefr.prismic.io/api/v2";
  const apiQuery = Prismic.Predicates.at('document.type', "carousel-home");

  return new Promise((resolve) => {
    Prismic.getApi(apiEndpoint).then(function(api) {
      return api.query(apiQuery);
    }).then(function(response) {
      resolve(response.results[0].data.slide);
    }, function(err) {
      resolve(err);
    });
  });
}

export { getData, fetchCarouselImages };
