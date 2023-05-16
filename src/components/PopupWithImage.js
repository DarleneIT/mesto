import { Popup } from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageFullSize = this._popup.querySelector('.image__photo');
    this._nameImageFullSize = this._popup.querySelector('.image__title');
  }

  open(title, link) {
    this._nameImageFullSize.textContent = title;
    this._nameImageFullSize.alt = title;
    this._imageFullSize.src = link;
    super.open();
  }
} 

export { PopupWithImage }