const inputEl = document.querySelector("#name-input");
const userNameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    return (userNameEl.textContent = "Anonymous");
  } else {
    userNameEl.textContent = event.currentTarget.value;
  }
});
