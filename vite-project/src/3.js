import "./3.css";

const mySongs = [
  { title: "Song A", artist: "Artist 1", duration: 210 },
  { title: "Song B", artist: "Artist 2", duration: 185 },
];

document.querySelector(".create").addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let artist = document.getElementById("artist").value;
  let source = document.getElementById("source").value;
  mySongs.push({ title: name, artist: artist, source: source });
  console.log("Custom songs saved to localStorage.");
  localStorage.setItem("myCustomSongs", JSON.stringify(mySongs));
});

const myButton = document.querySelector(".back-link");
myButton.addEventListener("click", () => {
  window.location.href = "1.html";
});

const theme = JSON.parse(localStorage.getItem("theme"));
if (theme === "default") {
  document.body.classList.add("default");
} else {
  document.body.className = "";
  document.body.classList.toggle(theme);
}
