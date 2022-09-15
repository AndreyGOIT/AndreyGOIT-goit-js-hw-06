// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и
// добавляет их в div#boxes.

const inputNumber = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

const handleClick = (event) => {
  const amount = inputNumber.value;

  return console.log(`amount: ${amount}`);
};

inputNumber.addEventListener("input", handleClick);



const createBoxes = (event) => {
  let counter = 1;

  while (counter <= inputNumber.value) {
    const lastItem = document.createElement("div");

    boxes.append(lastItem);
    boxes.lastElementChild.style.width = "30px";
    boxes.lastElementChild.style.height = "30px";
    boxes.lastElementChild.classList.add("box");
    boxes.lastElementChild.style.backgroundColor = "blue";
    counter += 1;

    function getRandomHexColor() {
  // const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };
    const color = getRandomHexColor();
    // getRandomHexColor();
    console.log(color);
  };
  // boxes.lastElementChild.style.backgroundColor = "color";
  console.log(boxes);
};
createBtn.addEventListener("click", createBoxes);

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

// function getRandomHexColor() {
//   return console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
// };

// createBtn.addEventListener("click", getRandomHexColor);
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
// тем самым удаляя все созданные элементы.

const destroyBoxes = () => {
  const allBoxes = document.querySelectorAll(".box");

  for (let i = 1; i <= allBoxes.length; i += 1) {
    const firstBox = document.querySelector(".box");
    firstBox.remove();
  }
  console.log(boxes);
};

destroyBtn.addEventListener("click", destroyBoxes);
