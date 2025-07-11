function getEl(el) {
  return document.querySelector(el)
}

const startButton = getEl(`.start-button`),
  landing = getEl(`.landing`),
  instruction = getEl(`.instruction`),
  game = getEl(`.game`),
  end = getEl(`end`),
  player = getEl(`.player-score`),
  computer = getEl(`.computer-score`),
  rock = getEl(`.rock`),
  paper = getEl(`paper`),
  scissors = getEl(`scissors`);

let computerScore = 0,
  playerScore = 0,
  computerChoice,
  playerChoice,
  roundPlayer = false,
  roundWinner;

// handles initialization of game clicking on start game button
startButton.addEventListener("click", () => {
  landing.classList.add("hidden");
  game.classList.remove("hidden");
  player.textContent = playerScore;
  computer.textContent = computerScore;
});

game.addEventListener("");
