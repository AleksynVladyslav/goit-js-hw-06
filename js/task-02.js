const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const itemsArrow = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const itemEl = document.createElement("li");
  itemEl.classList.add(".item");
  itemEl.textContent = ingredients[i];
  itemsArrow.push(itemEl);
}

listEl.append(...itemsArrow);
