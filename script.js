import { sel, getEl, getElArray } from './domSelectors.js';

let computerScore = 0,
  playerScore = 0,
  computerChoice,
  roundWinner;

function getComputerChoice() {
  const r = Math.random();
  if (r <= 0.33) return "rock";
  if (r <= 0.67) return "paper";
  return "scissors";
}

function findWinner(player, computer) {
  if (player === computer) return "tie";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  )
    return "player";
  return "computer";
}

function updateScores(winner) {
  if (winner === "player") {
    playerScore++;
    sel.playerSel().textContent = playerScore;
  } else if (winner === "computer") {
    computerScore++;
    sel.computerSel().textContent = computerScore;
  }
}

function checkEndGame() {
  if (playerScore === 5 || computerScore === 5) {
    sel.gameSel().classList.add("hidden");
    sel.endSel().classList.remove("hidden");
    sel.winnerSel().textContent = roundWinner;
  } else {
    computerChoice = getComputerChoice();
  }
}

sel.startButtonSel().addEventListener("click", () => {
  sel.landingSel().classList.add("hidden");
  sel.gameSel().classList.remove("hidden");

  // Reset punteggi anche nel DOM
  playerScore = 0;
  computerScore = 0;
  sel.playerSel().textContent = playerScore;
  sel.computerSel().textContent = computerScore;

  computerChoice = getComputerChoice();
});

sel.choiceButtonsSel().forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const player = e.target.id;
    const winner = findWinner(player, computerChoice);
    roundWinner = winner.toUpperCase();

    updateScores(winner);
    checkEndGame();
  });
});

sel.playAgainSel().addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  sel.playerSel().textContent = playerScore;
  sel.computerSel().textContent = computerScore;

  sel.endSel().classList.add("hidden");
  sel.landingSel().classList.remove("hidden");
});
