import swal from 'sweetalert';

function notify(status, message) {
  if (status === 'error') {
    swal({
      text: message,
      icon: status,
      button: {
        text: "Réessayer",
        className: "btn btn-primary"
      }
    });
  }
  swal({
    text: message,
    icon: status,
    button: {
      className: "btn btn-primary"
    }
  }).then(() => {
    document.querySelector('#contact-form').reset();
    document.querySelector('#contact-box .button-close').click();
  });
}

export default notify;