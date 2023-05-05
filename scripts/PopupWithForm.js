import { Popup } from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._formProfile = document.querySelector('.popup__form');
    this._inputs = Array.from(this._formProfile.querySelectorAll('.popup__field'));
    this._submitElement = this._formProfile.querySelector('.popup__save');
  }

  _getInputValues() {
    this._inputElement = {};
    this._inputs.forEach((input) => {
      this._inputElement[input.name] = input.value;
    });
    return this._inputElement;
  }
  
  setEventListeners() {
    this._formProfile.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log(this._submitForm);
      this._submitForm(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }
    
  close() {
    this._formProfile.reset();
    super.close();
  }
}

export { PopupWithForm }