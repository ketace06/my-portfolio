window.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro');
    const logoSpans = document.querySelectorAll('.logo');
    const overlay = document.querySelector('.overlay-slide');

    logoSpans.forEach((span, i) => {
        setTimeout(() => span.classList.add('active'), (i + 1) * 400);
    });

    setTimeout(() => {
        logoSpans.forEach((span, i) => {
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, (i + 1) * 50);
        });
    }, 2400);

    setTimeout(() => overlay.classList.add('slide-up'), 2450);

    setTimeout(() => {
        intro.style.pointerEvents = 'none';
        intro.style.opacity = '0';

        const content = document.querySelector('.content');
        content.classList.add('visible');
    }, 3100);

    document.querySelectorAll('.project-image').forEach(image => {
        image.addEventListener('click', () => {
            const description = image.getAttribute('data-text');
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <p>${description}</p>
                    <button class="close-lightbox">Close</button>
                </div>
            `;
            document.body.appendChild(lightbox);

            lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
                document.body.removeChild(lightbox);
            });
        });
    });
});
