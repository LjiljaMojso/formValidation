'use strict';

//elements
const firstName = document.getElementById('name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const btn = document.getElementById('submit');

const errorMain = document.querySelector('.error-main');
const errorName = document.querySelector('.error-name');
const errorLastName = document.querySelector('.error-last-name');
const errorEmail = document.querySelector('.error-email');
const errorPhone = document.querySelector('.error-phone');
const errorMessage = document.querySelector('.error-message');

let validPhone = /[\D]/;
let validName = /[\d]/;

//functions
btn.addEventListener('click', function (e) {
  e.preventDefault();
  let nameValue = firstName.value;
  let lastNameValue = lastName.value;
  let emailValue = email.value;
  let phoneValue = phone.value;
  let msgValue = message.value;

  if (
    nameValue === '' ||
    lastNameValue === '' ||
    emailValue === '' ||
    phoneValue === '' ||
    msgValue === ''
  ) {
    errorMain.textContent = 'Please fill required field/s';
  }
  if (nameValue === '' || nameValue.match(validName)) {
    errorName.textContent = 'Please enter your name';
  }
  if (lastNameValue === '' || lastNameValue.match(validName)) {
    errorLastName.textContent = 'Please enter your last name';
  }
  if (
    emailValue === '' ||
    !emailValue.includes('@') ||
    !emailValue.includes('.')
  ) {
    errorEmail.textContent = 'Please enter your email';
  }
  if (phoneValue.match(validPhone)) {
    errorPhone.textContent = 'Please enter your phone corectly';
  }
  if (msgValue === '') {
    errorMessage.textContent = 'Please enter message';
  }
});
