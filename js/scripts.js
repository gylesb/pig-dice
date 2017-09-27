// constructor
function player(totalScore) {
  this.playerScore = totalScore;
}

var diceRoll = function() {
  var genValue = Math.floor((Math.random()*6)+1);
  return genValue;
}

$(document).ready(function() {
  // event.preventDefault();
  var player1 = new player(0);
  var player2 = new player(0);
  var currentTotalScore = 0;
  var counter = 1;

  // if (player1.playerScore <= 100 || player2.playerScore <=100) {
    var currentTotalScore = 0;
    // Player 1 clicks "roll"
    $("#playerOneRoll").click(function() {
      $("#diceRoll").text("");
      var diceNumber = diceRoll();
      if (counter % 2 == 1) {
        // player 1 lights up
        $("#highlight1").show();
        $("#highlight2").hide();
        // append diceNumber to dicebox
        $("#diceRoll").text(diceNumber);
        if (diceNumber == 1) {
          currentTotalScore = 0;
          $("#currentScore").text(currentTotalScore);
          counter ++;
          $("#highlight1").hide();
          $("#highlight2").show();
        } else if (diceNumber != 1) {
          // add diceNumber to Curent Total Count
          currentTotalScore = currentTotalScore + diceNumber;
          $("#currentScore").text(currentTotalScore);
        }
      }
    });
      // Player 2 clicks "roll"
    $("#playerTwoRoll").click(function() {
      var diceNumber = diceRoll();
      // var currentTotalScore = 0;
      if (counter % 2 == 0) {
        // player 2 lights up
        $("#highlight2").show();
        $("#highlight1").hide();
        // append diceNumber to dicebox
        $("#diceRoll").text(diceNumber);
        if (diceNumber == 1) {
          currentTotalScore = 0;
          $("#currentScore").text(currentTotalScore);
          counter ++;
          $("#highlight1").show();
          $("#highlight2").hide();
        } else if (diceNumber !=1) {
        // add diceNumber to Curent Total Count
          currentTotalScore = currentTotalScore + diceNumber;
          $("#currentScore").text(currentTotalScore);
        }
      }
    });
    // Player clicks pass
    $("#playerOnePass").click(function() {
      if (counter % 2 == 1) {
        player1.playerScore = player1.playerScore + currentTotalScore;
        // append player1.playerScore to player1 Score board;
        currentTotalScore = 0;
        $("#p1Score").text(player1.playerScore);
        counter ++;
      }
      if (player1.playerScore >= 100) {
      // hide dice box and score box to display "player 1 wins!"
        $("#diceBox").hide();
        $("#dice").hide();
        $("#scoreBox").hide();
        $("#winnerBox").show();
        $("#winnerBox h1").text("Player 1 Wins!");
      }
    });


    $("#playerTwoPass").click(function() {
      if (counter % 2 ==0) {
        player2.playerScore = player2.playerScore + currentTotalScore;
        // append player1.playerScore to player1 Score board;
        currentTotalScore = 0;
        $("#p2Score").text(player2.playerScore);
        counter ++;
      }
      if (player2.playerScore >= 100) {
      // hide dice box and score box to display "player 1 wins!"
        $("#scoreBox").hide();
        $("#currentBox").hide();
        $("#scoreBox").hide();
        $("#winnerBox").show();
        $("#winnerBox h1").text("Player 2 Wins!");
      }

    });
    // if (player1.playerScore >= 100) {
    // // hide dice box and score box to display "player 1 wins!"
    // $("#dice").hide();
    // $("#scoreBox").hide();
    // $("#winnerBox").show();
    // $("#winnerBox h1").text("<strong>Player 1!</strong>");
    // } else if (player2.playerScore >= 100) {
    // }
    // hide dice box and score box to display "player 1 wins!"
});
