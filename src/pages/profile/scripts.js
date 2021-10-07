let popupOverlay = document.querySelector('.overlay');


// form sign-in
let popupOpenSign = document.querySelector('.button_sign-js');
let popupFormSign = document.querySelector('.popup__sign');
let popupCloseSign = document.querySelector('.popup_close');
let inputSign = popupFormSign.querySelector('input');

popupOpenSign.addEventListener('click', () => {
    popupFormSign.classList.add('popup_open');
    popupOverlay.classList.add('overlay_open');
    inputSign.focus();
});

popupCloseSign.addEventListener('click', () => {
    popupFormSign.classList.remove('popup_open');
    popupOverlay.classList.remove('overlay_open');
});

window.addEventListener('keydown', (event) => {
    if(event.code === 'Escape') {
        popupFormSign.classList.remove('popup_open');
        popupOverlay.classList.remove('overlay_open');
    }
});



// получение данных из формы sign-in
const $signInForm = document.querySelector('.form__sign-in')

if ($signInForm) {
    $signInForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData($signInForm);
        let formValues = {};

        formData.forEach((value, name) => {
            formValues[name] = value;
        });
    });
}



// form registration
let popupOpenRegister = document.querySelector('.button_register-js');
let popupFormRegister = document.querySelector('.popup__register');
let popupCloseRegister = document.querySelector('.register_close');
let inputRegister = popupFormRegister.querySelector('input');


popupOpenRegister.addEventListener('click', () => {
    popupFormRegister.classList.add('popup_open');
    popupOverlay.classList.add('overlay_open');
    inputRegister.focus();
});

popupCloseRegister.addEventListener('click', () => {
    popupFormRegister.classList.remove('popup_open');
    popupOverlay.classList.remove('overlay_open');
});

window.addEventListener('keydown', (event) => {
    if(event.code === 'Escape') {
        popupFormRegister.classList.remove('popup_open');
        popupOverlay.classList.remove('overlay_open');
    }
});


// получение данных из формы registration
const $regForm = document.querySelector('.form__register-in')

if ($regForm) {
    $regForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData($regForm);
        let formValues = {};

        formData.forEach((value, name) => {
            formValues[name] = value;
        });
    });
}



// form change-password
let popupChangePassOpen= document.querySelector('.change-pass-js');
let popupChangePassForm = document.querySelector('.popup__change-pass');
let popupChangePassClose = document.querySelector('.change-pass_close');
let inputChangePass = popupChangePassForm.querySelector('input');

popupChangePassOpen.addEventListener('click', () => {
    popupChangePassForm.classList.add('popup_open');
    popupOverlay.classList.add('overlay_open');
    inputChangePass.focus();
});

popupChangePassClose.addEventListener('click', () => {
    popupChangePassForm.classList.remove('popup_open');
    popupOverlay.classList.remove('overlay_open');
});

window.addEventListener('keydown', (event) => {
    if(event.code === 'Escape') {
        popupChangePassForm.classList.remove('popup_open');
        popupOverlay.classList.remove('overlay_open');
    }
});



// получение данных из формы form change-password
const $changePassForm = document.querySelector('.form__change-pass')

if ($changePassForm) {
    $changePassForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData($changePassForm);
        let formValues = {};

        formData.forEach((value, name) => {
            formValues[name] = value;
        });
    });
}



// form change-data
let popupChangeDataOpen= document.querySelector('.change-data-js');
let popupChangeDataForm = document.querySelector('.popup__change-data');
let popupChangeDataClose = document.querySelector('.change-data_close');
let inputChangeData = popupChangeDataForm.querySelector('input');

popupChangeDataOpen.addEventListener('click', () => {
    popupChangeDataForm.classList.add('popup_open');
    popupOverlay.classList.add('overlay_open');
    inputChangeData.focus();
});

popupChangeDataClose.addEventListener('click', () => {
    popupChangeDataForm.classList.remove('popup_open');
    popupOverlay.classList.remove('overlay_open');
});

window.addEventListener('keydown', (event) => {
    if(event.code === 'Escape') {
        popupChangeDataForm.classList.remove('popup_open');
        popupOverlay.classList.remove('overlay_open');
    }
});



// получение данных из формы form change-data
const $changeDataForm = document.querySelector('.form__change-data')

if ($changeDataForm) {
    $changeDataForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData($changeDataForm);
        let formValues = {};

        formData.forEach((value, name) => {
            formValues[name] = value;
        });
    });
}
