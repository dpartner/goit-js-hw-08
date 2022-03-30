import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

let currentValue = onCurrentValueOfInput();

function onInput(e) {
  const inputName = e.target.name;
  const inputValue = e.target.value;

  if (inputName === 'email') {
    currentValue.email = inputValue;
  } else if (inputName === 'message') {
    currentValue.message = inputValue;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(currentValue));
}

function onCurrentValueOfInput() {
  const currentValue = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (currentValue) {
    if (currentValue.email) {
      form.email.value = currentValue.email;
    }
    if (currentValue.message) {
      form.message.value = currentValue.message;
    }
    return currentValue;
  }
  return {};
}

function onSubmit(e) {
  e.preventDefault();
  if (form.email.value && form.message.value) {
    console.log('Ваш отзыв отправлен', currentValue);
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  } else {
    console.log('❌ заполните все поля, для отправки отзыва');
  }
}
