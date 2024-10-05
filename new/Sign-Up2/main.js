const dark = document.getElementById("darkMode");
const light = document.getElementById("lightMode");
const colorFull = document.getElementById("colorFull");

function turnToDark() {
  document.body.classList.remove("color-theme");
  document.body.classList.add("dark-theme");
  console.log("I'm Working");
}

function turnToLight() {
  document.body.classList.remove("dark-theme", "color-theme");
  console.log("I'm Working2");
}

function turnToColor() {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("color-theme");
  console.log("I'm Working2");
}

dark.addEventListener("click", turnToDark);
light.addEventListener("click", turnToLight);
colorFull.addEventListener("click", turnToColor);

function validForm() {
  event.preventDefault();
  let isValid = true;

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const pass = document.getElementById("pass").value;
  const repass = document.getElementById("re-pass").value;

  let nameError = document.getElementById("name-error");
  let emailError = document.getElementById("email-error");
  let passError = document.getElementById("pass-error");
  let rePassError = document.getElementById("repass-error");
  let success = document.getElementById("submit-message");
  nameError.textContent = "";
  emailError.textContent = "";
  passError.textContent = "";
  rePassError.textContent = "";
  success.textContent = "";

  if (name.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.trim() === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address";
    isValid = false;
  }

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  if (pass.trim() === "") {
    passError.textContent = "Pasword is required";
    isValid = false;
  } else if (pass.length < 8) {
    passError.textContent = "Password must contain at least 8 characters!";
    isValid = false;
  } else if (!passwordPattern.test(pass)) {
    passError.textContent =
      "Please enter a valid password (UpperCase, LowerCase, Number, Character, Symbol)";
    isValid = false;
  }

  if (repass.trim() === "") {
    rePassError.textContent = "Repeating password is required";
    isValid = false;
  } else if (repass != pass) {
    rePassError.textContent =
      "Reapeated password doesn't match the entered password";
    isValid = false;
  }

  if (isValid) {
    success.textContent = "Form is valid!";
  }
}
