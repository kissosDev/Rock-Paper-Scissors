// what is the game
// how many players
// what is the score
// what is the user choice
// which choice what the winning out of the 2
// which user pick the winning choice
// what is the updated score

// rock, paper
// rock, scissors
// scissors, paper
// scissors, scissors -> addressed on tie
// paper, paper -> addressed on tie
// rock, rock -> addressed on tie

// function isValidChoice(choice){
//     const choices = ["rock", "paper", "scissors"]
//     if(choices.includes(choice)){
//         return true;
//     }
//     return false;
// }
const ssss = 1;
function scoreBoard(player1Score, player2Score) {
  console.log(`player1 score:${player1Score} player2 score: ${player2Score}`);
}

function getUserInput() {
  const action = ["rock", "paper", "scissors", "Qgit add README.md"];
  let userInput = prompt(
    "Pick rock, paper, scissors  to play or Q for end the game"
  );
  if (!action.includes(userInput)) {
    console.log("Invalid value has been given please chose other one");
    userInput = getUserInput();
  }

  return userInput;
}

function getWinnerChoice(userInput1, userInput2) {
  if (userInput1 === userInput2) {
    return 0;
  }
  if (userInput1 === "rock") {
    if (userInput2 === "scissors") {
      return 1;
    }
    return -1;
  }
  if (userInput1 === "scissors") {
    if (userInput2 === "paper") {
      return 1;
    }
    return -1;
  }
  if (userInput1 === "paper") {
    if (userInput2 === "rock") {
      return 1;
    }
    return -1;
  }
}

function rockPaperScissors() {
  console.log("Welcome to Rock Paper Scissors Game");

  let until = 3;
  let player1Score = 0;
  let player2Score = 0;

  while (player1Score < until && player2Score < until) {
    let choice1 = getUserInput();
    if (choice1 === "Q") break;
    let choice2 = getUserInput();
    if (choice2 === "Q") break;

    let winner = getWinnerChoice(choice1, choice2);
    if (winner === -1) {
      player2Score++;
      scoreBoard(player1Score, player2Score);
    } else if (winner === 1) {
      player1Score++;
      scoreBoard(player1Score, player2Score);
    } else if (winner === 0) {
      console.log("It's a tie, keep playing");
      scoreBoard(player1Score, player2Score);
    }
  }
  if (player1Score === until) {
    console.log("Player1 Won");
  }
  if (player2Score === until) {
    console.log("Player2 Won");
  } else {
    console.log("One of the players decided to leave the Game");
  }
}
