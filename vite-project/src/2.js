import "./2.css";

let songs = [];

const storedSongs = JSON.parse(localStorage.getItem("myCustomSongs"));
if (storedSongs) {
  songs.push(...storedSongs);
  console.log("Loaded songs:", songs);
} else {
  console.log("No custom songs found in localStorage.");
}

//audio
const audioPlayer = new Audio();
let currentSongIndex = 0;
let isPlaying = false;

//html
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

//load
function loadSong(index) {
  const song = songs[index];

  //visual
  titleEl.innerText = song.title;
  artistEl.innerText = song.artist;
  nextEl.innerText = song.next;
  artEl.style.backgroundColor = song.color;

  //audio
  audioPlayer.src = song.src; // Tell the player where the file is
  audioPlayer.load(); // Load the file

  //reset progress
  progressBarEl.style.width = "0%";
  currentTimeEl.innerText = "0:00";

  //continue playing if already playing
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
    currentSongIndex = 0; //loop to start
  }
  loadSong(currentSongIndex);
}

function prevSong() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1; //loop to end
  }
  loadSong(currentSongIndex);
}

//pbar update
audioPlayer.addEventListener("timeupdate", (e) => {
  //value
  const { duration, currentTime } = e.srcElement;

  //percent
  const progressPercent = (currentTime / duration) * 100;
  progressBarEl.style.width = `${progressPercent}%`;

  //text time
  currentTimeEl.innerText = formatTime(currentTime);

  //update total duration
  if (duration) {
    totalTimeEl.innerText = formatTime(duration);
  }
});

//next song when ended
audioPlayer.addEventListener("ended", nextSong);

//math
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

//loadsong
if (songs.length > 0) {
  loadSong(currentSongIndex);
}
//eventlistener
playBtnEl.addEventListener("click", togglePlay);
nextBtnEl.addEventListener("click", nextSong);
prevBtnEl.addEventListener("click", prevSong);

//navigation
const myButton = document.querySelector(".back-link");
myButton.addEventListener("click", () => {
  window.location.href = "1.html";
});

const theme = JSON.parse(localStorage.getItem("theme"));
document.body.className = "";
document.body.classList.toggle(theme);

const manageButtons = document.querySelectorAll(".reset");

manageButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const dataid = btn.dataset.id;

    if (dataid === "remove") {
      songs.splice(0, songs.length);
      localStorage.clear("MyCustomSongs");
      titleEl.innerText = "No Songs Available";
      artistEl.innerText = ":(";
      console.log("Songs reset (Custom songs removed and page reloaded).");
    } else if (dataid === "default") {
      songs.splice(0, songs.length);
      songs.push(
        {
          title: "Green Tea Dreams",
          artist: "Cafe Vibes",
          color: "#D8E2DC",
          next: "Jasmine Serenity",
          src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
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
        }
      );

      localStorage.setItem("myCustomSongs", JSON.stringify(songs));
      console.log("Default songs added to the current list.");
    }
  });
});
