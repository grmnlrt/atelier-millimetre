function updateDot(dotId) {
  const dots = document.querySelectorAll('.dot-lg');
  dots.forEach((dot) => {
    dot.classList.remove('active');
  })
  document.querySelector(`[data-pic="${dotId}"]`).classList.add('active');
}

function updateImage(pictureId) {
  const banner = document.querySelector('.banner');
  const picture = document.querySelector(`.dot-lg[data-pic='${pictureId}']`);
  const pictureName = picture.dataset['image'];
  picture.classList.add('active');
  banner.style.backgroundImage = `url('/images/${pictureName}')`;
}

function clickOnDot() {
  return new Promise((resolve) => {
    const position = parseInt(event.target.dataset.pic);
    updateImage(position);
    updateDot(position);
    resolve(position);
  });
}

function autoPlay(counter) {
  return window.setInterval(() => {
    updateImage(counter);
    updateDot(counter);
    counter += 1;
    if (counter === 5) {
      counter = 1;
    }
  }, 4000)
}

function changeBannerPicture(counter) {
  const auto = autoPlay(counter);
  const dots = document.querySelectorAll('.dot-lg');
  console.log(dots);
  dots.forEach((dot) => {
    dot.addEventListener('click', (event) => {
      clickOnDot().then((data) => {
        window.clearInterval(auto);
        if (data === 4) {
          console.log('reset data');
          changeBannerPicture(1);
        } else {
          changeBannerPicture(data + 1);
        }
      });
    });
  });
}

export { changeBannerPicture };
