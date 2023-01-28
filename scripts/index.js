let openEditButton = document.querySelector('.popup__open');
let popup = document.querySelector('.popup');
let closeEditButton = popup.querySelector('.popup__close');

let toggleOpenPopup = () => {
  popup.classList.toggle('popup_opened');
};

let handleEditButtonClick = () => {
  toggleOpenPopup();
};

let handleCloseButtonClick = () => {
    toggleOpenPopup();
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
formElement.addEventListener('submit', handleFormSubmit);