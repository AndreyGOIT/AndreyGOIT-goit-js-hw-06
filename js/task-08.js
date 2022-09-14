const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password }
  } = event.target;

  const inputData = {
    email: `${event.target.email.value}`,
    password: `${event.target.password.value}`
  };
  console.log(inputData);
 
  if (email.value === "" || password.value === "") {
      
    return window.alert("Please fill in all the fields!");
  };

  // console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.target.reset();
}

/* ready */