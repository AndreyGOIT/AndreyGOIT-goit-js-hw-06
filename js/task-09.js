const changeColorBtn = document.querySelector("button");

const spanColor = document.querySelector(".color");

changeColorBtn.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  
  document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
  return spanColor.textContent = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

/* ready */