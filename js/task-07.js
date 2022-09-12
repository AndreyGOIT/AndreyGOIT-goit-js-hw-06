// Напиши скрипт, который реагирует на изменение значения 
// input#font - size - control(событие input) и изменяет инлайн - стиль 
// span#text обновляя свойство font - size.В результате при перетаскивании 
// ползунка будет меняться размер текста.



const inputSizeControl = document.querySelector('#font-size-control');

const wordUnderInput = document.querySelector('#text');

const handleClick = event => {
    wordUnderInput.style.fontSize = event.currentTarget.value + "px";
};

inputSizeControl.addEventListener('input', handleClick)

/* ready */