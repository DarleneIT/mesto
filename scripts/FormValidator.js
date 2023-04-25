class FormValidator {
  constructor(selectorConfig, formSelector) {
    this._selectorConfig = selectorConfig,
    this._formSelector = formSelector,
    this._inputs = Array.from(this._formSelector.querySelectorAll(this._selectorConfig.inputSelector));
    this._button = this._formSelector.querySelector(this._selectorConfig.submitElement);
}

//Показать ошибку
_showError(inputElement) {
  const errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.add(this._selectorConfig.inputErrorClass);
  inputElement.classList.add(this._selectorConfig.errorClass);
  errorElement.textContent = inputElement.validationMessage;
};

//Скрыть ошибку
_hideError(inputElement) {
  const errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._selectorConfig.inputErrorClass);
  inputElement.classList.remove(this._selectorConfig.errorClass);
  errorElement.textContent = ' ';
};

_toggleInputState(inputElement) {
  if (!inputElement.validity.valid) {
  this._showError(inputElement);
  } else {
  this._hideError(inputElement);
  }
};

//Активировать кнопку Сохранить
_activeButton = () => {
  this._button.removeAttribute('disabled');
  this._button.classList.remove(this._selectorConfig.inactiveButtonClass);
}

//Деактивировать кнопку Сохранить
_inactiveButton = () => {
    this._button.setAttribute('disabled', true);
    this._button.classList.add(this._selectorConfig.inactiveButtonClass);
}

_hasInvalidInput() {
 return this._inputs.some((inputElement) => {
     return !inputElement.validity.valid;
   });
}

_toggleButtonState() {
  if(this._hasInvalidInput()) {
    this._inactiveButton(this._selectorConfig);
  } else {
    this._activeButton(this._selectorConfig);
  }
}

_setEventListeners() {
  this._toggleButtonState();
  this._inputs.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
    this._toggleInputState(inputElement);
    this._toggleButtonState();
    });
  });
};

resetValidation() {
  this._toggleButtonState();
  this._inputs.forEach((inputElement) => {
    this._hideError(inputElement);
  });
} 

enableValidation() {
  this._setEventListeners();
  }
}

export { FormValidator }