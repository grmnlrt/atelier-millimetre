function populateSalon(container, salons) {
  if (salons.length !== 0) {
    container.insertAdjacentHTML('beforeend', `<div class="row"><div class="col-xs-offset-2 col-xs-8 salons"><h2 class="uppercase">Salons</h2></div></div>`);
    salons.reverse().forEach((salon) => {
      let content;
      if (salon.salon_link.url) {
        content = `<p><a target="_blank" href="${salon.salon_link.url}">${salon.salon_name}</a></p>`
      } else {
        content = `<p>${salon.salon_name}</p>`
      }
      container.querySelector('.salons')
        .insertAdjacentHTML('beforeend', content);
    })
  }
}

function populateBoutique(container, boutiques) {
  if (boutiques.length !== 0) {
    container.insertAdjacentHTML('beforeend', `<div class="row"><div class="col-xs-offset-2 col-xs-8 boutiques"><h2 class="uppercase">Boutiques</h2></div></div>`);
    boutiques.forEach((boutique) => {
      let content;
      if (boutique.boutique_link.url) {
        content = `<p><a target="_blank" href="${boutique.boutique_link.url}">${boutique.boutique_name}</a></p>`
      } else {
        content = `<p>${boutique.boutique_name}</p>`
      }
      container.querySelector('.boutiques')
        .insertAdjacentHTML('beforeend', content);
    })
  }
}

function populatePointsVente(data) {
  const container = document.querySelector("#salons_boutiques");
  populateSalon(container, data[0].data.salons)
  populateBoutique(container, data[0].data.boutiques)
}

export default populatePointsVente;
