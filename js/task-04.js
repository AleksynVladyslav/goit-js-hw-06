let counterValue = 0;
const valueEl = document.querySelector("#value");

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

const handleDecrement = () => {
  counterValue -= 1;
  return (valueEl.innerHTML = counterValue);
};

const handleIncrement = () => {
  counterValue += 1;
  return (valueEl.innerHTML = counterValue);
};

decrement.addEventListener("click", handleDecrement);
increment.addEventListener("click", handleIncrement);
