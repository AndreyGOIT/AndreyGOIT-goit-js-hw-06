const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul");

for (const ingredient of ingredients) {
    const listItem = document.createElement("li");

    listItem.textContent = ingredient;

    listItem.classList.add("item");

    list.append(listItem);
};

console.log(list);

/* ready */