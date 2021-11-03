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