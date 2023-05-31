class Section {
  constructor(renderer, container) {
    this._renderer = renderer;
    this._container = container;
  }
  
  renderCard(userCards) {
    userCards.forEach(element => {
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