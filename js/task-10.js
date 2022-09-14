// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и
// добавляет их в div#boxes.

const inputNumber = document.querySelector("input");
// console.log(inputNumber);

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
// console.log(createBtn);
// console.log(destroyBtn);

const boxes = document.querySelector("#boxes");
// console.log(boxes);

const handleClick = (event) => {
  console.log(inputNumber.value);
};

inputNumber.addEventListener("input", handleClick);

const handleClickCreate = (event) => {
  let counter = 1;

  while (counter <= inputNumber.value) {
    const lastItem = document.createElement("div");

    boxes.append(lastItem);
    boxes.lastElementChild.style.width = "30px";
    console.log(boxes.lastElementChild);
    counter += 1;
  }
    console.log(boxes);
};
createBtn.addEventListener("click", handleClickCreate);

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
// тем самым удаляя все созданные элементы.
