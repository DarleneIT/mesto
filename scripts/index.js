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
  inactiveButtonClass: '.popup__save_invalid',
  inputErrorClass: '.popup__error-active',
}

enableValidation(selectors);

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

//Функция Открыть окно
function openPopUp(open) {
  open.classList.add('popup_opened');
  closeEsc(open);
  closeOverlay(open);
};

//Функция Закрыть окно Esc
function closeEsc(pressEsc) {
document.addEventListener('keydown', (event) => {
  if(event.key === 'Escape') {
    pressEsc.classList.remove('popup_opened');
    };
  });
};

//Функция Закрыть окно Overlay
function closeOverlay(pressOverlay) {
  pressOverlay.addEventListener('click', (event) => {
    if(event.currentTarget === event.target) {
      closePopUp(pressOverlay);
    };
  });
};

//Функция Закрыть окно крестиком
function closePopUp(close) {
  close.classList.remove('popup_opened');
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
const inputNewCardName = document.querySelector('.popup__field_type_title');
const inputNewCardLink = document.querySelector('.popup__field_type_link');

formNewCard.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewCard({
    name: inputNewCardName.value,
    link: inputNewCardLink.value,
  });

  event.target.reset();
  closePopUp(popUpNewCard);
});