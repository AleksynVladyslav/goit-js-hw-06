const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
inputEl.value = 16;
console.log(inputEl.value);
console.log(textEl.attributes);

inputEl.addEventListener('input', () => {
  textEl.style.fontSize = inputEl.value + 'px';
});
