function updateUI() {
  const title = document.getElementById('title');
  if (!title.textContent) {
    const titleText = document.createTextNode("Click my balls");
    title.appendChild(titleText);
  }

  let score = parseInt(localStorage.getItem('score')) || 0;
  const gameScore = document.getElementById("game-score");
  gameScore.textContent = `Score: ${score}`;

  const ballsButton = document.getElementById('balls-button');
  ballsButton.addEventListener('click', () => {
    score += 1;
    gameScore.textContent = `Score: ${score}`;
    localStorage.setItem('score', score);
  })

  const resetballsButton = document.getElementById('reset-balls-button');
  resetballsButton.addEventListener('click', () => {
    const confirmReset = window.confirm("Are you sure you want to reset the score?");
    if (confirmReset) {
      localStorage.removeItem('score');
      updateUI();
    }
  })

  console.log('this is ui')
}

export default updateUI();
