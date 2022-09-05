import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');

const inputEl = document.querySelector('input');

const textareaEl = document.querySelector('textarea');

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

populateData();

formEl.addEventListener('submit', onFormSubmit);

formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {

  formData.email = inputEl.value;
  formData.message = textareaEl.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}

function onFormSubmit(event) {
  event.preventDefault();
  formData.email = inputEl.value;
  formData.message = textareaEl.value;
  console.log(formData);

  event.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}

function populateData() {
  if (localStorage.getItem(STORAGE_KEY)) {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedData);
    textareaEl.value = parsedData.message;

    inputEl.value = parsedData.email;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(parsedData));
  }
}


function submitForm(event) {
    event.preventDefault();
    console.log({ 'email': form.email.value, 'message': form.message.value });
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();

}