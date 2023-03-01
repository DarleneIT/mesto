//Кнопки
const openEditProfileButton = document.querySelector('.profile__open');
const addNewCardButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelectorAll('.popup__close-button');

//Переменные всплывающих окон
const popUpProfile = document.querySelector('.popup');
const popUpNewCard = document.querySelector('.items');
const popUpImage = document.querySelector('.images');

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

//Шесть карточек «из коробки»
const initialCards = [
   {
     name: 'Архыз',
     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
   },
   {
     name: 'Челябинская область',
     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
   },
   {
     name: 'Иваново',
     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
   },
   {
     name: 'Камчатка',
     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
   },
   {
     name: 'Холмогорский район',
     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
   },
   {
     name: 'Байкал',
     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
   }
];

//Функция Открыть окно
function openPopUp(open) {
  open.classList.add('popup_opened');
}

//Функция Закрыть окно
function closePopUp(close) {
  close.classList.remove('popup_opened');
}
closeButton.forEach((button) => {
  const close = button.closest('.popup');
  button.addEventListener('click', () => closePopUp(close));
});

//Открыть редактирование профиля
openEditProfileButton.addEventListener('click', function () {
  openPopUp(popUpProfile);
  inputProfileJob.value = userJob.textContent;
  inputProfileName.value = userName.textContent;
});

//Внести изменения в профиль
function handleFormSubmit(event) {
  event.preventDefault();
  userName.textContent = inputProfileName.value;
  userJob.textContent = inputProfileJob.value;
  closePopUp(popUpProfile);
}
formProfile.addEventListener('submit', handleFormSubmit);

//Открыть форму добавление новой карточки
addNewCardButton.addEventListener('click', function () {
  openPopUp(popUpNewCard);
});
 
//Рендер карточки
function renderCard(element) {
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
  cards.append(renderCard(element));
  });

//Создать карточку
const addNewCard = (element) => {
cards.prepend(renderCard(element));
};

//Добавление карточки
const formNewCard = document.querySelector('.item__form');
const inputNewCardName = document.querySelector('.item__field_type_name');
const inputNewCardLink = document.querySelector('.item__field_type_link');

formNewCard.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewCard({
    name: inputNewCardName.value,
    link: inputNewCardLink.value,
  });

  event.target.reset();
  closePopUp(popUpNewCard);
});