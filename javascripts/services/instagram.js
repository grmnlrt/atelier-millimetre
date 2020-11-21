function getLastInstagramPost() {
  const card = document.querySelector('#instagram .card_picture');
  if (card) {
    fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=4386346486.f58a127.a5908fe300c94719850cec8ef2253465')
      .then(response => { return response.json() })
      .then(result => {
        const url = result.data[0].images.standard_resolution.url
        card.style.backgroundImage = `url(${url})`;
      });
  }
}

export default getLastInstagramPost;
