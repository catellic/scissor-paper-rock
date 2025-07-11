const startButton = document.querySelector(`.start-button`),
  landing = document.querySelector(`.landing`),
  instruction = document.querySelector(`.instruction`),
  game = document.querySelector(`.game`),
  end = document.querySelector(`end`),
  player = document.querySelector(`.player-score`),
  computer = document.querySelector(`.computer-score`),
  rock = document.querySelector(`.rock`),
  paper = document.querySelector(`paper`),
  scissors = document.querySelector(`scissors`);

let computerScore = 0,
  playerScore = 0;

// handles initialization of game clicking on start game button
startButton.addEventListener("click", () => {
  landing.classList.add("hidden");
  game.classList.remove("hidden");
  player.textContent = playerScore;
  computer.textContent = computerScore;
});



game.addEventListener('')