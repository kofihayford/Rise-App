const container = document.getElementById("container");
const musicContainer = document.getElementById("music-container");
const text = document.getElementById("text");
const playBtn = document.getElementById("play");
const audio = document.getElementById("audio");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

// console.log(breatheTime, holdTime);

// window.onload = function () {
//   document.getElementById("ambient").play();
// };

breathAnimation();

function breathAnimation() {
  text.innerText = "Breathe In";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe Out";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);

function playSong() {
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}
function pauseSong() {
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});
