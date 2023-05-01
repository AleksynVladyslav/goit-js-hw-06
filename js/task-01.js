const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach.call(categoriesEl, (category) => {
  const categoryName = category.firstElementChild.textContent;

  const elementQuantity = category.lastElementChild.children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementQuantity}`);
});
