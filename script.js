var slides = document.querySelectorAll('.slide-main, .slide');
var slideIndex = 0;
var slideTimeout;

console.log(window.location.pathname);

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname == '/' || window.location.pathname == '/index.html') {
        slideTimeout = setTimeout(autoSlide, 10000);
    }
});

function moveSlide (direction) {
    
    if (window.location.pathname == '/' || window.location.pathname == '/index.html') {
        clearTimeout(slideTimeout);

        if (direction === -1) {
            slideIndex--;
            if (slideIndex < 0) {
                slideIndex = slides.length - 1;
            }
        }

        if (direction === 1) {
            slideIndex++;
            if (slideIndex >= slides.length) {
                slideIndex = 0;
            }
        }

        changeSlide();
        slideTimeout = setTimeout(autoSlide, 10000);
    }

    else {
        
        if (direction === -1) {
            slideIndex--;
            if (slideIndex < 0) {
                slideIndex = slides.length - 1;
            }
        }

        if (direction === 1) {
            slideIndex++;
            if (slideIndex >= slides.length) {
                slideIndex = 0;
            }
        }
        
        changeSlide();
    }
}

function autoSlide() {

    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        slides[i].classList.remove('main-active');
    }
    slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

    if (slides[slideIndex].classList.contains('slide-main')) {
        slides[slideIndex].classList.add('main-active');
    } else {
        slides[slideIndex].classList.add('active');
    }

    slideTimeout = setTimeout(autoSlide, 10000);
}

function changeSlide() {

    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        slides[i].classList.remove('main-active');
    }
    
    if (slides[slideIndex].classList.contains('slide-main')) {
        slides[slideIndex].classList.add('main-active');
    } else {
        slides[slideIndex].classList.add('active');
    }
}
