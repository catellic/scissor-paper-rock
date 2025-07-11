function getEl(el) {
  return document.querySelector(el);
}

function getComputerChoice() {
  const random = Math.random();
  console.log(random);
  if (random <= 0.33) {
    console.log("rock");
    return "rock";
  } else if (random <= 0.67) {
    console.log("paper");
    return "paper";
  } else {
    console.log("scissors");
    return "scissors";
  }
}

function findWinner(player, computer) {
  if (player == computer) {
    return [`tie`];
  } else if (
    (player == `rock` && computer == `scissors`) ||
    (player == `paper` && computer == `rock`) ||
    (player == `scissor` && computer == "paper")
  ) {
    return [`player`];
  } else if (
    (player == `scissors` && computer == `rock`) ||
    (player == `rock` && computer == `paper`) ||
    (player == `paper` && computer == "scissors")
  ) {
    return [`computer`];
  }
}

function updateScores(winner) {
  if (winner == `player`) {
    playerScore++;
    getEl(`.player-score`).textContent = playerScore;
  } else if (winner == `computer`) {
    computerScore++;
    getEl(`.computer-score`).textContent = computerScore;
  }
}

const startButton = getEl(`.start-button`),
  landing = getEl(`.landing`),
  instruction = getEl(`.instruction`),
  game = getEl(`.game`),
  end = getEl(`.end`),
  player = getEl(`.player-score`),
  computer = getEl(`.computer-score`),
  choiceButton = getEl(`.choice`),
  choiceButtons = document.querySelectorAll(`.choice`);

let computerScore = 0,
  playerScore = 0,
  computerChoice,
  playerChoice,
  roundWinner;

// handles initialization of game clicking on start game button
startButton.addEventListener("click", () => {
  // hide landing "page" and show game "page"
  landing.classList.add("hidden");
  game.classList.remove("hidden");

  // score is initalized to zero
  player.textContent = playerScore;
  computer.textContent = computerScore;

  // initialize computer choice for future use
  computerChoice = getComputerChoice();
});

choiceButtons.forEach((btn) => {
  btn.addEventListener(`click`, (e) => {
    if (playerScore < 5 || computerScore < 5) {
      // // find winner and update its score
      // let winner = findWinner(e.target.id, computerChoice);
      updateScores(findWinner(e.target.id, computerChoice));

      if (playerScore == 5 || computerScore == 5) {
        game.classList.add("hidden");
        end.classList.remove("hidden");
        
      } else {
        // this prepares new choice for next round
        computerChoice = getComputerChoice();
      }
    }
  });
});
