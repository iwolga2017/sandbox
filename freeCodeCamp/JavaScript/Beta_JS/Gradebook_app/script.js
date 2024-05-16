function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    let index = Math.floor(Math.random() * options.length);
    return options[index];
  }
  console.log(getRandomComputerResult());