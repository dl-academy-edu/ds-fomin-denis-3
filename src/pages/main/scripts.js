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


// form send message
let popupOpenSend = document.querySelector('.button_send-js');
let popupFormSend = document.querySelector('.popup_send');
let popupCloseSend = document.querySelector('.popup_close_send-js');
let inputSend = popupFormSend.querySelector('input');

popupOpenSend.addEventListener('click', function () {
    popupFormSend.classList.add('popup_open');
    popupOverlay.classList.add('overlay_open');
    inputSend.focus();
});

popupCloseSend.addEventListener('click', function () {
    popupFormSend.classList.remove('popup_open');
    popupOverlay.classList.remove('overlay_open');
});

window.addEventListener('keydown', function (event) {
    if(event.key === 'Escape') {
        popupFormSend.classList.remove('popup_open');
        popupOverlay.classList.remove('overlay_open');
    }
});



// button scroll to top

let buttonScroll = document.querySelector(".button-scroll_js");

if (buttonScroll) {
    
    buttonScroll.addEventListener('click', function () {
        window.scrollTo({ 
            top: 0, 
            behavior: "smooth" 
        });
    });
    
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 1500) {
        buttonScroll.classList.remove("buttonToTop_hidden");
        } else {
        buttonScroll.classList.add("buttonToTop_hidden");
        }
    });
};

// main slider
(function mainSlider() {
    let mainSlider = document.querySelector('.slider-js');
    let wrapper = mainSlider.querySelector(".slider__wrapper");
    let container = mainSlider.querySelector(".slider__container"); 
    let pagination = mainSlider.querySelector(".slider__pagination");
    let buttonLeft = mainSlider.querySelector(".slider__button_left");
    let buttonRight = mainSlider.querySelector(".slider__button_right"); 
    let slides = mainSlider.querySelectorAll(".slider_slide");

    let slideWidth = +getComputedStyle(wrapper).width.split("px")[0];  
    let numberSlides = container.childElementCount - 1;
    let activeSlide = 0; 


    if (!localStorage.getItem('activeSlide')) {
        changeToSlide(activeSlide);
    } else {
        activeSlide = +localStorage.getItem('activeSlide');
        changeToSlide(activeSlide);
    }

    function changeToSlide (index) {
        container.style.transition = "transform .4s";
        container.style.transform = `translate(${-slideWidth * activeSlide}px)`;
        localStorage.setItem("activeSlide", index);
    };    


    function addWidthSlides () {
        for (slide of slides) {
        slide.style.width = `${slideWidth}px`;
        };
    };


    function changeActiveDot (index) {
        
        let activeDot = document.querySelector(".slider__dot_active");
                
        if (activeDot) {
            activeDot.classList.remove("slider__dot_active");
        };

        pagination.children[index].classList.add("slider__dot_active");
        localStorage.setItem("activeSlide", index);
    };


    function addDot () {

        for (let i = 0; i < container.children.length; i++) {

            let buttonDot = document.createElement("button");
            buttonDot.classList.add("slider__dot");

            if (i === activeSlide) {
                buttonDot.classList.add("slider__dot_active");
            };
            
            buttonDot.addEventListener("click", () => {
                activeSlide = i;
                changeToSlide ();
                changeActiveDot(activeSlide);
            });

            pagination.append(buttonDot);
        };
    };
    addDot ();

    
    buttonRight.addEventListener("click", function () {

        if (activeSlide < numberSlides) {

            activeSlide += 1;

            changeToSlide ();

            changeActiveDot (activeSlide); 
        };
    });


    buttonLeft.addEventListener("click", function () {

        if (activeSlide > 0) {

            activeSlide -= 1;

            changeToSlide ();

            changeActiveDot (activeSlide);
        };
    });

    
    window.addEventListener("resize", function () {
        slideWidth = +getComputedStyle(wrapper).width.split("px")[0];
        addWidthSlides();
        if (activeSlide > 0) {
            changeToSlide ();
            
            container.style.transform = `translate(${-slideWidth * activeSlide}px)`;
        };
    });
})();

//swiper

let mySwiper = new Swiper('.swiper', {

    // Optional parameters
    direction: 'horizontal',
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});


// получение данных из формы sign-in
// const $signInForm = document.querySelector('.form_sign-js')

// if ($signInForm) {
//     $signInForm.addEventListener('submit', (event) => {
//         event.preventDefault();
        
//         const formData = new FormData($signInForm);
//         let formValues = {};
        
//         formData.forEach((value, name) => {
//             formValues[name] = value;
//         });
//     });
// }


// получение данных из формы registration
// const $regForm = document.querySelector('.form_register-js')

// if ($regForm) {
//     $regForm.addEventListener('submit', (event) => {
//         event.preventDefault();
        
//         const formData = new FormData($regForm);
//         let formValues = {};

//         formData.forEach((value, name) => {
//             formValues[name] = value;
//         });
//     });
// }


// получение данных из формы send messages
// const $sendMessageForm = document.querySelector('.form_send-message-js')

// if ($sendMessageForm) {
//     $sendMessageForm.addEventListener('submit', (event) => {
//         event.preventDefault();
        
//         const formData = new FormData($sendMessageForm);
//         let formValues = {};

//         formData.forEach((value, name) => {
//             formValues[name] = value;
//         });
//     });
// }




// //Функция теста email
// function emailValid(input) {
// 	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
// };
// //Функция проверки пароля
// function passwordValid(password) {
//     return password.length > 6;
// };




// (function() {
//     let form = document.forms.signIn;
//     let signInputEmail = form.email;
//     let signInputPass = form.password;
//     let error = form.querySelector('.form_alert_warning');
//     console.log(form);
    
//     console.log(signInputPass);
    

    
//     form.addEventListener('submit', function(e) {
//         if (emailValid(signInputEmail)) {
//             e.preventDefault();
//             signInputEmail.classList.add('invalid');
//             error.classList.remove('hidden');
//             console.log(signInputEmail);
//             console.log(error);
            
//         }
//         if (!passwordValid(signInputPass)) {
//             e.preventDefault();
            
//             signInputPass.classList.add('invalid');
//             signInputPass.nextElementSibling.remove('.hidden');
//             console.log(signInputPass.nextElementSibling);
            
//         }
//     });
// })();