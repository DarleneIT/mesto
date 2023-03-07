//Показать ошибку
const showError = (errorElement, message, inputErrorClass) => {
    errorElement.textContent = message;
    errorElement.classList.add(inputErrorClass);
};

//Скрыть ошибку
const hiddenError = (errorElement, selectors) => {
  errorElement.textContent = '';
  errorElement.classList.remove(selectors.inputErrorClass);
};

//Вставить значение ошибки
const toggleInputState = (inputElement, selectors) => {
  const isValid = inputElement.validity.valid;
  const inputSectionElement = inputElement.closest(selectors.formSelector);
  const errorElement = inputSectionElement.querySelector(`.${inputElement.id}-error`);
   
  if (isValid) {
    hiddenError(errorElement, selectors.inputErrorClass);
    } else {
    showError(errorElement, inputElement.validationMessage, selectors.inputErrorClass);
    }
}

//Активировать кнопку Сохранить
const enableButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.removeAttribute('disabled');
  buttonElement.classList.remove(inactiveButtonClass);
};

//Деактивировать кнопку Сохранить
const disableButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.setAttribute('disabled', true);
  buttonElement.classList.add(inactiveButtonClass);
};

//Скрыть/отобразить ошибку
const toggleButtonState = (inputs, submitElement, inactiveButtonClass) => {
const formIsValid = inputs.every(inputElement => inputElement.validity.valid);  
  if (formIsValid) {
    enableButton(submitElement, inactiveButtonClass);
    } else {
    disableButton(submitElement, inactiveButtonClass);
    }
};

//
const setEventListeners = (form, selectors) => {
  const submitElement = form.querySelector(selectors.submitElement);
  const inputs = Array.from(form.querySelectorAll(selectors.inputSelector));
    
  inputs.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      toggleInputState(inputElement, selectors);
      toggleButtonState(inputs, submitElement, selectors.inactiveButtonClass);
      });
    });
  toggleButtonState(inputs, submitElement, selectors.inactiveButtonClass);
};

//
const enableValidation = (selectors) => {
  const forms = Array.from(document.querySelectorAll(selectors.formSelector));
  forms.forEach(form => {
    setEventListeners(form, selectors);
  });
};