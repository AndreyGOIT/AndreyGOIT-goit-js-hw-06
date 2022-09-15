const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul");

const listElem = [];
for (const ingredient of ingredients) {
  const listItem = document.createElement("li");

  listItem.textContent = ingredient;

  listItem.classList.add("item");

  listElem.push(listItem);
};

list.append(
  listElem[0],
  listElem[1],
  listElem[2],
  listElem[3],
  listElem[4],
  listElem[5]
);
console.log(list);

/* ready */
