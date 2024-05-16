function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * options.length);
    return options[index];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(player, computer) {
    return ( // if the cond true return true or false
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    );
}

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
  
   if (hasPlayerWonTheRound) {
     playerScore++;
     return `Player wins! ${userOption} beats ${computerResult}`;
   } else if (!hasPlayerWonTheRound) {
     computerScore++;
     return `Computer wins! ${computerResult} beats ${userOption}`;
   } else {
     return `It's a tie!`;
   } 
  }
