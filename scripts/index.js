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
};

enableValidation(selectors);

//Функция Деактивировать кнопку Сохранить
function inactiveSaveButton(saveIt) { 
  const saveButton = saveIt.querySelector(selectors.submitElement); 
  if(saveButton.disabled === false) { 
    inactiveButton(saveButton);
    saveButton.classList.add(selectors.inactiveButtonClass);
  };
}

//Функция Открыть окно
function openPopUp(open) {
  open.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
  document.addEventListener('click', closeOverlay);
  document.querySelector('.popup__form').reset();
};

//Функция Закрыть окно Esc
const closeEsc = (event) => {
  if (event.key === 'Escape') {
    const pressEsc = document.querySelector('.popup_opened');
    closePopUp(pressEsc);
  };
};

//Функция Закрыть окно Overlay
const closeOverlay = (event) => {
  if (event.target.classList.contains('popup_opened')) {
    closePopUp(event.target);
  }
};

//Функция Закрыть окно крестиком
function closePopUp(close) {
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
function handleProfileFormSubmit(event) {
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
function createCard(element) {
  const imageLink = element.link;
  const imageName = element.name;
  const imageAlt = element.name;
  const newCard = template.querySelector('.element').cloneNode(true);
  newCard.querySelector('.element__title').textContent = imageName;
  const imageCard = newCard.querySelector('.element__photo');

  imageCard.src = imageLink;
  imageCard.alt = imageAlt;

//Открытие попапа с картинкой
  const bigPicture = newCard.querySelector('.element__photo');
  bigPicture.addEventListener('click', function() {
  imageFullSize.src = imageLink;
  imageFullSize.alt = imageName;
  nameImageFullSize.textContent = imageAlt;
  openPopUp(popUpImage);
});

//Лайк карточки
  const likeButton = newCard.querySelector('.element__like'); 
  likeButton.addEventListener('click', function() {
    likeButton.classList.toggle('element__like_active');
});

//Удаление карточки
  const removeButton = newCard.querySelector('.element__delete');
  removeButton.addEventListener('click', function () {
   const cardDelete = removeButton.closest('.element');
   cardDelete.remove();
});
return newCard;
}

//Загрузить "карточки из коробки"
initialCards.forEach(function (element) {
  cards.append(createCard(element));
  });

//Создать карточку
const addNewCard = (element) => {
cards.prepend(createCard(element));
};

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
  inactiveSaveButton(formNewCard);
  formNewCard.reset();
});