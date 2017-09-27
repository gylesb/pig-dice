// constructor
function player(totalScore) {
  this.playerScore = totalScore;
}

var diceRoll = function() {
  var genValue = Math.floor((Math.random()*6)+1);
  return genValue
}

// player.prototype.diceNumber = function () {
//   var diceNumber = Math.floor(Math.random()+1);
//   return diceNumber;
// }

$(document).ready(function() {
  // event.preventDefault();
  var player1 = new player(0);
  var player2 = new player(0);
  var currentTotalScore = 0;
  var counter = 1;
// alert("hello");

  if (player1.playerScore <= 100 || player2.playerScore <=100) {
    // Player 1 clicks "roll"
    var currentTotalScore = 0;
    $("#playerOneRoll").click(function() {
      $("#diceRoll").text("");
      var diceNumber = diceRoll();
      if (counter % 2 == 1) {
        // $("#highlight1 h3").hide();
        // $("#highlight1 h2").append("<strong class='playerturn'>Player 1: </strong>");
  //       // player 1 lights up
  //       // append diceNumber to dicebox
        $("#diceRoll").append(diceNumber);
        if (diceNumber == 1) {
          var currentTotalScore = 0;
          $("#currentScore").append(currentTotalScore);
          counter +=1;
        } else if (diceNumber != 1) {
          // add diceNumber to Curent Total Count
          currentTotalScore = currentTotalScore + diceNumber;
          $("#currentScore").append(currentTotalScore + diceNumber);

        }
      }
    });
      // Player 2 clicks "roll"
    $("#playerTwoRoll").click(function() {
      diceNumber = diceRoll();
      // var currentTotalScore = 0;
      if (counter % 2 ==0) {
        // player 2 lights up
        // append diceNumber to dicebox
        $("#diceRoll").append(diceNumber);
        if (diceNumber == 1) {
          currentTotalScore = 0;
          counter +=1;
        } else if (diceNumber !=1) {
        // add diceNumber to Curent Total Count
          var currentTotalScore = currentTotalScore + diceNumber;
          $("#currentScore").append(currentTotalScore);
      }
    }
  });
  //   // Player clicks pass
  //     if (counter % 2 == 1) {
  //     player1.playerScore = player1.playerScore + currentTotalScore;
  //     // append player1.playerScore to player1 Score board;
  //     currentTotalScore = 0;
  //     counter +=;
  //     return player1.playerScore;
  //   } else if (counter % 2 ==0) {
  //     player2.playerScore = player2.playerScore + currentTotalScore;
  //     // append player1.playerScore to player1 Score board;
  //     currentTotalScore = 0;
  //     counter +=;
  //     return player2.playerScore;
  //   }
  // } else if (player1.playerScore >= 100) {
  //   // hide dice box and score box to display "player 1 wins!"
  // } else if (player2.playerScore >= 100) {
  //   // hide dice box and score box to display "player 1 wins!"
  }
});
