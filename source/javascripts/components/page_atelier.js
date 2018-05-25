function updateDot(dotId) {
  const dots = document.querySelectorAll('#dots .dot');
  dots.forEach((dot) => {
    dot.classList.add('empty');
  })
  document.querySelector(`[data-dot-id="${dotId}"]`).classList.remove('empty');
}

function updateImage(imageId) {
  const images = document.querySelectorAll('#atelier-pictures img');
  images.forEach((image) => {
    image.classList.add('hidden');
  })
  document.querySelector(`[data-image-id="${imageId}"]`).classList.remove('hidden');
}

function clickOnDot() {
  const dots = document.querySelectorAll('#dots .dot');
  dots.forEach((dot) => {
    dot.addEventListener('click', (event) => {
      updateImage(event.target.dataset.dotId);
      updateDot(event.target.dataset.dotId);
    })
  })
}

export default clickOnDot;
