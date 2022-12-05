const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  checkInputs()
})

function checkInputs() {
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const passwordtwoValue = passwordtwo.value.trim()

  if(usernameValue === '') {
    // mostrar o erro
    // adicionar a classe error
    errorValidation(username, 'Prencha esse campo')
  }
  else {
    // adicionar a classe success
    successValidation(username)
  }

  if(emailValue === '') {
    // mostrar o erro
    // adicionar a classe error
    errorValidation(email, 'Prencha esse campo')
  }
  else {
    // adicionar a classe success
    successValidation(email)
  }

  if(passwordValue === '') {
    // mostrar o erro
    // adicionar a classe error
    errorValidation(password, 'Prencha esse campo')
  }
  else if (passwordValue.length < 8) {
    errorValidation(password, 'A senha deve ter no mínimo 8 caracteres')
  }
  else {
    // adicionar a classe success
    successValidation(password)
  }

  if(passwordtwoValue === '') {
    // mostrar o erro
    // adicionar a classe error
    errorValidation(passwordtwo, 'Prencha esse campo')
  }
  else if (passwordValue != passwordValue) {
    errorValidation(passwordtwo, 'As senhas devem ser iguais')
  }
  else {
    // adicionar a classe success
    successValidation(passwordtwo)
  }
}

function errorValidation(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;

  formControl.className = 'form-control error';
  
}

function successValidation(input) {
  const formControl = input.parentElement;
  
  formControl.className = 'form-control success';
}