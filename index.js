const popupOverlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.popup__open');
let closePopupButton = document.querySelector('.popup__close');

openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        popupOverlay.classList.add('active');
        popup.classList.add('active');
    })
});

closePopupButton.addEventListener('click',() => {
    popupOverlay.classList.remove('active');
    popup.classList.remove('active');
});

