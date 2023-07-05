(() => {
  let button = document.getElementById("contact-button");
  let contactForm = document.getElementById("contact-form");
  button.addEventListener("click", (e) => {
    e.preventDefault;
    button.remove();
    let email = `tdsmith201${7 + 1}@gmail.com`;
    contactForm.insertAdjacentHTML(
      "beforeend",
      `<p><a href="mailto:${email}">${email}</a></p>`
    );
  });
})();
