class Section {
  constructor({ initialCards, renderer }, containerSelector) {
    this._initialCards = initialCards;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }
  
  renderCard() {
    this._initialCards.forEach((element) => {
      this._renderer(element);
    });
  }
 
  addItem(element) {
    this._containerSelector.append(element);
  }
}

export { Section }