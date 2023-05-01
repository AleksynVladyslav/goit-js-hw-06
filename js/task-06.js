const inputEl = document.querySelector("#validation-input");

console.log(inputEl.id);

inputEl.addEventListener("blur", () => {
  if (+inputEl.dataset.length === inputEl.value.length) {
    inputEl.setAttribute("id", "#validation-input.valid");

    inputEl.removeAttribute("#validation-input.invalid");
  } else {
    inputEl.setAttribute("id", "#validation-input.invalid");

    inputEl.removeAttribute("#validation-input.valid");
  }
});
