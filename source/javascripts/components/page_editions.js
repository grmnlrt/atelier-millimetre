function populateEditions(results) {
  return new Promise((resolve) => {
    results.forEach((edition) => {
      const container = document.querySelector('#container-editions');

      const description = edition.data.description.map((paragraph) => {
        return `<p>${paragraph.text}</p>`
      }).join('');

      const editionToInsert = `
        <div class="row">
          <div class="col-xs-12">
            <div class="h2">${edition.data.title[0].text}</div>
          </div>
          <div class="col-xs-12 col-sm-6">
            <img src="${edition.data.image_1.url}" alt="Éditions minuscules - ${edition.data.title[0].text}" class="image-editions">
          </div>
          <div class="col-xs-12 col-sm-6 text-editions text-center">${description}</div>
          <div class="col-xs-12 col-sm-6">
            <img src="${edition.data.image_2.url}" alt="Livre atelier Millimètre - ${edition.data.title[0].text}" class="image-editions">
          </div>
          <div class="col-xs-12 col-sm-6">
            <img src="${edition.data.image_3.url}" alt="impression atelier Millimètre - ${edition.data.title[0].text}" class="image-editions">
          </div>
          <div class="spacer-large"></div>
        </div>
      `;

      resolve(container.insertAdjacentHTML('beforeend', editionToInsert));
    });
  });
}

export default populateEditions;
