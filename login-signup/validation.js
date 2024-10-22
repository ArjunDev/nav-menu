const form = document.getElementById('form');
const firstNameInput = document.getElementById('firstname-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const repeatPasswordInput = document.getElementById('repeatpassword-input');
const errorMessage = document.querySelector('.error-message');

signup();

function signup(){
  form.addEventListener('submit', (e) => {
    let errors = [];
    if(firstNameInput){
      //first we have a firstnameinput then we are in signup
      errors = getSignupFormErrors(firstNameInput.value,emailInput.value,passwordInput.value,repeatPasswordInput.value);
    }else{
      //first we don't have a firstnameinput then we are in login
      errors = getLoginFormErrors(emailInput.value,passwordInput.value);
    }
    if(errors.length > 0){
      e.preventDefault();
      errorMessage.innerText = errors.join(". ")
      //join method will combine all the strings in an array into single string 
    }
  });
}

function getSignupFormErrors(firstname, email, password, repeatpassword){
  let errors = [];
  if(firstname === "" || firstname == null){
    errors.push('First name is required');
    firstNameInput.parentElement.classList.add('incorrect');
  }
  if(email === "" || email == null){
    errors.push('Email is required');
    emailInput.parentElement.classList.add('incorrect');
  }
  if(password.length < 8){
    errors.push('Password must be atleast 8 characters');
    passwordInput.parentElement.classList.add('incorrect');
  }

  if(password === "" || password == null){
  errors.push('Password is required');
  passwordInput.parentElement.classList.add('incorrect');
  }
  if(password !== repeatpassword){
  errors.push('Password does not match repeated password');
  passwordInput.parentElement.classList.add('incorrect');
  repeatPasswordInput.parentElement.classList.add('incorrect');
}
return errors;
}

function getLoginFormErrors(email, password){
  let errors = [];
  if(email === "" || email == null){
    errors.push('Email is required');
    emailInput.parentElement.classList.add('incorrect');
  }
  if(password === "" || password == null){
  errors.push('Password is required');
  passwordInput.parentElement.classList.add('incorrect');
  }
  return errors;
}

const allInputs = [firstNameInput, emailInput, passwordInput, repeatPasswordInput].filter(input => input != null);

allInputs.forEach(input => {
  input.addEventListener('input', () =>{
    if(input.parentElement.classList.contains('incorrect')){
      //console.log("hi");
      input.parentElement.classList.remove('incorrect');
      errorMessage.innerText = "";
    }
  });
});
