import notify from '../components/alert';

function sendMail() {
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const msgSuccess = 'Votre message a bien été envoyé';
      const msgError = 'Une erreur est survenue';

      fetch('//formspree.io/mm.millimetre@gmail.com', {
        method: 'post',
        mode: 'cors',
        headers: {
         'Accept': 'application/json'
        },
        body: new FormData(form)
      }).then(function(response) {
        if (!response.ok) {
          notify("error", msgError);
          return Promise.reject(new Error(response.statusText))
        }
        notify("success", msgSuccess);
        return Promise.resolve(response)
      }).catch(function(error) {
        notify("error", msgError);
      });
    });
  }
}

export default sendMail;