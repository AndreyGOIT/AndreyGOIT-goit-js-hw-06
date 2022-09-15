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
  let boxWidth = 30;
  let boxHeigth = 30;

  while (counter <= inputNumber.value) {
    const lastItem = document.createElement("div");
    const color = getRandomHexColor();

    boxes.append(lastItem);
    boxes.lastElementChild.style.width = boxWidth + "px";
    boxes.lastElementChild.style.height = boxHeigth + "px";
    boxes.lastElementChild.classList.add("box");
    boxes.lastElementChild.style.backgroundColor = color;

    boxWidth += 10;
    boxHeigth += 10;
    counter += 1;
  }
  console.log(`Созданы и вложены ${inputNumber.value} div`);
  console.log(boxes);
};
createBtn.addEventListener("click", createBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
// тем самым удаляя все созданные элементы.

const destroyBoxes = () => {
  const allBoxes = document.querySelectorAll(".box");

  for (let i = 1; i <= allBoxes.length; i += 1) {
    const firstBox = document.querySelector(".box");
    firstBox.remove();
  }
  console.log(`Все вложенные в boxes div удалены`);
  console.log(boxes);
};

destroyBtn.addEventListener("click", destroyBoxes);
