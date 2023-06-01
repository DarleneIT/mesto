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

//API
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-66/',
  headers: {
    authorization: 'c9ca397d-f5a3-459e-b811-61b33e0fdb3e',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getUserName(), api.getItems()])
  .then(([data, serverCard]) => { 
    serverCard.forEach(element => element.user = data._id)
    userInfo.setUserInfo({username: data.name, job: data.about, avatar: data.avatar})
    cardSection.renderCard(serverCard)
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
const popupWithProfile = new PopupWithForm('.profile-popup', (data) => {
  popupWithProfile.loadingMessage(true, 'Сохранение...')
  api.setUserInfo(data) 
    .then(res => { 
      userInfo.setUserInfo({
        username: res.name, 
        job: res.about, 
        avatar: res.avatar});
      popupWithProfile.close()
     })

    .catch(error => console.log(`Не удалось изменить данные пользователя ${error}`))
    .finally(() => { popupWithProfile.loadingMessage(false, 'Сохранить') })
});
popupWithProfile.setEventListeners();

//Открыть попап с данными профиля
const popupEditProfile = () => {
  const { username, job } = userInfo.getUserInfo();
  popupWithProfile.setInputValues({ username, job });
  popupWithProfile.open();
  profileValidation.resetValidation();
}
profileEditButton.addEventListener('click', popupEditProfile);

//Редактировать аватар
const popupWithNewAvatar = new PopupWithForm('.avatar', (data) => {
  popupWithNewAvatar.loadingMessage(true, 'Сохранение...');
  api.setAvatar(data)
   .then(res => {
    userInfo.setUserInfo({
      username: res.name, 
      job: res.about, 
      avatar: res.avatar });
    popupWithNewAvatar.close();    
   })
   .catch(error => console.log(`Не удалось изменить аватар ${error}`))
   .finally(() => { popupWithNewAvatar.loadingMessage(false, 'Сохранить') })
});
popupWithNewAvatar.setEventListeners();

//Открыть попап с аватаром
const popupNewAvatar = () => {
    popupWithNewAvatar.open(),
    avatarValidation.resetValidation();
}
profileNewAvatar.addEventListener('click', popupNewAvatar);

//КАРТОЧКИ
//Всплывающее окно большой картинки
const popupWithImage = new PopupWithImage('.image');
popupWithImage.setEventListeners();

//Cоздание новой карточки и взаимодействие с ней
function createCard(element) {
  const card = new Card(
     element,
    {handleCardClick: (title, link) => {popupWithImage.open(title, link)},

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
const popupWithCard = new PopupWithForm('.item', (data) => {
  popupWithCard.loadingMessage(true, 'Создание...');
  Promise.all([api.getUserName(), api.addCard(data)])
    .then(([data, dataCard]) => {
      dataCard.user = data._id;
      cardSection.prependItem(createCard(dataCard))
      popupWithCard.close();
    })
  .catch(error => console.log(`Не удалось загрузить картинку ${error}`))
  .finally(() => { popupWithCard.loadingMessage(false, 'Создать') })
})
popupWithCard.setEventListeners();

newCardAddButton.addEventListener('click', function() {
  popupWithCard.open();
  newCardValidation.resetValidation();
});