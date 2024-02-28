// Let's play! You have to return which player won! In case of 
// a draw return Draw!.
// Scissors beats Paper;
// Paper beats Rock;
// Rock beats Scissors;
// Examples(Input1, Input2 --> Output):
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  
    return result = (p1 === "scissors" && p2 === "paper") 
    || (p1 === "paper" && p2 === "rock")
    || (p1 === "rock" && p2 === "scissors") ? "Player 1 won!" :
       (p1 ===  p2) ? "Draw!" :           
       "Player 2 won!";
  };
  console.log(  rps("scissors", "paper") );
  console.log(  rps("paper", "paper") );
  console.log(  rps("scissors", "rock") );