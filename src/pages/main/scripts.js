let popupOverlay = document.querySelector('.overlay');

// form sign-in
let popupOpenSign = document.querySelector('.button_sign-js');
let popupFormSign = document.querySelector('.popup__sign');
let popupCloseSign = document.querySelector('.popup_close');
let inputSign = popupFormSign.querySelector('input');

popupOpenSign.addEventListener('click', () => {
    popupFormSign.classList.add('popup_open');
    popupOverlay.classList.add('popup__overlay_open');
    inputSign.focus();
});

popupCloseSign.addEventListener('click', () => {
    popupFormSign.classList.remove('popup_open');
    popupOverlay.classList.remove('popup__overlay_open');
});

window.addEventListener('keydown', () => {
    if(event.code === 'Escape') {
        popupFormSign.classList.remove('popup_open');
        popupOverlay.classList.remove('popup__overlay_open');
    }
});

// form registration
let popupOpenRegister = document.querySelector('.button_register-js');
let popupFormRegister = document.querySelector('.popup__register');
let popupCloseRegister = document.querySelector('.register_close');
let inputRegister = popupFormRegister.querySelector('input');


popupOpenRegister.addEventListener('click', () => {
    popupFormRegister.classList.add('popup_open');
    popupOverlay.classList.add('popup__overlay_open');
    inputRegister.focus();
});

popupCloseRegister.addEventListener('click', () => {
    popupFormRegister.classList.remove('popup_open');
    popupOverlay.classList.remove('popup__overlay_open');
});

window.addEventListener('keydown', () => {
    if(event.code === 'Escape') {
        popupFormRegister.classList.remove('popup_open');
        popupOverlay.classList.remove('popup__overlay_open');
    }
});

// form send message
let popupOpenSend = document.querySelector('.button_send-js');
let popupFormSend = document.querySelector('.popup__send');
let popupCloseSend = document.querySelector('.send_close');
let inputSend = popupFormSend.querySelector('input');

popupOpenSend.addEventListener('click', () => {
    popupFormSend.classList.add('popup_open');
    popupOverlay.classList.add('popup__overlay_open');
    inputSend.focus();
});

popupCloseSend.addEventListener('click', () => {
    popupFormSend.classList.remove('popup_open');
    popupOverlay.classList.remove('popup__overlay_open');
});

window.addEventListener('keydown', () => {
    if(event.code === 'Escape') {
        popupFormSend.classList.remove('popup_open');
        popupOverlay.classList.remove('popup__overlay_open');
    }
});

// scroll top
let button = document.querySelector(".button-scroll_js");

button.addEventListener('click', () => {
    window.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
    });
});

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 1500) {
    button.classList.remove("buttonToTop_hidden");
    } else {
    button.classList.add("buttonToTop_hidden");
    }
});
  
    