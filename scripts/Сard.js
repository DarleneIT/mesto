import { popUpFullImage } from "./index.js"

class Card {
    constructor(data, templateSelector) {
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
    }

    _getTemplate() {
      const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
      return cardElement;
    };

    _setEventListeners() {
      this._element.querySelector('.element__photo').addEventListener('click', () => {
        this._openCard();
      });

      this._element.querySelector('.element__like').addEventListener('click', () => {
          this._likeCard();
       });
      
      this._element.querySelector('.element__delete').addEventListener('click', () => {
          this._deleteCard();
       });
     };
  
    generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();

      this._element.querySelector('.element__title').textContent = this._name;
      this._element.querySelector('.element__photo').src = this._link;
      this._element.querySelector('.element__photo').alt = this._name;

      return this._element;
    };


    _likeCard() {
      this._element.querySelector('.element__like').classList.toggle('element__like_active');
    };

    _openCard() {
      popUpFullImage(this._name, this._link);
    };

    _deleteCard() {
        this._element.remove();
    };
}

export { Card }