import "./3.css";

const mySongs = [
  { title: "Song A", artist: "Artist 1", duration: 210 },
  { title: "Song B", artist: "Artist 2", duration: 185 },
];

// document.getElementById("create").addEventListener("click", () => {
//   mySongs.push({ title: "Song C", artist: "Artist 3", duration: 240 });
//   console.log("Custom songs saved to localStorage.");
//   localStorage.setItem("myCustomSongs", JSON.stringify(mySongs));
// });

// document.querySelectorAll().addEventListener("click", () => {

document.querySelector(".create").addEventListener("click", () => {
  mySongs.push({ title: "Song C", artist: "Artist 3", duration: 240 });
  console.log("Custom songs saved to localStorage.");
  localStorage.setItem("myCustomSongs", JSON.stringify(mySongs));
});
