/*const initialCards = [
  {
    title: 'Архыз',
    link: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9ncyUyMGFuZCUyMHNlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Челябинск',
    link: 'https://images.unsplash.com/photo-1561312176-5aedf7172115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGRvZ3MlMjBhbmQlMjBzZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Иваново',
    link: 'https://images.unsplash.com/photo-1568480418648-be0346569876?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGRvZ3MlMjBhbmQlMjBzZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1509924295413-6722539acbb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxkb2dzJTIwc2VhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Холмогорский район',
    link: 'https://images.unsplash.com/photo-1554224311-beee415c201f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxkb2dzJTIwYW5kJTIwc2VhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Байкал',
    link: 'https://images.unsplash.com/photo-1512723185835-0700e5069a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE0fHxkb2dzJTIwc2VhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  }
];*/

//Селекторы
const validationConfig = {
  formSelector: '.popup__form',
  submitElement: '.popup__save',
  inputSelector: '.popup__field',
  inactiveButtonClass: 'popup__save_invalid',
  inputErrorClass: 'popup__error-active',
  errorClass: 'popup__field-blocked'
}

//Кнопки
const profileEditButton = document.querySelector('.profile__open');
const profileNewAvatar = document.querySelector('.profile__avatar');
const newCardAddButton = document.querySelector('.profile__add-button');

//Переменные всплывающих окон
const popupProfile = document.querySelector('.profile-popup');
const popupNewCard = document.querySelector('.item');
const popupAvatar = document.querySelector('.avatar');

//Переменные для создания карточек
const cards = document.querySelector('.elements');

export { 
  validationConfig,
  cards,
  profileEditButton,
  profileNewAvatar,
  newCardAddButton,
  popupProfile, 
  popupNewCard,
  popupAvatar
}