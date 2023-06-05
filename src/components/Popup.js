class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeX = this._popup.querySelector('.popup__close-button');
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (event) => { 
    if (event.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayClose = (event) => {
    if (event.target.classList.contains('popup_opened')) {
    this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', this._handleOverlayClose);
    this._closeX.addEventListener('click', () => {this.close()});
    }
}

export { Popup }