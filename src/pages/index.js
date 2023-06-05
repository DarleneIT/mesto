import './index.css';
import {
  validationConfig,
  cards,
  profileEditButton,
  profileNewAvatar,
  newCardAddButton,
  popupProfile, 
  popupNewCard,
  popupAvatar } from '../utils/constants.js';
import { Card } from '../components/Сard.js';
import { Section } from '../components/Section.js'
import { FormValidator } from '../components/FormValidator.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js'

let userId = null;

//API
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-66/',
  headers: {
    authorization: 'c9ca397d-f5a3-459e-b811-61b33e0fdb3e',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getUserName(), api.getItems()])
  .then(([data, initialCards]) => { 
    userId = data._id;
    userInfo.setUserInfo({ username: data.name, job: data.about, avatar: data.avatar })
    cardSection.renderCard(initialCards);
  })
  .catch(error => console.log(`Ошибка ${error}`))

//ВАЛИДАЦИЯ
// - формы профайла пользователя
const profileValidation = new FormValidator(validationConfig, popupProfile);
profileValidation.enableValidation();

// - формы добавления новой карточки
const newCardValidation = new FormValidator(validationConfig, popupNewCard);
newCardValidation.enableValidation();

// - формы аватара пользователя
const avatarValidation = new FormValidator(validationConfig, popupAvatar);
avatarValidation.enableValidation();

//Всплывающее окно для Delete
const popupWithDelete = new PopupWithConfirmation('.confirm');
popupWithDelete.setEventListeners();

//ПРОФИЛЬ
//Данные профиля
const userInfo = new UserInfo({ userName: '.profile__name', userJob: '.profile__job', avatar: '.profile__avatar'})

//Редактировать данные профиля
const openPopupWithProfile = new PopupWithForm('.profile-popup', (data) => {
  openPopupWithProfile.loadingMessage(true, 'Сохранение...')
  api.setUserInfo(data) 
    .then(res => { 
      userInfo.setUserInfo({
        username: res.name, 
        job: res.about, 
        avatar: res.avatar});
      openPopupWithProfile.close()
     })
    .catch(error => console.log(`Не удалось изменить данные пользователя ${error}`))
    .finally(() => { openPopupWithProfile.loadingMessage(false) })
});
openPopupWithProfile.setEventListeners();

//Открыть попап с данными профиля
const openPopupEditProfile = () => {
  const { username, job } = userInfo.getUserInfo();
  openPopupWithProfile.setInputValues({ username, job });
  openPopupWithProfile.open();
  profileValidation.resetValidation();
}
profileEditButton.addEventListener('click', openPopupEditProfile);

//Редактировать аватар
const openPopupWithNewAvatar = new PopupWithForm('.avatar', (data) => {
  openPopupWithNewAvatar.loadingMessage(true, 'Сохранение...');
  api.setAvatar(data)
   .then(res => {
    userInfo.setUserInfo({
      username: res.name, 
      job: res.about, 
      avatar: res.avatar });
    openPopupWithNewAvatar.close();    
   })
   .catch(error => console.log(`Не удалось изменить аватар ${error}`))
   .finally(() => { openPopupWithNewAvatar.loadingMessage(false) })
});
openPopupWithNewAvatar.setEventListeners();

//Открыть попап с аватаром
const openNewAvatar = () => {
    openPopupWithNewAvatar.open(),
    avatarValidation.resetValidation();
}
profileNewAvatar.addEventListener('click', openNewAvatar);

//КАРТОЧКИ
//Всплывающее окно большой картинки
const openPopupWithImage = new PopupWithImage('.image');
openPopupWithImage.setEventListeners();

//Cоздание новой карточки и взаимодействие с ней
function createCard(cardData) {
  const card = new Card(
    cardData,
    userId,
    {handleCardClick: (title, link) => {openPopupWithImage.open(title, link)},
    handleDeleteCard: () => {
      popupWithDelete.open();
      popupWithDelete.setSubmitAction(() => { 
        api.deleteCard(card.getCardId())
          .then(() => {
            card.deleteCard();
            popupWithDelete.close();
          })
          .catch(error => console.log(`Не удалось выполнить действие. ${error}`))
      })
    },
    handleDeleteLike: (cardId) => {
      api.deleteLike(cardId)
        .then(res => {card.updateLike(res)})
        .catch(error => console.log(`Не удалось выполнить действие. ${error}`))
    },
    handleAddLike: (cardId) => {
      api.addLike(cardId)
        .then(res => {card.updateLike(res)})
        .catch(error => console.log(`Не удалось выполнить действие. ${error}`))
    }},
    '.card-template');
  return card.generateCard();
}

//Отрисовка карточек "из коробки"
const cardSection = new Section((element) => {
  cardSection.addItem(createCard(element))}, cards);
  
//Создать новую карточку
const openPopupWithCard = new PopupWithForm('.item', (data) => {
  openPopupWithCard.loadingMessage(true, 'Создание...');
  api.addCard(data)
    .then((dataCard) => {
      cardSection.prependItem(createCard(dataCard));
      openPopupWithCard.close();
    })
  .catch(error => console.log(`Не удалось загрузить картинку ${error}`))
  .finally(() => { openPopupWithCard.loadingMessage(false) })
})

openPopupWithCard.setEventListeners();

newCardAddButton.addEventListener('click', function() {
  openPopupWithCard.open();
  newCardValidation.resetValidation();
});