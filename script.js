import { sel, getEl, getElArray } from './domSelectors.js';


// -----------start-----------
// UTILS

function capitalize(string) {
  return String(string[0].toUpperCase() + String(string).slice(1))
}

// UTILS
// -----------end-----------


// -----------start-----------
// VARIABLES FOR GAME LOGIC

let computerScore = 0,
  playerScore = 0,
  computerChoice,
  roundWinner;


// VARIABLES FOR GAME LOGIC
// -----------end-----------


// -----------start-----------
// GAME LOGIC FUNC

function getComputerChoice() {
  const r = Math.random();
  if (r <= 0.33) return "rock";
  if (r <= 0.67) return "paper";
  return "scissors";
}

function checkWinner(p1, p2) {
  if (p1 === p2) return "tie";
  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "scissors" && p2 === "paper")
  ) return "player";
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
    sel.winnerSel().textContent = capitalize(roundWinner) + " wins";
  } else {
    computerChoice = getComputerChoice();
  }
}
// GAME LOGIC FUNC
// -----------end-----------


// -----------start-----------
// EVENT LISTENERS SECTION

sel.startButtonSel().addEventListener("click", () => {
  sel.landingSel().classList.add("hidden");
  sel.gameSel().classList.remove("hidden");

  // Reset punteggi anche nel DOM
  playerScore = 0;
  computerScore = 0;
  // sel.playerSel().textContent = playerScore;
  // sel.computerSel().textContent = computerScore;
  computerChoice = getComputerChoice();
});

sel.choiceButtonsSel().forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const player = e.target.id;

    const winner = checkWinner(player, computerChoice);
    roundWinner = capitalize(winner);

    sel.roundSel().textContent = roundWinner;
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


// EVENT LISTENERS SECTION
// -----------end-----------