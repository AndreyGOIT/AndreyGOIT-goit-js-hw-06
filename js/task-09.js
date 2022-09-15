const changeColorBtn = document.querySelector("button");

const spanColor = document.querySelector(".color");

changeColorBtn.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
  document.body.style.backgroundColor = color;
  
  return spanColor.textContent = color;
};

/* ready */