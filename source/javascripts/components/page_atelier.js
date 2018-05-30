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
    image.classList.add('mask');
  })
  document.querySelector(`[data-image-id="${imageId}"]`).classList.remove('mask');
}

function updateText(textId) {
  const texts = document.querySelectorAll('#atelier-content > div');
  texts.forEach((text) => {
    text.classList.add('mask');
  })
  document.querySelector(`[data-text-id="${textId}"]`).classList.remove('mask');
}

function clickOnDot() {
  return new Promise((resolve) => {
    const position = parseInt(event.target.dataset.dotId);
    updateImage(position);
    updateDot(position);
    updateText(position);
    resolve(position);
  });
}

function autoPlay(counter) {
  return window.setInterval(() => {
    updateImage(counter);
    updateDot(counter);
    updateText(counter);
    counter += 1;
    if (counter === 4) {
      counter = 1;
    }
  }, 8000)
}

function carouselAtelier(counter) {
  const auto = autoPlay(counter);
  const dots = document.querySelectorAll('#dots .dot');
  dots.forEach((dot) => {
    dot.addEventListener('click', (event) => {
      clickOnDot().then((data) => {
        window.clearInterval(auto);
        if (data === 3) {
          carouselAtelier(1);
        } else {
          carouselAtelier(data + 1);
        }
      });
    });
  });
}

export default carouselAtelier;
