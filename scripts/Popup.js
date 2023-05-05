class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._closeX = this._popup.querySelector('.popup__close-button');
  }

  open() {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this.setEventListeners();
  }

  _handleEscClose = (event) => { 
    if (event.key === 'Escape') {
      const pressEsc = this._popup.querySelector('.popup_opened');
      this.close(pressEsc);
    }
  }

  _handleOverlayClose = (event) => {
    if (event.target.classList.contains('popup_opened')) {
    this.close(event.target);
    }
  }

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    document.addEventListener('mousedown', this._handleOverlayClose);
    this._closeX.addEventListener('click', () => {this.close()});
    }
}

export { Popup }