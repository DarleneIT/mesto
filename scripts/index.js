//Открытие и закрытие popup
let popUp = document.querySelector('.popup');
let openEditButton = document.querySelector('.profile__open');
let closeEditButton = popUp.querySelector('.popup__close');

let openPopUp = () => {
  inputJob.value = job.textContent;
  inputName.value = userName.textContent;
  popUp.classList.add('popup_opened');
};

let closePopUp = () => {
  popUp.classList.remove('popup_opened');
};

openEditButton.addEventListener('click', openPopUp);
closeEditButton.addEventListener('click', closePopUp);

//Изменение данных в профайле
let formElement = document.querySelector('.popup__form');

let inputName = document.querySelector('.popup__field_type_name');
let inputJob = document.querySelector('.popup__field_type_job');

let userName = document.querySelector('.profile__name');
let job = document.querySelector('.profile__job');

function handleFormSubmit (event) {
  event.preventDefault();

  userName.textContent = inputName.value;
  job.textContent = inputJob.value;

  closePopUp();
}

formElement.addEventListener('submit', handleFormSubmit);