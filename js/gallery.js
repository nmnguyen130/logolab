// Show sidebar
let isAllowed = false;

const btnSidebar = document.querySelector(".floating-container.search");
const sidebar = document.querySelector(".sidebar");
const mainOverlay = document.querySelector(".main-overlay");

btnSidebar.addEventListener("click", () => {
  if (isAllowed) {
    sidebar.style.left = "0";
    mainOverlay.classList.add("active");
  }
});

mainOverlay.addEventListener("click", () => {
  if (isAllowed) {
    sidebar.style.left = "-100%";
    mainOverlay.classList.remove("active");
  }
});

if (window.innerWidth <= 991) {
  isAllowed = true;
}

// Show sidebar component
var titleContainers = document.querySelectorAll(".sidebar__title-container");
titleContainers.forEach(function (titleContainer) {
  titleContainer.addEventListener("click", function () {
    var sidebar = this.parentNode;
    sidebar.classList.toggle("active");
  });
});

// Show / Hide icon X
const btnClear = document.querySelector(".btn-clear");
const searchForm = document.querySelector(".search-form");

function checkInputValue() {
  if (searchForm.value.trim() === "") {
    btnClear.classList.add("hidden");
  } else {
    btnClear.classList.remove("hidden");
  }
}

function clearInputValue() {
  searchForm.value = "";
  btnClear.classList.add("hidden");
}

searchForm.addEventListener("input", checkInputValue);
checkInputValue();

btnClear.addEventListener("click", clearInputValue);

// Active for heart Icon
const heartIcons = document.querySelectorAll(".bx-heart");

heartIcons.forEach((heartIcon) => {
  heartIcon.addEventListener("click", () => {
    if (heartIcon.classList.contains("active")) {
      heartIcon.classList.replace("bxs-heart", "bx-heart");
    } else {
      heartIcon.classList.replace("bx-heart", "bxs-heart");
    }
    heartIcon.classList.toggle("active");
  });
});
