const mySongs = [
  { title: "Song A", artist: "Artist 1", duration: 210 },
  { title: "Song B", artist: "Artist 2", duration: 185 },
];

mySongs.push({ title: "Song C", artist: "Artist 3", duration: 240 });

localStorage.setItem("myCustomSongs", JSON.stringify(mySongs));

console.log("Custom songs saved to localStorage.");