import updateUI from "./ui.js";

let score = parseInt(localStorage.getItem("score")) || 0;
let intervalId = null;
let isResetting = false;

updateUI(score);

function incrementScore(amount) {
  score += amount;
  localStorage.setItem("score", score);

  updateUI(score);
}

function startAutoIncrement() {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      incrementScore(1);
    }, 1000);
  }
}

function stopAutoIncrement() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

startAutoIncrement();


const ballsButton = document.getElementById("balls-button");
if (ballsButton) {
  ballsButton.addEventListener("click", () => {
    incrementScore(1);
  });
}

const resetballsButton = document.getElementById("reset-balls-button");
if (resetballsButton) {
  resetballsButton.addEventListener("click", () => {
    handleReset();
  });
}

function handleReset() {
  if (isResetting) return;
  isResetting = true;

  stopAutoIncrement();

  setTimeout(() => {
    const confirmReset = window.confirm("Are you sure you want to reset the score?");
    if (confirmReset) {
      resetScore();
    }

    startAutoIncrement();
    isResetting = false;
  }, 0);
}

function resetScore() {
  score = 0;
  localStorage.setItem("score", score);
  updateUI(score);
}
