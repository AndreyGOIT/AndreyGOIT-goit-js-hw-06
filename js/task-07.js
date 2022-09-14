const inputSizeControl = document.querySelector('#font-size-control');

const wordUnderInput = document.querySelector('#text');

const handleClick = event => {
    wordUnderInput.style.fontSize = event.currentTarget.value + "px";
};

inputSizeControl.addEventListener('input', handleClick)

/* ready */