import { useEffect } from 'react';

const IntroAnimation = () => {
  useEffect(() => {
    const intro = document.querySelector('.intro') as HTMLElement | null;
    const logoSpans = document.querySelectorAll<HTMLSpanElement>('.logo');
    const overlay = document.querySelector(
      '.overlay-slide',
    ) as HTMLElement | null;
    const content = document.querySelector('.content') as HTMLElement | null;

    logoSpans.forEach((span, i) => {
      setTimeout(
        () => {
          span.classList.add('active');
        },
        (i + 1) * 400,
      );
    });

    setTimeout(() => {
      logoSpans.forEach((span, i) => {
        setTimeout(
          () => {
            span.classList.remove('active');
            span.classList.add('fade');
          },
          (i + 1) * 50,
        );
      });
    }, 2400);

    setTimeout(() => {
      overlay?.classList.add('slide-up');
    }, 2450);

    setTimeout(() => {
      if (intro) {
        intro.style.pointerEvents = 'none';
        intro.style.opacity = '0';
      }
      content?.classList.add('visible');
    }, 3100);

    const projectImages =
      document.querySelectorAll<HTMLImageElement>('.project-image');

    projectImages.forEach((image) => {
      const clickHandler = () => {
        const description = image.getAttribute('data-text') || '';
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
          <div class="lightbox-content">
            <p>${description}</p>
            <button class="close-lightbox">Close</button>
          </div>
        `;
        document.body.appendChild(lightbox);

        const closeBtn = lightbox.querySelector('.close-lightbox');
        closeBtn?.addEventListener('click', () => {
          document.body.removeChild(lightbox);
        });
      };

      image.addEventListener('click', clickHandler);

      // Cleanup on unmount
      return () => {
        image.removeEventListener('click', clickHandler);
      };
    });
  }, []);

  return null;
};

export default IntroAnimation;
