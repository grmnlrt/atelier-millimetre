function mobileMenu() {
  const toggleButton = document.querySelector('#navbar .menu-toggle');
  const menuContent = document.querySelector('#navbar .mobile-content ul')
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      toggleButton.classList.toggle('active');
      menuContent.classList.toggle('active');
    })
  }
}

export { mobileMenu }
