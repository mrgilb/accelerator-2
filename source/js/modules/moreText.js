if (document.querySelector('.about')) {
  const aboutSection = document.querySelector('.about');
  aboutSection.classList.remove('about--nojs');

  if (aboutSection.querySelector('#more-text')) {
    const button = aboutSection.querySelector('#more-text');

    if (aboutSection.querySelector('.about__text-additional-mobile')) {
      const textForMobile = aboutSection.querySelector('.about__text-additional-mobile');

      if (aboutSection.querySelector('.about__text-additional-tablet')) {
        const textForTablet = aboutSection.querySelector('.about__text-additional-tablet');

        const onClickButtonClose = (evt) => {
          const mobileWidth = 768;
          evt.target.textContent = 'Подробнее';
          textForTablet.style.display = 'none';
          if (window.innerWidth < mobileWidth) {
            textForMobile.style.display = 'none';
          }
          evt.target.addEventListener('click', onClickButtonOpen);
        };

        const onClickButtonOpen = (evt) => {
          const mobileWidth = 768;
          evt.target.textContent = 'Свернуть';
          textForTablet.style.display = 'block';
          if (window.innerWidth < mobileWidth) {
            textForMobile.style.display = 'block';
          }
          evt.target.removeEventListener('click', onClickButtonOpen);
          evt.target.addEventListener('click', onClickButtonClose);
        };

        button.addEventListener('click', onClickButtonOpen);
      }
    }
  }
}
