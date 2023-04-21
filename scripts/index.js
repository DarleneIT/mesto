import Card from './card.js';
import initialCards from './cards.js';

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
const selectors = {
  formSelector: '.popup__form',
  submitElement: '.popup__save',
  inputSelector: '.popup__field',
  inactiveButtonClass: 'popup__save_invalid',
  inputErrorClass: 'popup__error-active',
}

enableValidation(selectors);

//Функция Открыть окно
const openPopUp = (open) => {
  open.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
  document.addEventListener('mousedown', closeOverlay)
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
  openPopUp(popUpNewCard);
});

//Создание карточки
const createCard = (element) => {
  const card = new Card(element, '.card-template');
  const cardElement = card.generateCard()
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
  const saveButton = formNewCard.querySelector(selectors.submitElement);
  if(saveButton.disabled === false) {  
    inactiveButton(saveButton);
    saveButton.classList.add(selectors.inactiveButtonClass); 
  };
  formNewCard.reset();
});