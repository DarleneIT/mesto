import { Popup } from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form =  this._popup.querySelector('.popup__form');
    this._inputs = Array.from(this._form.querySelectorAll('.popup__field'));
    this._saveButton = this._form.querySelector('.popup__save');
  }

  _getInputValues() {
    const data = {};
    this._inputs.forEach((input) => {
      data[input.name] = input.value;
    });
    return data;  
  }
  
  setInputValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }
  
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitForm(this._getInputValues());
      this.close();
    });
  }

  loadingMessage(loadInProgress, saveButtonMsg) {
    if (loadInProgress) {
      this._saveButton.textContent = saveButtonMsg;
      this._saveButton.disabled = true;
    } else {
      this._saveButton.textContent = saveButtonMsg;
      this._saveButton.disabled = false;
    }
  }
    
  close() {
    super.close();
    this._form.reset();
  }
}

export { PopupWithForm }