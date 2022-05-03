let tie = (player1Choice, player2Choice) => {
  if (player1Choice === player2Choice) {
    return true;
  }
  return false;
};

function rsp() {
  let player1Score = 0;
  let player2Score = 0;
  while (player1Score < 3 && player2Score < 3) {
    let player1Choice = prompt("Player 1 pick rock/paper/scissors");
    let player2Choice = prompt("Player 2 pick rock/paper/scissors");
    if (player1Choice === "q" || player2Choice === "q") {
      console.log("Game is over");
      break;
    }

    if(tie(player1Choice,player2Choice)){
        console.log("It's a tie, keep playing")
    }
    else if (player1Choice === "rock") {
      if (player2Choice === "scissors") {
        player1Score++;
        console.log(
          `player 1 has a score of ${player1Score} player 2 has a score of ${player2Score} `
        );
      } else if (player2Choice === "paper") {
        player2Score++;
        console.log(
          `player 1 has a score of ${player1Score} player 2 has a score of ${player2Score} `
        );
      } else {
        console.log(
          "One of the player entered invalid action please pick rock/scissors/paper only"
        );
        continue;
      }
    }

    else if (player1Choice === "scissors") {
      if (player2Choice === "paper") {
        player1Score++;
        console.log(
          `player 1 has a score of ${player1Score} player 2 has a score of ${player2Score} `
        );
      } else if (player2Choice === "rock") {
        player2Score++;
        console.log(
          `player 1 has a score of ${player1Score} player 2 has a score of ${player2Score} `
        );
      } else {
        console.log(
          "One of the player entered invalid action please pick rock/scissors/paper only"
        );
        continue;
      }
    }

    else if (player1Choice === "paper") {
      if (player2Choice === "rock") {
        player1Score++;
        console.log(
          `player 1 has a score of ${player1Score} player 2 has a score of ${player2Score} `
        );
      } else if (player2Choice === "scissors") {
        player2Score++;
        console.log(
          `player 1 has a score of ${player1Score} player 2 has a score of ${player2Score} `
        );
      } else {
        console.log(
          "One of the player entered invalid action please pick rock/scissors/paper only"
        );
        continue;
      }
    }
  }
  if (player1Score > player2Score) {
    return alert("Player 1 won");
  } else {
    return alert("player 2 won");
  }
}
