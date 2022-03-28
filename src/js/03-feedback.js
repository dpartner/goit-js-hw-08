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
    form.email.value = currentValue.email;
    form.message.value = currentValue.message;
    return currentValue;
  }
  return {};
}

function onSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log('Ваш отзыв отправлен', currentValue);
}
