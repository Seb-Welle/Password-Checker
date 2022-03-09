const pswd1 = document.querySelector("#pswd1");
const pswd2 = document.querySelector("#pswd2");
const toggleButton = document.querySelector("#toggle-button");

/* Password Toggle */
toggleButton.addEventListener("click", function () {
  if (pswd1.type === "password" && pswd2.type === "password") {
    pswd1.type = "text";
    pswd2.type = "text";
    toggleButton.innerText = "Hide Password";
  } else {
    pswd1.type = "password";
    pswd2.type = "password";
    toggleButton.innerText = "Show Password";
  }
});

const body = document.querySelector("body");

body.addEventListener("input", function () {
  passwordsAreEqual(pswd1, pswd2);
  checkLowerCaseLetter(pswd1);
  checkUpperCaseLetter(pswd1);
  checkNumber(pswd1);
  checkLength(pswd1);
});

function passwordsAreEqual(pswd1, pswd2) {
  if (pswd1.value === pswd2.value) {
    document.querySelector("#passwordsAreEqual").checked = true;
  } else {
    document.querySelector("#passwordsAreEqual").checked = false;
  }
}

function checkLowerCaseLetter(pswd1) {
  if (pswd1.value.toUpperCase() !== pswd1.value) {
    document.querySelector("#lowerCaseLetters").checked = true;
  } else {
    document.querySelector("#lowerCaseLetters").checked = false;
  }
}

function checkUpperCaseLetter(pswd1) {
  if (pswd1.value.toLowerCase() !== pswd1.value) {
    document.querySelector("#upperCaseLetters").checked = true;
  } else {
    document.querySelector("#upperCaseLetters").checked = false;
  }
}

function checkNumber(pswd1) {
  if (/\d+/.test(pswd1.value)) {
    document.querySelector("#containNumber").checked = true;
  } else {
    document.querySelector("#containNumber").checked = false;
  }
}

function checkLength(pswd1) {
  if (pswd1.value.length >= 10) {
    document.querySelector("#checkLength").checked = true;
  } else {
    document.querySelector("#checkLength").checked = false;
  }
}
