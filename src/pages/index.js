import './index.css';
import { 
  initialCards, 
  selectorConfig,
  cards,
  profileEditButton,
  newCardAddButton,
  popupProfile, 
  popupNewCard } from '../utils/constants.js';
import { Card } from '../components/Сard.js';
import { Section } from '../components/Section.js'
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

//Валидация формы профайла пользователя
const profileValidation = new FormValidator(selectorConfig, popupProfile);
profileValidation.enableValidation();

//Валидация формы добавления новой карточки
const newCardValidation = new FormValidator(selectorConfig, popupNewCard);
newCardValidation.enableValidation();

//Данные профиля
const userInfo = new UserInfo({ userName: '.profile__name', userJob: '.profile__job' })

//Редактировать попап с данными профиля
const editUserInfo = (data) => {
  userInfo.setUserInfo({
    username: data.username,
    job: data.job 
  });
}

//Всплывающее окно редактирования профиля
const popupWithProfile = new PopupWithForm('.profile-popup', editUserInfo);
popupWithProfile.setEventListeners();

//Открыть попап с данными профиля
const popupEditProfile = () => {
  const { username, job } = userInfo.getUserInfo();
  popupWithProfile.setInputValues({ username, job });
  popupWithProfile.open();
  profileValidation.resetValidation();
}
profileEditButton.addEventListener('click', popupEditProfile);

//Всплывающее окно большой картинки
const popupWithImage = new PopupWithImage('.image');
popupWithImage.setEventListeners();
const handleCardClick = (title, link) => {popupWithImage.open(title, link)};

//Cоздание новой карточки и взаимодействие с ней
const createCard = (element) => {
  const card = new Card(element, handleCardClick, '.card-template');
  return card.generateCard();
}

//Отрисовка карточек "из коробки"
const cardSection = new Section(
  {initialCards: initialCards, 
   renderer: (element) => {cardSection.addItem(createCard(element));}},
   cards);
  cardSection.renderCard(initialCards);

//Создать новую карточку
const popupWithCard = new PopupWithForm('.item', ({ title, link }) => {
  cardSection.prependItem(createCard({ title, link }))});
popupWithCard.setEventListeners();

newCardAddButton.addEventListener('click', function() {
  popupWithCard.open();
  newCardValidation.resetValidation();
});