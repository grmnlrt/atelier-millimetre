function changeBannerPicture() {
  const dots = document.querySelectorAll('.dot-lg');
  const banner = document.querySelector('.banner');

  dots.forEach(dot => {
    dot.addEventListener('click', function(e) {
      const picNumber = e.target.dataset['pic'];
      const picture = document.querySelector(`.dot-lg[data-pic='${picNumber}']`);
      const image = e.target.dataset['image'];

      dots.forEach(dot => dot.classList.remove('active'));
      picture.classList.add('active');
      banner.style.backgroundImage = `url('/images/${image}')`;
    });
  });
}

export { changeBannerPicture };
