import { Popup } from './Popup.js';

class PopupWithForm extends Popup {
  constructor(formSelector, submitForm) {
    super(formSelector);
    this._submitForm = submitForm;
    this._formProfile = formSelector.querySelector('.popup__form');
    this._inputs = Array.from(this._formProfile.querySelectorAll('.popup__field'));
  }

  _getInputValues() {
    const data = {};
    this._inputs.forEach(input => {
      data[input.name] = input.value;
    });
    return data;  
  }
  
  setEventListeners() {
    super.setEventListeners();
    this._formProfile.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitForm(this._getInputValues());
      this.close();
    });
  }
    
  close() {
    super.close();
    this._formProfile.reset();
  }
}

export { PopupWithForm }