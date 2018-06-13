function getData() {
  const type = document.querySelector('#product-carousel, #container-editions').dataset.productType;
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

export { getData };
