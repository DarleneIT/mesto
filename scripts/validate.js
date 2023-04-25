//Показать ошибку
const showError = (errorElement, message, inputErrorClass) => {
    errorElement.textContent = message;
    errorElement.classList.add(inputErrorClass);
};

//Скрыть ошибку
const hideError = (errorElement, selectors) => {
  errorElement.textContent = ' ';
  errorElement.classList.remove(selectors.inputErrorClass);
};

//Вставить значение ошибки
const toggleInputState = (inputElement, selectors) => {
  const isValid = inputElement.validity.valid;
  const inputSectionElement = inputElement.closest(selectors.formSelector);
  const errorElement = inputSectionElement.querySelector(`.${inputElement.id}-error`);
   
  if (isValid) {
    hideError(errorElement, selectors.inputErrorClass);
    } else {
    showError(errorElement, inputElement.validationMessage, selectors.inputErrorClass);
    };
}

//Активировать кнопку Сохранить
const activeButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.removeAttribute('disabled');
  buttonElement.classList.remove(inactiveButtonClass);
};

//Деактивировать кнопку Сохранить
const inactiveButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add(inactiveButtonClass);
};

//Скрыть/отобразить ошибку
const toggleButtonState = (inputs, submitElement, inactiveButtonClass) => {
const formIsValid = inputs.every(inputElement => inputElement.validity.valid);  
  if (formIsValid) {
    activeButton(submitElement, inactiveButtonClass);
    } else {
    inactiveButton(submitElement, inactiveButtonClass);
    };
};

const setEventListeners = (form, selectors) => { // 
  const submitElement = form.querySelector(selectors.submitElement); //
  const inputs = Array.from(form.querySelectorAll(selectors.inputSelector));
    
  inputs.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      toggleInputState(inputElement, selectors);
      toggleButtonState(inputs, submitElement, selectors.inactiveButtonClass);
      });
    });
  toggleButtonState(inputs, submitElement, selectors.inactiveButtonClass);
};

const enableValidation = selectors => {
  const forms = Array.from(document.querySelectorAll(selectors.formSelector));
  forms.forEach(form => {
    setEventListeners(form, selectors);
  });
};