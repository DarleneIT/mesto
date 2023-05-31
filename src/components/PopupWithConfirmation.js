import { Popup } from './Popup.js';

class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form =  this._popup.querySelector('.popup__form');
  }

  setSubmitAction(submit) {
    this._handleSubmit = submit;
  }
  
  setEventListeners() {

    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleSubmit();
    });
  }
}

export { PopupWithConfirmation }