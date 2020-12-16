const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

console.log(breatheTime, holdTime);

breathAnimation();

function breathAnimation() {
  console.log("breathe in");

  setTimeout(() => {
    console.log("hold");

    setTimeout(() => {
      console.log("breathe out");
    }, holdTime);
  }, breatheTime);
}
