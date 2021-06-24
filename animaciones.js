//inicia sesion
const signInBtn = document.querySelector('.signinBtn');
//registrar
const signUpBtn = document.querySelector('.signupBtn');

const formBox = document.querySelector('.formBx');
const body = document.querySelector('body');

signUpBtn.onclick = function(){
    formBox.classList.add('active');
    body.classList.add('active')
}

signInBtn.onclick = function(){
    formBox.classList.remove('active');
    body.classList.remove('active')
}