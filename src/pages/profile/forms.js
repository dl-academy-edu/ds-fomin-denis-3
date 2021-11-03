let popupOverlay = document.querySelector('.overlay');


// form sign-in
let popupOpenSign = document.querySelector('.button_sign-js');
let popupFormSign = document.querySelector('.popup_sign');
let popupCloseSign = document.querySelector('.popup_close_sign-js');
let inputSign = popupFormSign.querySelector('input');

popupOpenSign.addEventListener('click', function () {
    popupFormSign.classList.add('popup_open');
    popupOverlay.classList.add('overlay_open');
    inputSign.focus();
});

popupCloseSign.addEventListener('click', function () {
    popupFormSign.classList.remove('popup_open');
    popupOverlay.classList.remove('overlay_open');
});

window.addEventListener('keydown', function (event) {
    if(event.key === 'Escape') {
        popupFormSign.classList.remove('popup_open');
        popupOverlay.classList.remove('overlay_open');
    }
});


// form registration
let popupOpenRegister = document.querySelector('.button_register-js');
let popupFormRegister = document.querySelector('.popup_register');
let popupCloseRegister = document.querySelector('.popup_close_register-js');
let inputRegister = popupFormRegister.querySelector('input');


popupOpenRegister.addEventListener('click', function () {
    popupFormRegister.classList.add('popup_open');
    popupOverlay.classList.add('overlay_open');
    inputRegister.focus();
});

popupCloseRegister.addEventListener('click', function () {
    popupFormRegister.classList.remove('popup_open');
    popupOverlay.classList.remove('overlay_open');
});

window.addEventListener('keydown', function (event) {
    if(event.key === 'Escape') {
        popupFormRegister.classList.remove('popup_open');
        popupOverlay.classList.remove('overlay_open');
    }
});


// form change-password
let popupChangePassOpen= document.querySelector('.button_change-pass-js');
let popupChangePassForm = document.querySelector('.popup_change-pass');
let popupChangePassClose = document.querySelector('.popup_close-change-pass-js');
let inputChangePass = popupChangePassForm.querySelector('input');

popupChangePassOpen.addEventListener('click', function () {
    popupChangePassForm.classList.add('popup_open');
    popupOverlay.classList.add('overlay_open');
    inputChangePass.focus();
});

popupChangePassClose.addEventListener('click', function () {
    popupChangePassForm.classList.remove('popup_open');
    popupOverlay.classList.remove('overlay_open');
});

window.addEventListener('keydown', function (event) {
    if(event.key === 'Escape') {
        popupChangePassForm.classList.remove('popup_open');
        popupOverlay.classList.remove('overlay_open');
    }
});


// form change-data
let popupChangeDataOpen= document.querySelector('.button_change-data-js');
let popupChangeDataForm = document.querySelector('.popup_change-data');
let popupChangeDataClose = document.querySelector('.popup_close-change-data-js');
let inputChangeData = popupChangeDataForm.querySelector('input');

popupChangeDataOpen.addEventListener('click', function () {
    popupChangeDataForm.classList.add('popup_open');
    popupOverlay.classList.add('overlay_open');
    inputChangeData.focus();
});

popupChangeDataClose.addEventListener('click', function () {
    popupChangeDataForm.classList.remove('popup_open');
    popupOverlay.classList.remove('overlay_open');
});

window.addEventListener('keydown', function (event) {
    if(event.key === 'Escape') {
        popupChangeDataForm.classList.remove('popup_open');
        popupOverlay.classList.remove('overlay_open');
    }
});



