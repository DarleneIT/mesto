class Section {
  constructor({ initialCards, renderer }, container) {
    this._initialCards = initialCards;
    this._renderer = renderer;
    this._container = container;
  }
  
  renderCard() {
    this._initialCards.forEach(element => {
      this._renderer(element);
    });
  }
 
  addItem(element) {
    this._container.append(element);
  }

  prependItem(element) {
    this._container.prepend(element);
  }
}

export { Section }