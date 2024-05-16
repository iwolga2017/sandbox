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
        return `It's a tie! Both chose ${userOption}`;
    }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
};

showResults("Rock");