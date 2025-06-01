import { useEffect } from 'react';

const IntroAnimation = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

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

      document.body.style.overflow = '';
    }, 3100);

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return null;
};

export default IntroAnimation;
