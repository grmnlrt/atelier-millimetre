function contactForm() {
  const openModals = document.querySelectorAll('#navbar li.contact-trigger');
  const contactBox = document.querySelector('#contact-box');
  const contactForm = contactBox.querySelector(`#contact-form`)

  openModals.forEach(openModal => openModal.addEventListener('click', () => {
    contactForm.reset();
    contactBox.classList.add('active');

    const closeModal = contactBox.querySelector(`.button-close`);
    closeModal.addEventListener('click', () => {
      contactBox.classList.remove(`active`);
    })
  }));
}

export { contactForm };
