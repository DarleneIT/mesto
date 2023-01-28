let popup = document.querySelector('.popup');
let openEditButton = document.querySelector('.popup__open');
let closeEditButton = popup.querySelector('.popup__close');

let OpenPopup = () => {
  popup.classList.add('popup_opened');
};

let handleEditButtonClick = () => {
  OpenPopup();
};

let ClosePopup = () => {
  popup.classList.remove('popup_opened');
};
let handleCloseButtonClick = () => {
    ClosePopup();
}

openEditButton.addEventListener('click', handleEditButtonClick);
closeEditButton.addEventListener('click', handleCloseButtonClick);

let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');

function handleFormSubmit (event) {
  event.preventDefault();

  console.log(nameInput.value);
  console.log(jobInput.value);

  let username = document.querySelector('.profile__name');
  let job = document.querySelector('.profile__job');

  username.textContent = nameInput.value;
  job.textContent = jobInput.value;
}
formElement.addEventListener('submit', handleFormSubmit, handleCloseButtonClick);