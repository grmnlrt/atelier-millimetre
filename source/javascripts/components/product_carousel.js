function createMaterialsList(materials) {
  const list = materials.map(material => {
    return `<li>${material.mat}</li>`
  });
  return list.join('');
}

function populateCarousel(products) {
  return new Promise(() => {
    const container = document.querySelector(".product-container");
    const detailsContainer = document.querySelector('#product-details');

    products.forEach((product) => {

      const productPicture = `
        <div class="product-picture" data-product-id="${product.id}">
          <img src="${product.data.image.url}" alt="${product.data.title[0].text}">
        </div>
      `;

      const productDetails = `
        <div class="row hidden" data-product-target="${product.id}">
          <div class="col-xs-12 col-sm-7">
            <h2>${product.data.title[0].text}</h2>
            <p class="description">${product.data.description[0].text}</p>
            <p>La place des mots est à chaque fois différente.</p>
            <p>L’écriture manuscrite est celle de la créatrice.</p>
            <p>La broderie est réalisée à la main.</p>
            <p>Les formats ne sont pas standards.</p>
            <p>L’encadrement est fait sur-mesure.</p>
          </div>
          <div class="col-xs-12 col-sm-4 col-sm-offset-1">
            <h3>Matériaux</h3>
              <ul class="mm-list materials">${createMaterialsList(product.data.materiaux)}</ul>
            <h3>Format</h3>
            <p>${product.data.format}</p>
          </div>
        </div>
      `;

      container.insertAdjacentHTML('beforeend', productPicture)
      detailsContainer.insertAdjacentHTML('beforeend', productDetails)
    })
  });
}

function triggerClickOnProduct() {
  const products = document.querySelectorAll('.product-picture');
}


export { populateCarousel, triggerClickOnProduct };
