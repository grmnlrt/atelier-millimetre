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
  banner.style.backgroundImage = `url('${pictureName}')`;
}

function updateLink(pictureId) {
  const banner = document.querySelector('.banner');
  const picture = document.querySelector(`.dot-lg[data-pic='${pictureId}']`);
  const link = picture.dataset['link'];
  banner.querySelector('a').href = link;
}

function updateTitle(pictureId) {
  const banner = document.querySelector('.banner');
  const picture = document.querySelector(`.dot-lg[data-pic='${pictureId}']`);
  const title = picture.dataset['title'];
  banner.querySelector('h1').innerText = title;
}

function clickOnDot() {
  return new Promise((resolve) => {
    const position = parseInt(event.target.dataset.pic);
    updateTitle(position);
    updateLink(position);
    updateImage(position);
    updateDot(position);
    resolve(position);
  });
}

function autoPlay(counter, numberOfImages) {
  return window.setInterval(() => {
    updateTitle(counter);
    updateLink(counter);
    updateImage(counter);
    updateDot(counter);
    counter += 1;
    if (counter === numberOfImages) {
      counter = 1;
    }
  }, 4000);
}

function changeBannerPicture(counter, numberOfImages) {
  const auto = autoPlay(counter, numberOfImages);
  const dots = document.querySelectorAll('.dot-lg');
  dots.forEach((dot) => {
    dot.addEventListener('click', (event) => {
      clickOnDot().then((data) => {
        window.clearInterval(auto);
        if (data === 4) {
          changeBannerPicture(1);
        } else {
          changeBannerPicture(data + 1);
        }
      });
    });
  });
}

// For Prismic connection

function setFirstPicture(picture) {
  const banner = document.querySelector('.banner');
  banner.style.backgroundImage = `url("${picture.image.url}")`;
  banner.querySelector('h1').innerText = picture.title;
  banner.querySelector('a').href= picture.link.url;
}

function addDots(pictures) {
  const banner = document.querySelector('.banner .homepage-carousel');
  let counter = 1;

  pictures.forEach((picture) => {
    let active = "";
    let link = "#"
    let title = ""
    if (counter === 1) {
      active = " active";
    }
    if (picture.link.url !== undefined) {
      link = picture.link.url;
    }
    if (picture.title !== null) {
      title = picture.title;
    }
    const dot = `<div data-pic="${counter}" data-image="${picture.image.url}" data-title="${title}" data-link="${title}" class="dot-lg picture${counter}${active}"></div>`;
    banner.insertAdjacentHTML('beforeend', dot)
    counter += 1;
  })
}

function populateBanner(pictures) {
  return new Promise((resolve) => {
    setFirstPicture(pictures[0]);
    addDots(pictures);
    resolve(pictures.length);
  });
}

function showBanner() {
  return window.setInterval(() => {
    const banner = document.querySelector('.banner');
    banner.classList.remove('mask');
  }, 500);
}

export { changeBannerPicture, populateBanner, showBanner };
