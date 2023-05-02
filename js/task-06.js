const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', () => {
  if (+inputEl.dataset.length === inputEl.value.length) {
    inputEl.classList.add('valid');

    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');

    inputEl.classList.remove('valid');
  }
});
