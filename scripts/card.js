class Card {
    constructor(data, templateSelector, handleCardClick) {
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick; //???
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
          this._handleCardClick(this._element);
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
      const imageAltSrc = this._element.querySelector('.element__photo');
      imageAltSrc.src = this._link;
      imageAltSrc.alt = this._name;

      return this._element;
    };

    _likeCard() {
      this._element.querySelector('.element__like').classList.toggle('element__like_active');
    };
   
    _deleteCard() {
        this._element.remove();
    };
}

export default Card