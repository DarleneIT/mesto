//Переменные 
const popUp = document.querySelector('.popup');
const openEditButton = document.querySelector('.profile__open');
const closeEditButton = popUp.querySelector('.popup__close');

const formElement = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__field_type_name');
const inputJob = document.querySelector('.popup__field_type_job');
const userName = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');

//Открыть попап
const openPopUp = () => {
  inputJob.value = job.textContent;
  inputName.value = userName.textContent;
  popUp.classList.add('popup_opened');
};

const closePopUp = () => {
  popUp.classList.remove('popup_opened');
};

openEditButton.addEventListener('click', openPopUp);
closeEditButton.addEventListener('click', closePopUp);

//Изменение данных в профиле
function handleFormSubmit (event) {
  event.preventDefault();

  userName.textContent = inputName.value;
  job.textContent = inputJob.value;
  closePopUp();
}

formElement.addEventListener('submit', handleFormSubmit);

//Открытие формы добавления карточки
const popItem = document.querySelector('.item');
const openEditItem = document.querySelector('.profile__add-button');
const closeEditItem = popItem.querySelector('.item__close');

const openItem = () => {
  popItem.classList.add('item_opened');
};

const closeItem = () => {
  popItem.classList.remove('item_opened');
};

openEditItem.addEventListener('click', openItem);
closeEditItem.addEventListener('click', closeItem);

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
 
const template = document.querySelector('#card').content;
const cards = document.querySelector('.elements');

initialCards.forEach((element) => {

const newCard = template.querySelector('.element').cloneNode(true);

const cardTitle = newCard.querySelector('.element__title');
const cardImg = newCard.querySelector('.element__photo');

cardTitle.textContent = element.name;
cardImg.src = element.link;
cardImg.alt = element.name;

cards.append(newCard);

//Добавление новой карточки


//Открытие попапа с картинкой
const openImage = document.querySelector('.element__photo');
openImage.addEventListener('click', function () {
  imageClicked.src = element.link;
  imageClicked.alt = element.name;
  nameImageClicked.textContent = cardAlt;

  openPopUp
});

return newCard;
});

//Лайк карточки
const likeButton = document.querySelector('.element__like');

likeButton.addEventListener('click', function() {
  likeButton.classList.toggle('element__like_active');
});


//Удаление карточки
const removeButton = document.querySelector('.element__delete');

removeButton.addEventListener('click', function () {
  const cardDelete = removeButton.closest('.element');
  cardDelete.remove();
});