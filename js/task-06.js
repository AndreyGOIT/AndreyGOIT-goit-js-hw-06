const textInput = document.querySelector("#validation-input");

textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
});

textInput.addEventListener("blur", () => {
    
    if (textInput.value.length === Number(textInput.dataset.length)) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    }
    else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid'); 
        alert("Please enter 6 symbols");
    }
});

/* ready */