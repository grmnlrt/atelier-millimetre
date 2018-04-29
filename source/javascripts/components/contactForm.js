function contactForm() {
  const openModals = document.querySelectorAll('#navbar li.contact-trigger');
  const contactBox = document.querySelector('#contact-box');
  const contactForm = contactBox.querySelector(`#contact-form`);
  const overlay = document.querySelector(`.overlay`);

  openModals.forEach(openModal => openModal.addEventListener('click', () => {
    contactForm.reset();
    overlay.classList.add(`active`);
    contactBox.classList.add('active');

    const closeModal = contactBox.querySelector(`.button-close`);
    closeModal.addEventListener('click', () => {
      contactBox.classList.remove(`active`);
      overlay.classList.remove(`active`);
    })
  }));
}

export { contactForm };
