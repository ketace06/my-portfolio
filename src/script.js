let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
let content = document.querySelector('.content');

document.body.style.overflow = 'hidden';

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        // Show animation logo
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        }, 2000);

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, 2300);

        // Transition of the intro after the animation
        setTimeout(() => {
            intro.style.top = '-100vh'; 
            content.style.visibility = 'visible'; 
            document.body.style.overflow = 'auto'; 
        }, 3000);

    });
});
