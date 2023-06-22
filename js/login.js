// Sliding Form
const loginBtn = document.querySelector(".loginBtn");
const signupBtn = document.querySelector(".signupBtn");
const formContainer = document.querySelector(".form-container");

loginBtn.addEventListener("click", () => {
  formContainer.classList.remove("active");
});

signupBtn.addEventListener("click", () => {
  formContainer.classList.add("active");
});

// Hide / Show Eye Icon
document.addEventListener("DOMContentLoaded", () => {
  const btnShowHide = document.querySelectorAll(".eye-icon");

  btnShowHide.forEach((eyeIcon) => {
    const passwordField = eyeIcon.parentElement.querySelector(".input");

    function checkInputValue() {
      if (passwordField.value.trim() === "") {
        eyeIcon.classList.add("hidden");
      } else {
        eyeIcon.classList.remove("hidden");
      }
    }

    eyeIcon.addEventListener("click", () => {
      if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
      } else {
        passwordField.type = "password";
        eyeIcon.classList.replace("bx-show", "bx-hide");
      }
    });

    passwordField.addEventListener("input", checkInputValue);
    checkInputValue();
  });
});
