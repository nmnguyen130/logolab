// Lấy danh sách các menu và container tương ứng
const menuItems = document.querySelectorAll(".sidebar__menu-item");
const containers = document.querySelectorAll(".sidebar__container-item");
let activeIndex = 0; // Track the index of the active menu item

// Lặp qua từng menu và thêm sự kiện click
menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener("click", () => {
    menuItems[activeIndex].classList.remove("active");
    containers[activeIndex].classList.remove("active");

    menuItem.classList.add("active");
    containers[index].classList.add("active");

    activeIndex = index; // Update the active index
  });
});

// Show / Hide icon X
const btnClearList = document.querySelectorAll(".btn-clear");
const searchFormList = document.querySelectorAll(".search-form");

function checkInputValue() {
  searchFormList.forEach((searchForm, index) => {
    if (searchForm.value.trim() === "") {
      btnClearList[index].classList.add("hidden");
    } else {
      btnClearList[index].classList.remove("hidden");
    }
  });
}

function clearInputValue() {
  searchFormList.forEach((searchForm, index) => {
    searchForm.value = "";
    btnClearList[index].classList.add("hidden");
  });
}

searchFormList.forEach((searchForm) => {
  searchForm.addEventListener("input", checkInputValue);
});

checkInputValue();

btnClearList.forEach((btnClear) => {
  btnClear.addEventListener("click", clearInputValue);
});

// Font Customize
const addFont = document.querySelector(".sidebar__addFont");
const fontSelect = addFont.querySelector(".font-select");
const searchFont = addFont.querySelector(".search-form");
const ulElement = addFont.querySelector(".font-options");

const fontValues = [
  "Arial",
  "Calibri",
  "Courier New",
  "Georgia",
  "Helvetica",
  "Impact",
  "Lato",
  "Lucida Sans",
  "Montserrat",
  "Open Sans",
  "Palatino",
  "Roboto",
  "Segoe UI",
  "Tahoma",
  "Times New Roman",
  "Trebuchet MS",
  "Ubuntu",
  "Verdana",
];

// Create and append list items for font options
function createFontListItem(value) {
  const liElement = document.createElement("li");
  liElement.textContent = value;
  liElement.setAttribute("value", value);
  liElement.addEventListener("click", () => {
    updateFont(liElement);
  });
  return liElement;
}

// Update the selected font
function updateFont(selectedFont) {
  addFont.classList.remove("active");
  fontSelect.firstElementChild.innerText = selectedFont.textContent;
}

// Render the font options
function renderFontOptions(options) {
  ulElement.innerHTML = "";
  options.forEach((value) => {
    ulElement.appendChild(createFontListItem(value));
  });
}

// Filter and display matching font options
searchFont.addEventListener("keyup", () => {
  const searchedVal = searchFont.value.toLowerCase();
  const filteredOptions = fontValues.filter((value) => {
    return value.toLowerCase().startsWith(searchedVal);
  });
  renderFontOptions(filteredOptions);
});

fontSelect.addEventListener("click", () => {
  addFont.classList.toggle("active");
});

// Initial rendering of font options
renderFontOptions(fontValues);
