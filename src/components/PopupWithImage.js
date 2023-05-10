import { Popup } from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageFullSize = this._popup.querySelector('.image__photo');
    this._nameImageFullSize = this._popup.querySelector('.image__title');
  }

  open(name, link) {
    this._nameImageFullSize.textContent = name;
    this._nameImageFullSize.alt = name;
    this._imageFullSize.src = link;
    super.open();
  }
} 

export { PopupWithImage }