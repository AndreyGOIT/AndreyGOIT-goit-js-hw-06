// Напиши скрипт, который при потере фокуса на инпуте 
// (событие blur), проверяет его содержимое на правильное 
// количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его 
// атрибуте data - length.
// Если введено подходящее количество символов, то border инпута 
// становится зелёным, если неправильное - красным.

const textInput = document.querySelector("#validation-input");


textInput.addEventListener("focus", () => {
  textInput.value = "This input has focus";
});

textInput.addEventListener("blur", () => {
    
    if (textInput.value.length === Number(textInput.dataset.length)) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    }
    else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid'); 
    }
});

/* ready */