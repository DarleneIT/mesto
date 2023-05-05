import { 
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
  inputNewCardLink } from './constants.js';
import { Card } from './Сard.js';
import { Section } from './Section.js'
import { FormValidator } from './FormValidator.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';

//Валидация формы профайла пользователя
const profileValidation = new FormValidator(selectorConfig, popupProfile);
profileValidation.enableValidation();

//Валидация формы добавления новой карточки
const newCardValidation = new FormValidator(selectorConfig, popupNewCard);
newCardValidation.enableValidation();

//ПРОФИЛЬ
//Данные профиля
const userProfile = new UserInfo({ userName: '.profile__name', userJob: '.profile__job' })

//Редактировать попап с данными профиля
const editUserInfo = (data) => {
  userProfile.setUserInfo({
    userName: data.name,
    userJob: data.job 
  });
}

//Всплывающее окно редактирования профиля
const popupWithProfile = new PopupWithForm(popupProfile, editUserInfo);
popupWithProfile.setEventListeners();

//Открыть попап с данными профиля
const popupEditProfile = () => {
  const defaultUserData = userProfile.getUserInfo();
  inputProfileName.value = defaultUserData.name;
  inputProfileJob.value = defaultUserData.job;
  popupWithProfile.open();
  profileValidation.resetValidation();
}
profileEditButton.addEventListener('click', popupEditProfile);

//КАРТОЧКИ
//Всплывающее окно большой картинки
const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();
const handleCardClick = (name, link) => {popupWithImage.open(name, link)};

//Cоздание новой карточки и взаимодействие с ней
const createCard = (element) => {
  const card = new Card(element, handleCardClick, '.card-template');
  const cardElement = card.generateCard();
  return cardElement
}

//Отрисовка карточек "из коробки" на странице
const cardSection = new Section(
  {initialCards: initialCards, 
   renderer: (element) => { 
    cardSection.addItem(createCard(element));}
  }, 
  cards);
cardSection.renderCard(initialCards);

//Создать карточку в начале списка
const addNewCard = (element) => {
  cards.prepend(createCard(element));
}
const submitNewCard = () => {
  const cardInfo = {
    name: inputNewCardName.value,
    link: inputNewCardLink.value
  }
  addNewCard(cardInfo)
}

const popupWithCard = new PopupWithForm(popupNewCard, submitNewCard);
popupWithCard.setEventListeners();

newCardAddButton.addEventListener('click', function() {
  popupWithCard.open();
  newCardValidation.resetValidation();
});