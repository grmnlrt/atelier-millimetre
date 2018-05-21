function clickOnDot() {
  const dots = document.querySelectorAll('#dots .dot');
  dots.forEach((dot) => {
    dot.addEventListener('click', (event) => {
      console.log(event.target);
    })
  })
}

export default clickOnDot;
