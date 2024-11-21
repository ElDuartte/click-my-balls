import updateUI from "./ui.js";

let score = parseInt(localStorage.getItem("score")) || 0;

updateUI();

function incrementScore(amount) {
  score += amount;
  localStorage.setItem("score", score);

  const gameScore = document.getElementById("game-score");
  if (gameScore) {
    gameScore.textContent = `Score: ${score}`;
  }
}

setInterval(() => {
  incrementScore(1);
}, 1000);

const ballsButton = document.getElementById("balls-button");
if (ballsButton) {
  ballsButton.addEventListener("click", () => {
    incrementScore(1);
  });
}
