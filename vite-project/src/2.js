// 1. DATA: List of songs
import "./2.css";

let songs = [
  {
    title: "Green Tea Dreams",
    artist: "Cafe Vibes",
    color: "#D8E2DC",
    next: "Jasmine Serenity",
    src: "https://youtu.be/lIDOhM4Yf_M", // Example Audio
  },
  {
    title: "Jasmine Serenity",
    artist: "Lo-Fi Brewer",
    color: "#E0F2F1",
    next: "Espresso Rain",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    title: "Espresso Rain",
    artist: "Sunday Morning",
    color: "#D7CCC8",
    next: "Green Tea Dreams",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];

const storedSongs = JSON.parse(localStorage.getItem("myCustomSongs"));
if (storedSongs) {
  songs = [...songs, ...storedSongs];
}

// 2. SETUP: Create the Audio Object
const audioPlayer = new Audio(); // This is the engine that plays music
let currentSongIndex = 0;
let isPlaying = false;

// 3. HTML ELEMENTS
const titleEl = document.getElementById("songTitle");
const artistEl = document.getElementById("artistName");
const artEl = document.getElementById("albumArt");
const nextEl = document.getElementById("upNextText");
const playBtnEl = document.getElementById("playBtn");
const progressBarEl = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const totalTimeEl = document.getElementById("totalTime"); // Ensure you have this ID in HTML
const prevBtnEl = document.getElementById("prevBtn");
const nextBtnEl = document.getElementById("nextBtn");

// --- CORE FUNCTIONS ---

// Load song details into the DOM and the Audio Player
function loadSong(index) {
  const song = songs[index];

  // Visual Updates
  titleEl.innerText = song.title;
  artistEl.innerText = song.artist;
  nextEl.innerText = song.next;
  artEl.style.backgroundColor = song.color;

  // Audio Updates
  audioPlayer.src = song.src; // Tell the player where the file is
  audioPlayer.load(); // Load the file

  // Reset Progress Bar Visuals
  progressBarEl.style.width = "0%";
  currentTimeEl.innerText = "0:00";

  // If we were already playing, keep playing the new song
  if (isPlaying) {
    audioPlayer.play();
  }
}

function togglePlay() {
  if (isPlaying) {
    audioPlayer.pause();
    playBtnEl.innerText = "▶";
    isPlaying = false;
  } else {
    audioPlayer.play();
    playBtnEl.innerText = "⏸";
    isPlaying = true;
  }
}

function nextSong() {
  currentSongIndex++;
  if (currentSongIndex > songs.length - 1) {
    currentSongIndex = 0; // Loop back to start
  }
  loadSong(currentSongIndex);
}

function prevSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1; // Loop to end
  }
  loadSong(currentSongIndex);
}

// --- AUTOMATIC EVENTS (The "Magic" Part) ---

// 1. Update Progress Bar automatically while playing
audioPlayer.addEventListener("timeupdate", (e) => {
  // Get values from the audio player directly
  const { duration, currentTime } = e.srcElement;

  // Calculate percent
  const progressPercent = (currentTime / duration) * 100;
  progressBarEl.style.width = `${progressPercent}%`;

  // Update time text
  currentTimeEl.innerText = formatTime(currentTime);

  // Update total duration text (NaN check is for when song is loading)
  if (duration) {
    totalTimeEl.innerText = formatTime(duration);
  }
});

// 2. Automatically go to next song when current one ends
audioPlayer.addEventListener("ended", nextSong);

// Helper: Format seconds into MM:SS
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

// --- INITIALIZE ---
// Load the first song on startup
loadSong(currentSongIndex);

// Event Listeners
playBtnEl.addEventListener("click", togglePlay);
nextBtnEl.addEventListener("click", nextSong);
prevBtnEl.addEventListener("click", prevSong);

// Navigation
const myButton = document.querySelector(".back-link");
myButton.addEventListener("click", () => {
  window.location.href = "1.html";
});
