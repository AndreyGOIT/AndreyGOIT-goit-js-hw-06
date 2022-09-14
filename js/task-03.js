const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery");
const markup = images
  .map((image) => `<li class="list-item"><img src:"${image.url}" alt:"${image.alt}" ></li>`)
  .join("");
console.log(markup);



gallery.insertAdjacentHTML("beforeend", markup);
gallery.style.display = "flex";
gallery.style.flexDirection = "row";
console.log(gallery);

// images.map(image => {
//   const el = document.createElement("img");

//   image.src = images[0].url;
//   image.alt = images[0].alt;
// });

// images.reduce((previousValue, image) => {
//   const el = document.createElement("img");
// console.log(images[previousValue]);
//   el.src = images[previousValue].url;
//   el.alt = images[previousValue].alt;
//   previousValue + 1;
// }, 0);
// console.log(images);
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// <img src="https://placeimg.com/640/480/nature" alt="Nature" />
// Используй массив объектов images для создания элементов <img> 
// вложенных в < li >.Для создания разметки используй шаблонные строки и 
// метод insertAdjacentHTML().
/* const list = document.querySelector(".list");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>"); */
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.