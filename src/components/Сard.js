class Card {
  constructor({ title, link }, handleCardClick, templateSelector) {
    this._name = title;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    
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
    this._photo.addEventListener('click', () => {
      this._openCard();
    });

    this._likeButton.addEventListener('click', () => {
      this._likeCard();
    });
      
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._deleteCard();
    });
  };
  
  generateCard() {
    this._element = this._getTemplate();
    this._photo = this._element.querySelector('.element__photo');
    this._likeButton = this._element.querySelector('.element__like');

    this._setEventListeners();

    this._element.querySelector('.element__title').textContent = this._name;
    this._photo.src = this._link;
    this._photo.alt = this._name;

    return this._element;
  };

  _likeCard() {
    this._likeButton.classList.toggle('element__like_active');
  };

  _openCard() {
    this._handleCardClick(this._name, this._link);
  };

  _deleteCard() {
    this._element.remove();
    this._element = null;
  };
}

export { Card }