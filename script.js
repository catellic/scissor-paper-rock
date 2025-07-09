let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  rand = Math.random();
  console.log(rand);
  if (rand >= 0 && rand <= 0.3) {
    console.log("computer: rock");
    return "rock";
  } else if (rand > 0.3 && rand <= 0.6) {
    console.log("computer: paper");
    return "paper";
  } else if (rand > 0.6 && rand <= 1) {
    console.log("computer: scissor");
    return "scissor";
  }
}

function getHumanChoice() {
  let choice = prompt("rock, paper or scissor?");
  console.log(choice);
  return choice.toLowerCase();
}

function playRound(roundIndex) {
  console.log("\nRound " + (roundIndex + 1));
  computerChoice = getComputerChoice();
  humanChoice = getHumanChoice();

  if (computerChoice == humanChoice) {
    console.log("Round>Tie");
  } else if (computerChoice == "rock" && humanChoice == "paper") {
    humanScore++;
    console.log("Round>Paper beats Rock, you win!");
  } else if (computerChoice == "rock" && humanChoice == "scissor") {
    computerScore++;
    console.log("Round>Rock beats Scissor, computer wins!");
  } else if (computerChoice == "paper" && humanChoice == "rock") {
    computerScore++;
    console.log("Round>Paper beats Rock, computer wins!");
  } else if (computerChoice == "paper" && humanChoice == "scissor") {
    humanScore++;
    console.log("Round>Scissor beats Paper, you win!");
  } else if (computerChoice == "scissor" && humanChoice == "rock") {
    humanScore++;
    console.log("Round>Scissor beats Paper, you win!");
  } else if (computerChoice == "scissor" && humanChoice == "paper") {
    computerScore++;
    console.log("Round>Scissor beats Paper, you win!");
  }
}

function playGame() {
  for (let index = 0; index < 5; index++) {
    playRound(index);
    console.log("Computer: " + computerScore + " - Human:" + humanScore);
  }
  if (computerScore == humanScore) {
    console.log("Game>Tie!");
  } else if (computerScore < humanScore) {
    console.log("Game>You win!");
  } else {
    console.log("Game>Computer wins!");
  }
}

playGame();
