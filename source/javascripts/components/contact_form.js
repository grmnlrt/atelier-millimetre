function contactForm() {
  const openModals = document.querySelectorAll('.contact-trigger');
  const contactBox = document.querySelector('#contact-box');
  // const contactForm = contactBox.querySelector('#contact-form');
  const overlay = document.querySelector('.overlay');

  openModals.forEach(openModal => openModal.addEventListener('click', () => {
    // contactForm.reset();
    overlay.classList.add('active');
    contactBox.classList.add('active');

    const buttonClose = contactBox.querySelector('.button-close');
    buttonClose.addEventListener('click', () => {
      contactBox.classList.remove('active');
      overlay.classList.remove('active');
    })
  }));
}

export { contactForm };
