let counterValue = 0;

const buttons = document.querySelectorAll('#counter button');
console.log(buttons);


const spanValue = document.querySelector('#counter #value')
// console.log(spanValue.textContent);

const handleClickMinus = event => {
    counterValue -= 1;
    spanValue.textContent = counterValue;
};

const handleClickPlus = event => {
    counterValue += 1;
    spanValue.textContent = counterValue;
};

buttons[0].addEventListener("click", handleClickMinus);
buttons[1].addEventListener("click", handleClickPlus);

/* ready */