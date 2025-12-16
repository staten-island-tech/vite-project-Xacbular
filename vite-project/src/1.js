import "./1.css";

document.querySelector(".theme-btn").addEventListener("click", function () {
  document.body.classList.toggle("midnight");
});

const themeButtons = document.querySelectorAll(".theme-btn");
themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const theme = btn.dataset.theme;
    changeTheme(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  });
});

function changeTheme(theme) {
  document.body.className = "";
  document.body.classList.toggle(theme);
}

const myButton = document.querySelector(".big-action-card");
myButton.addEventListener("click", () => {
  window.location.href = "2.html";
});

const addPS = document.querySelector(".big-action-card.brown-style");
addPS.addEventListener("click", () => {
  window.location.href = "3.html";
});

if (localStorage.getItem("theme")) {
  const savedTheme = JSON.parse(localStorage.getItem("theme"));
  changeTheme(savedTheme);
}

const albumArt = document.querySelector(".album-art-placeholder");
albumArt.insertAdjacentHTML(
  "afterbegin",
  `<img src="cafe.jpg" alt="Album Art" style="max-width: 100%; height: auto;" />`
);
