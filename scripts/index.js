import Card from './Сard.js';
import { FormValidator } from './FormValidator.js';

//Кнопки
const openEditProfileButton = document.querySelector('.profile__open');
const addNewCardButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close-button');

//Переменные всплывающих окон
const popUpProfile = document.querySelector('.profile-popup');
const popUpNewCard = document.querySelector('.item');
const popUpImage = document.querySelector('.image');

//Переменные редактирования профиля
const formProfile = document.querySelector('.popup__form');
const inputProfileName = document.querySelector('.popup__field_type_name');
const inputProfileJob = document.querySelector('.popup__field_type_job');
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__job');

//Переменные для создания карточек
const template = document.querySelector('#card').content;
const cards = document.querySelector('.elements');

//Переменные попап-картинки
const imageFullSize = document.querySelector('.image__photo');
const nameImageFullSize = document.querySelector('.image__title');

//Селекторы
const selectorConfig = {
  formSelector: '.popup__form', //форма
  submitElement: '.popup__save', //кнопка сохранить
  inputSelector: '.popup__field', //поле ввода
  inactiveButtonClass: 'popup__save_invalid', //неактивная кнопка сохранить
  inputErrorClass: 'popup__error-active', //показать ошибку
  errorClass: 'popup__field-block' //добавляет красную границу
}

//Шесть карточек «из коробки»
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

const validateProfile = new FormValidator(selectorConfig, popUpProfile);
validateProfile.enableValidation();
  
const validateNewCard = new FormValidator(selectorConfig, popUpNewCard);
validateNewCard.enableValidation();

//Функция Открыть окно
const openPopUp = (open) => {
  open.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
  document.addEventListener('mousedown', closeOverlay);
}

//Функция Открыть большую картинку
const popUpFullImage = (name, link) => {
  nameImageFullSize.textContent = name;
  nameImageFullSize.alt = name;
  imageFullSize.src = link;
  openPopUp(popUpImage);
}

//Функция Закрыть окно Esc
const closeEsc = (event) => {
  if (event.key === 'Escape') {
    const pressEsc = document.querySelector('.popup_opened');
    closePopUp(pressEsc);
  }
}

//Функция Закрыть окно Overlay
const closeOverlay = (event) => {
  if (event.target.classList.contains('popup_opened')) {
    closePopUp(event.target);
  }
}

//Функция Закрыть окно крестиком
const closePopUp = (close) => {
  close.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc);
  document.removeEventListener('click', closeOverlay);
}

closeButtons.forEach((button) => {
  const close = button.closest('.popup');
  button.addEventListener('click', () => closePopUp(close));
});


//Открыть редактирование профиля
openEditProfileButton.addEventListener('click', function () {
  openPopUp(popUpProfile);
  validateProfile.resetValidation();
  inputProfileJob.value = userJob.textContent;
  inputProfileName.value = userName.textContent;
}
);

//Внести изменения в профиль
const handleProfileFormSubmit = (event) => {
  event.preventDefault();
  userName.textContent = inputProfileName.value;
  userJob.textContent = inputProfileJob.value;
  closePopUp(popUpProfile);
}
formProfile.addEventListener('submit', handleProfileFormSubmit);

//Открыть форму добавление новой карточки
addNewCardButton.addEventListener('click', function () {
  validateNewCard.resetValidation();
  openPopUp(popUpNewCard);
});

//Создание карточки
const createCard = (element) => {
  const card = new Card(element, '.card-template');
  const cardElement = card.generateCard();
  return cardElement
}

//Загрузить "карточки из коробки"
initialCards.forEach((element) => {
  cards.append(createCard(element));
  });

//Создать карточку
const addNewCard = (element) => {
cards.prepend(createCard(element));
}

//Добавление карточки
const formNewCard = document.querySelector('.item__form');
const inputNewCardName = document.querySelector('.popup__field_type_title');
const inputNewCardLink = document.querySelector('.popup__field_type_link');

formNewCard.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewCard({
    name: inputNewCardName.value,
    link: inputNewCardLink.value,
  });
  closePopUp(popUpNewCard);
  formNewCard.reset();
});

export { popUpFullImage }