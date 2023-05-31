class Card {
  constructor(data, { handleCardClick, handleDeleteCard, handleDeleteLike, handleAddLike }, templateSelector) {
    
    this._name = data.name;
    this._link = data.link;
    this._user = data.user;
    this._owner = data.owner._id;
    this._cardId = data._id;

    this._likes = data.likes;
    this._likesLength = data.likes.length;
    this._handleDeleteLike = handleDeleteLike;
    this._handleAddLike = handleAddLike;

    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard; 
  }
  
  getCardId() {
    return this._cardId;
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
      this._checkLikeStatus();
    });
      
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteCard();
    });
  };

  generateCard() {
    this._element = this._getTemplate();
    this._photo = this._element.querySelector('.element__photo');
    this._title = this._element.querySelector('.element__title');
    this._likeButton = this._element.querySelector('.element__like');
    this._deleteButton = this._element.querySelector('.element__delete');
    this._likesCounter = this._element.querySelector('.element__counter');

    this._setEventListeners();
    this._hideTrashIcon();
    this._showMyLikes();

    this._title.textContent = this._name;
    this._photo.src = this._link;
    this._photo.alt = this._name;
    this._likesCounter.textContent = this._likesLength;

    return this._element;
  };

  updateLike(amount) {
    this._likeButton.classList.toggle('element__like_active');
    this._likesCounter.textContent = amount.likes.length;
  };

  _showMyLikes() {
    this._likes.forEach(like => {
      if (like._id === this._user) {
        this._likeButton.classList.add('element__like_active')
      return
      }
    })
  };

  _checkLikeStatus() {
    if (this._likeButton.classList.contains('element__like_active')) {
      this._handleDeleteLike(this._cardId);
    } else {
      this._handleAddLike(this._cardId);
    }
  }

  _openCard() {
    this._handleCardClick(this._name, this._link);
  };

  deleteCard() {
    this._element.remove();
    this._element = null;
  };

  _hideTrashIcon() {
    if (this._user !== this._owner) {
      this._deleteButton.remove();
    }
  };
}

export { Card }