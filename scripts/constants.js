const initialCards = [
  {
    name: 'Архыз',
    link: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZG9ncyUyMGFuZCUyMHNlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    name: 'Челябинск',
    link: 'https://images.unsplash.com/photo-1561312176-5aedf7172115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGRvZ3MlMjBhbmQlMjBzZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
  },
  {
    name: 'Иваново',
    link: 'https://images.unsplash.com/photo-1568480418648-be0346569876?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTN8fGRvZ3MlMjBhbmQlMjBzZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
  },
  {
    name: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1509924295413-6722539acbb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxkb2dzJTIwc2VhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    name: 'Холмогорский район',
    link: 'https://images.unsplash.com/photo-1554224311-beee415c201f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxkb2dzJTIwYW5kJTIwc2VhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1512723185835-0700e5069a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE0fHxkb2dzJTIwc2VhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
  }
];

//Селекторы
const selectorConfig = {
  formSelector: '.popup__form',
  submitElement: '.popup__save',
  inputSelector: '.popup__field',
  inactiveButtonClass: 'popup__save_invalid',
  inputErrorClass: 'popup__error-active',
  errorClass: 'popup__field-blocked'
}

//Кнопки
const profileEditButton = document.querySelector('.profile__open');
const newCardAddButton = document.querySelector('.profile__add-button');

//Переменные всплывающих окон
const popupProfile = document.querySelector('.profile-popup');
const popupNewCard = document.querySelector('.item');
const popupImage = document.querySelector('.image');

//Переменные редактирования профиля
const inputProfileName = document.querySelector('.popup__field_type_name');
const inputProfileJob = document.querySelector('.popup__field_type_job');

//Переменные для создания карточек
const cards = document.querySelector('.elements');
const inputNewCardName = document.querySelector('.popup__field_type_title');
const inputNewCardLink = document.querySelector('.popup__field_type_link');

export { 
  initialCards, 
  selectorConfig,
  cards,
  profileEditButton,
  newCardAddButton,
  popupProfile, 
  popupNewCard, 
  popupImage,
  inputProfileName,
  inputProfileJob,
  inputNewCardName,
  inputNewCardLink
}