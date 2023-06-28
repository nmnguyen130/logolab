// Change container
const btnChanges = document.querySelectorAll(".btn-header-full");
const changeContainers = document.querySelectorAll(".change-container");

btnChanges.forEach((btnChange, index) => {
  btnChange.addEventListener("click", () => {
    btnChanges.forEach((btn) => {
      btn.classList.remove("active");
    });

    btnChange.classList.add("active");

    changeContainers.forEach((changeContainer) => {
      changeContainer.classList.add("hidden");
    });

    changeContainers[index].classList.remove("hidden");
  });
});

// Show sidebar
let isAllowed = false;

const btnSidebar = document.querySelector(".floating-container.search");
const sidebar = document.querySelector(".sidebar");
const mainOverlay = document.querySelector(".main-overlay");

btnSidebar.addEventListener("click", () => {
  if (isAllowed) {
    toggleSidebar(true);
  }
});

mainOverlay.addEventListener("click", () => {
  if (isAllowed) {
    toggleSidebar(false);
  }
});

if (window.innerWidth <= 991) {
  isAllowed = true;
}

// Show sidebar component
const titleContainers = document.querySelectorAll(".sidebar__title-container");

titleContainers.forEach((titleContainer) => {
  titleContainer.addEventListener("click", function () {
    const sidebar = this.parentNode;
    sidebar.classList.toggle("active");
  });
});

// Show / Hide icon X
const btnClear = document.querySelector(".btn-clear");
const searchForm = document.querySelector(".search-form");

function checkInputValue() {
  btnClear.classList.toggle("hidden", searchForm.value.trim() === "");
}

function clearInputValue() {
  searchForm.value = "";
  btnClear.classList.add("hidden");
}

searchForm.addEventListener("input", checkInputValue);
checkInputValue();

btnClear.addEventListener("click", clearInputValue);

// Active for heart Icon
const heartIcons = document.querySelectorAll(".logo-template .bx-heart");

const toggleHeartIcon = (heartIcon) => {
  const isActive = heartIcon.classList.contains("active");

  if (isActive) {
    heartIcon.classList.replace("bxs-heart", "bx-heart");
  } else {
    heartIcon.classList.replace("bx-heart", "bxs-heart");
  }

  heartIcon.classList.toggle("active");
};

heartIcons.forEach((heartIcon) => {
  heartIcon.addEventListener("click", () => {
    toggleHeartIcon(heartIcon);
  });
});

// Show similar panel
const btnSimilars = document.querySelectorAll(".btn-similar");
const similarContainer = document.querySelector(".similar-container");

btnSimilars.forEach((btnSimilar) => {
  btnSimilar.addEventListener("click", () => {
    similarContainer.classList.add("show");
  });
});

// Close similar panel
const btnClose = document.querySelector(".close");

btnClose.addEventListener("click", () => {
  similarContainer.classList.remove("show");
});

// Add number for logo-template
const divElements = document.querySelectorAll(
  ".gallery-section .logo-template"
);

divElements.forEach((div, index) => {
  div.classList.add(`template-${index + 1}`);
});

// Add logo template into my favourite section
const favouriteCountSpan = document.querySelector(".num-favourite");
const favouriteLogoDiv = document.querySelector(
  ".logo-templates.favourite-section"
);
const divsToCopy = document.querySelectorAll(
  ".logo-templates.gallery-section .logo-template"
);

// Thêm sự kiện click cho từng biểu tượng heart trong mục yêu thích
function addFavoriteHeartEventListeners() {
  const favouriteHeartIcons = document.querySelectorAll(
    ".logo-templates.favourite-section .bxs-heart"
  );

  favouriteHeartIcons.forEach((heartIcon) => {
    heartIcon.addEventListener("click", function () {
      const copiedDiv = heartIcon.closest(".logo-template");

      if (copiedDiv) {
        copiedDiv.remove();
        updateFavouriteCount(-1);
        const btnHeartGallery = document.querySelector(
          ".logo-templates.gallery-section ." +
            copiedDiv.classList[1] +
            " .bxs-heart"
        );
        toggleHeartIcon(btnHeartGallery);
      }
    });
  });
}

// Add logo template into my favourite section
function addLogoToFavorites(logoDiv) {
  favouriteLogoDiv.appendChild(logoDiv);
  updateFavouriteCount(1);
  addFavoriteHeartEventListeners(); // Update event listeners
}

// Thêm sự kiện click cho từng biểu tượng heart
heartIcons.forEach((heartIcon, index) => {
  heartIcon.addEventListener("click", function () {
    const isActive = heartIcon.classList.contains("active");

    if (isActive) {
      const copiedDiv = divsToCopy[index].cloneNode(true);
      addLogoToFavorites(copiedDiv);
    } else {
      const copiedDiv = favouriteLogoDiv.querySelector(
        `.template-${index + 1}`
      );
      if (copiedDiv) {
        copiedDiv.remove();
        updateFavouriteCount(-1);
      }
    }
  });
});

function updateFavouriteCount(changeAmount) {
  const currentCount = parseInt(favouriteCountSpan.textContent);
  const newCount = currentCount + changeAmount;
  favouriteCountSpan.textContent = newCount.toString();
}

// Toggle sidebar function
function toggleSidebar(show) {
  if (show) {
    sidebar.style.left = "0";
    mainOverlay.classList.add("active");
  } else {
    sidebar.style.left = "-100%";
    mainOverlay.classList.remove("active");
  }
}
