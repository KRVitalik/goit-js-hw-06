const registerForm = document.querySelector(".login-form");
const emptyEmail = 'Email is empty';
const emptyPassword = 'Password is empty';

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const { email, password } = event.currentTarget;

  if (email.value === '') { window.alert(emptyEmail) }
  else if (password.value === '') { window.alert(emptyPassword) }
  
  const elements = {
    email: email.value,
    password: password.value,
  }
  document.querySelector('.login-form').reset();
  console.log(elements);
});

