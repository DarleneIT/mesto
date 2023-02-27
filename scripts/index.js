//Переменные 
const popUp = document.querySelector('.popup');
const openEditButton = document.querySelector('.profile__open');
const closeEditButton = popUp.querySelector('.popup__close');

const formElement = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__field_type_name');
const inputJob = document.querySelector('.popup__field_type_job');
const userName = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');

const template = document.querySelector('#card').content;
const cards = document.querySelector('.elements');

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

initialCards.forEach((element) => {

const newCard = template.querySelector('.element').cloneNode(true);

const cardTitle = newCard.querySelector('.element__title');
const cardImg = newCard.querySelector('.element__photo');

cardTitle.textContent = element.name;
cardImg.src = element.link;
cardImg.alt = element.name;

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

cards.append(newCard);
});

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