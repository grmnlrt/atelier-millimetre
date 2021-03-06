function createMaterialsList(materials) {
  const list = materials.map((material) => {
    return `<li>${material.mat}</li>`
  });
  return list.join('');
}

function createDescriptionParagraphs(description) {
  const paragraphs = description.map((desc) => {
    return `<p>${desc.text}</p>`;
  });
  return paragraphs.join('');
}

function CompareForSort(first, second)
{
  if (first.data.position == second.data.position) {
    return 0;
  }
  if (first.data.position < second.data.position) {
    return -1;
  } else {
    return 1;
  }
}

function populateCarousel(products) {
  const sortedProducts = products.sort(CompareForSort)
  return new Promise((resolve) => {
    const container = document.querySelector(".product-container");
    const detailsContainer = document.querySelector('#product-details');

    let index = 0;
    sortedProducts.forEach((product) => {

      const productPicture = `
        <div class="product-picture ${index === 0 ? "" : "unselected" }" data-product-id="${product.id}">
          <img src="${product.data.image.url}" alt="${product.data.title[0].text}">
        </div>
      `;

      const productLink = `<a class="btn btn-primary" href="${product.data.shop_link.url}" target="_blank">Acheter en ligne</a>`;

      const productDetails = `
        <div class="row details ${index === 0 ? "" : "product-hidden" }" data-product-target="${product.id}">
          <div class="col-xs-12 col-sm-7">
            <h2>${product.data.title[0].text}</h2>
            <div class="description">${createDescriptionParagraphs(product.data.description)}</div>
            ${product.data.shop_link.url? productLink : ""}
          </div>
          <div class="col-xs-12 col-sm-4 col-sm-offset-1">
            <h3>Matériaux</h3>
              <ul class="mm-list materials">${createMaterialsList(product.data.materiaux)}</ul>
            <h3>Format</h3>
            <p>${product.data.format}</p>
            <h3>Temps de réalisation</h3>
            <p>${product.data.time}</p>
          </div>
        </div>
      `;

      container.insertAdjacentHTML('beforeend', productPicture);
      resolve(detailsContainer.insertAdjacentHTML('beforeend', productDetails));
      index += 1;
    })
  });
}

function showProductDetails(product) {
  const details = document.querySelector(`[data-product-target="${product.dataset.productId}"]`);
  product.classList.remove('unselected');
  details.classList.remove('product-hidden');
}

function hideProductDetails(product) {
  const details = document.querySelector(`[data-product-target="${product.dataset.productId}"]`);
  product.classList.add('unselected');
  details.classList.add('product-hidden');
}

function triggerClickOnProduct() {
  const products = document.querySelectorAll('.product-picture');
  products.forEach((product) => {
    product.addEventListener('click', () => {
      products.forEach((product) => {
        hideProductDetails(product);
      });
      showProductDetails(product);
      window.location.hash = `#${product.dataset.productId}`;
      document.querySelector('.product-container').scrollLeft = product.offsetLeft;
    });
  });
}

function fetchUrlId() {
  if (window.location.hash !== "") {
    setTimeout(() => {
      document.querySelector(`[data-product-id="${window.location.hash.substr(1)}`).click();
    }, 500)
  }
}


export { populateCarousel, triggerClickOnProduct, fetchUrlId };
