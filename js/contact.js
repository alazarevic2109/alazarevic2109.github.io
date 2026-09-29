
const form = document.querySelector('#contactForm');
const message = document.querySelector('.form-message');

form?.addEventListener('submit', e => {
  e.preventDefault();
  message.textContent = 'Hvala! Upit je pripremljen. Za sada nas možete kontaktirati direktno putem Instagrama @party_lab_nis.';
  form.reset();
});
