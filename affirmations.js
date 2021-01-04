// Grab DOM Elements
const backgroundIMG = document.querySelector(".masthead");
const form = document.getElementById("form");
const input = document.getElementById("input");
const affirmationsUL = document.getElementById("affirmations");

// Check if there is anything in local storage
const affirmations = JSON.parse(localStorage.getItem("affirmations"));

if (affirmations) {
  affirmations.forEach((affirmation) => addAffirmation(affirmation));
}

//Unsplash access key
const clientID = "&client_id=lf2gVZLI3hnn28jfnInXEv6doKCeRvmUaMeJsbplHnI";

////// Implement current Time
function getTime() {
  $("#current-time").text(
    luxon.DateTime.local().toLocaleString({
      hour: "2-digit",
      minute: "2-digit",
    })
  );
}

setInterval(getTime, 1000);

//Api call for quotes
function getQuotes() {
  axios.get("https://type.fit/api/quotes/").then(function (response) {
    // let ranQuote = response.data[0].text;
    let randNum = Math.floor(Math.random() * response.data.length);
    let randQuote = response.data[randNum].text;
    $("#quotes").text(randQuote);
  });
}

function fetchImage() {}

// Add affirmation and append to LI
function addAffirmation(affirmation) {
  let affirmationText = input.value;

  if (affirmation) {
    affirmationText = affirmation.text;
  }

  if (affirmationText) {
    const affirmationEl = document.createElement("li");
    if (affirmation && affirmation.completed) {
      affirmationEl.classList.add("completed");
    }

    affirmationEl.innerText = affirmationText;

    affirmationEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      affirmationEl.remove();
      updateLS();
    });

    affirmationsUL.prepend(affirmationEl);

    input.value = "";

    updateLS();
  }
}

function updateLS() {
  affirmationsEl = document.querySelectorAll("li");

  const affirmations = [];

  affirmationsEl.forEach((affirmationEl) => {
    affirmations.unshift({
      text: affirmationEl.innerText,
    });
  });

  localStorage.setItem("affirmations", JSON.stringify(affirmations));
}

// Add event listener for user input
form.addEventListener("submit", (e) => {
  e.preventDefault();

  addAffirmation();
});

function init() {
  getQuotes();
  getTime();
}

window.onload = function () {
  init();
};
