import {isEscapeKey} from '../utils/isEscape.js';
import {addFirstSymbols, validationTel} from './validationTel.js';

if (document.querySelector('.contacts__callback')) {
  const buttonCallback = document.querySelector('.contacts__callback');

  if (document.querySelector('#callback')) {
    const callbackFormTemlate = document.querySelector('#callback').cloneNode(true).content;
    const callbackForm = callbackFormTemlate.cloneNode(true);
    const callbackFormContainer = callbackForm.querySelector('.callback-form');
    const callbackInputPhobe = callbackForm.querySelector('#callback-phone');

    callbackInputPhobe.addEventListener('click', addFirstSymbols);
    callbackInputPhobe.addEventListener('input', validationTel);

    if (document.querySelector('.body-page')) {
      const body = document.querySelector('.body-page');

      if (body.querySelector('.shading')) {
        const shading = body.querySelector('.shading');

        const onClickCallbackButton = (evt) => {
          evt.preventDefault();
          body.appendChild(callbackFormContainer);

          if (callbackFormContainer.querySelector('#firstname-callback')) {
            const nameField = callbackFormContainer.querySelector('#firstname-callback');
            nameField.focus();
          }

          setTimeout(()=> {
            callbackFormContainer.style.top = '0';
          }, 300);
          shading.classList.add('shading--active');
          body.style.overflow = 'hidden';

          document.addEventListener('click', (event) => {
            if (event.target.matches('.shading')) {
              callbackFormContainer.remove();
              callbackFormContainer.style.top = '-1000px';
              shading.classList.remove('shading--active');
              body.style.overflow = 'auto';
            }
          });
        };

        const onClickKeyDown = (evt) => {
          if (isEscapeKey(evt)) {
            callbackFormContainer.remove();
            callbackFormContainer.style.top = '-1000px';
            shading.classList.remove('shading--active');
            body.style.overflow = 'auto';
          }
        };
        if (callbackForm.querySelector('.callback-form__close')) {
          const closeButton = callbackForm.querySelector('.callback-form__close');

          const onClickCloseButton = (evt) => {
            evt.preventDefault();
            callbackFormContainer.remove();
            callbackFormContainer.style.top = '-1000px';
            shading.classList.remove('shading--active');
            body.style.overflow = 'auto';
          };

          closeButton.addEventListener('click', onClickCloseButton);
        }
        buttonCallback.addEventListener('click', onClickCallbackButton);
        document.addEventListener('keydown', onClickKeyDown);
      }
    }
  }
}
