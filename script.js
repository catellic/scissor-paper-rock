import { sel, getEl, getElArray } from './domSelectors.js';


// -----------start-----------
// UTILS

function capitalize(string) {
  return String(string[0].toUpperCase() + String(string).slice(1))
}

function restoreGameValues() {
  playerScore = 0;
  computerScore = 0;
  sel.playerSel().textContent = playerScore;
  sel.computerSel().textContent = computerScore;
  sel.roundSel().textContent = ""
  sel.endSel().classList.add("hidden");
  sel.landingSel().classList.remove("hidden");
  sel.headerSel().classList.remove("hidden");
}

function flashText(selector, color) {
  selector.classList.remove(`flash`, color)
  requestAnimationFrame(() => {
    selector.classList.add(`flash`, color)
  })
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
    flashText(sel.playerSel(), `green`)
  } else if (winner === "computer") {
    computerScore++;
    sel.computerSel().textContent = computerScore;
    flashText(sel.computerSel(), `green`)
  }

  sel.roundSel().textContent = (winner === `tie`) ? "Tie" : capitalize(winner) + " wins";
  flashText(sel.roundSel(), `green`)
}

function checkEndGame(winner) {
  if (playerScore === 5 || computerScore === 5) {

    sel.gameSel().classList.add("hidden");
    sel.endSel().classList.remove("hidden");
    sel.winnerSel().textContent = capitalize(winner) + " wins";
    flashText(sel.winnerSel(), `red`)

  } else {
    computerChoice = getComputerChoice();
  }
}
// GAME LOGIC FUNC
// -----------end-----------


// -----------start-----------
// EVENT LISTENERS SECTION

sel.startButtonSel().addEventListener("click", () => {

  // sel.headerSel().classList.add("hidden");
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

    updateScores(winner);
    checkEndGame(winner);

  });
});

// initialize game by restoring default values
sel.playAgainSel().addEventListener("click", () => {
  restoreGameValues()
});


// EVENT LISTENERS SECTION
// -----------end-----------