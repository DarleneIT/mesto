let editButton = document.querySelector('.popup__open');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close');

let toggleOpenPopup = () => {
  popup.classList.toggle('popup_opened');
};

let handleEditButtonClick = () => {
  toggleOpenPopup();
};

let handleCloseButtonClick = () => {
    toggleOpenPopup();
}

  editButton.addEventListener('click', handleEditButtonClick);
  closeButton.addEventListener('click', handleCloseButtonClick);