import {isBackspace} from '../utils/isBackspace.js';

const regexp = /\+7\(\d{3}\)\d{3}\d{2}\d{2}/;
const fisrtSymbolPhone = '+7';
const bracket = ')';

const deleteLastSymbol = (evt) => {
  if (isBackspace(evt)) {
    evt.preventDefault();
    evt.target.value = evt.target.value.slice(0, -1);
  }
};

export const validationTel = (evt) => {
  if (!evt.target.value.startsWith(fisrtSymbolPhone)) {
    evt.target.setCustomValidity(`Номер телефона должен начинаться с ${fisrtSymbolPhone}`);
  }

  if (evt.target.value.startsWith(fisrtSymbolPhone)) {
    evt.target.setCustomValidity('');
  }

  if (evt.target.value.length === 6) {
    evt.target.value = evt.target.value.concat(bracket);
    document.addEventListener('keydown', deleteLastSymbol);
  }

  if (!regexp.test(evt.target.value)) {
    evt.target.setCustomValidity('Номер телефона должен быть введен в формате +7(999)9999999');
  }
  evt.target.reportValidity();
};

export const addFirstSymbols = (evt) => {
  evt.target.value = '+7(';
};

if (document.querySelector('#phone')) {
  const phoneInput = document.querySelector('#phone');

  phoneInput.addEventListener('click', addFirstSymbols);
  phoneInput.addEventListener('input', validationTel);
}
