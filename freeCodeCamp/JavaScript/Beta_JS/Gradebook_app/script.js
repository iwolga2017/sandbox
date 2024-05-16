function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * options.length);
    return options[index];
}
console.log(getRandomComputerResult());

function hasPlayerWonTheRound(player, computer) {
    return ( // if the cond true return true or false
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    );

}
