function changeBannerPicture() {
  const picture1 = document.querySelector('.dot-lg.picture1');
  const picture2 = document.querySelector('.dot-lg.picture2');
  const picture3 = document.querySelector('.dot-lg.picture3');
  const picture4 = document.querySelector('.dot-lg.picture4');
  const dots = document.querySelectorAll('.dot-lg');
  const banner = document.querySelector('.banner');

  picture1.addEventListener('click', () => {
    banner.style.backgroundImage = "url('/images/notebook.jpg')";
    dots.forEach(dot => dot.classList.remove('active'));
    picture1.classList.add('active');
  });

  picture2.addEventListener('click', () => {
    banner.style.backgroundImage = "url('/images/millimetre.jpg')";
    dots.forEach(dot => dot.classList.remove('active'));
    picture2.classList.add('active');
  });

  picture3.addEventListener('click', () => {
    banner.style.backgroundImage = "url('/images/more_frames.jpg')";
    dots.forEach(dot => dot.classList.remove('active'));
    picture3.classList.add('active');
  });

  picture4.addEventListener('click', () => {
    banner.style.backgroundImage = "url('/images/atelier.jpg')";
    dots.forEach(dot => dot.classList.remove('active'));
    picture4.classList.add('active');
  });
}

export { changeBannerPicture };
