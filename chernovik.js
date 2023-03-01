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


//ниже код работал с ошибкой - не закрывалась кнопка Сохранить
//и вместо двух попапов открывался только один

//Функция открытия попап - ДОДЕЛАТЬ
const openPopUp = () => {
    popUp.classList.add('popup_opened');
  };
  
  //Открыть редактирование профиля
  openEditButton.addEventListener('click', function () { 
    openPopUp(popupProfile);
  });
  
  
  //Открыть добавление новой карточки
  openAddButton.addEventListener('click', function () {
    openPopUp(popupItem);
  });
  
  
  //Закрыть любой попап
  function closePopUp(close) {
    close.classList.remove('popup_opened');
  }
  
  closeButton.forEach((button) => {
    const close = button.closest(".popup");
    button.addEventListener("click", () => closePopUp(close));
  });
  
  
  //Изменение данных в профиле
  function handleFormSubmit (event) {
    event.preventDefault();
  
    userName.textContent = inputName.value;
    job.textContent = inputJob.value;
  }
  
  formElement.addEventListener('submit', handleFormSubmit);

  //код ниже почти работает
  //Переменные 
const popUp = document.querySelector('.popup');

const popupProfile = document.querySelector('.popup-profile');
const popupItem = document.querySelector('.popup-item');
const popupImage = document.querySelector('.popup-image');

//Кнопки
const openEditButton = document.querySelector('.profile__open');
const openAddButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.close-button');

//Форма профиля
const formElement = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__field_type_name');
const inputJob = document.querySelector('.popup__field_type_job');
const userName = document.querySelector('.profile__name');
const job = document.querySelector('.profile__job');


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

const template = document.querySelector('#card').content;
const cards = document.querySelector('.elements');

const newCard = template.querySelector('.element').cloneNode(true);

const cardTitle = newCard.querySelector('.element__title'); //
const cardImg = newCard.querySelector('.element__photo');

cardTitle.textContent = element.name;
cardImg.src = element.link; //imageCard.src = cardLink;
cardImg.alt = element.name; //imageCard.alt = cardAlt;

cards.prepend(newCard);

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

//Открытие попап картинки
const bigPicture = newCard.querySelector('.element__photo');

});


//Новая карточка


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
closeButton.addEventListener('click', closePopUp);

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

//Убрала из кода 01/03


 //Открытие попап картинки ДОПИСАТЬ
 const bigPicture = newCard.querySelector('.element__photo');
 bigPicture.addEventListener('click', function() {
  imageClicked.src = imgLink;
  imageClicked.alt = imgName;
  nameImageClicked.textContent = imgAlt;
//Добавить функцию открытия попап
 });
 
 
 
 //Новая карточка ДОПИСАТЬ
  //Переменнные карточки - не работают
  const formNewItem = document.querySelector('.item__form');
  const inputItemName = document.querySelector('.item__field_type_name');
  const inputItemLink = document.querySelector('.item__field_type_link');
  const itemName = document.querySelector('.element__info');


//Создать новую карточку
 function handleNewCard (event) {
  event.preventDefault();

  const addCard = template.querySelector('.element').cloneNode(true);

  cards.prepend(addCard);
}
formNewItem.addEventListener('submit', handleNewCard);

 //Открытие формы добавления карточки
//const popItem = document.querySelector('.item');
//const closeEditItem = popItem.querySelector('.item__close');
 
//const openItem = () => {
// popItem.classList.add('item_opened');
//};
//addNewCardButton.addEventListener('click', openItem);
