const formSubmit = document.querySelector('.login-form');
formSubmit.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  const globalForm = event.currentTarget;
  const emailForm = globalForm.elements.email.value.trim();
  const passwordForm = globalForm.elements.password.value.trim();

  if (emailForm === '' || passwordForm === '') {
    alert('All form fields must be filled in');
    return;
  }

  const collectForm = {
    email: emailForm,
    password: passwordForm,
  };
  console.log(collectForm);
  globalForm.reset();
}
