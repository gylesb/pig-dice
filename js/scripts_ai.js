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
  var computer = new player(0);
  var currentTotalScore = 0;
  var counter = 1;

  var bot = function(currentTotalScoreBot) {
      // alert("current total score Bot is "+ currentTotalScoreBot);
    //   currentScore = currentTotalScoreBot;
    // alert("currentScore is: " + currentScore);
    // // for (var i = 0; i<=15; i+=diceNumber) {
    // // $("#computerRoll").trigger("click");
    if (currentTotalScoreBot <= 12) {
      // alert("hello, bot clicked computerRoll, currentTotalScoreBot is "+ currentTotalScoreBot);
      $("#computerRoll").trigger("click");
    } else if (currentTotalScoreBot > 12)
      $("#computerPass").trigger("click");
  }
    var currentTotalScoreP1 = 0;
    var currentTotalScoreBot = 0;


  if (player1.playerScore <= 100 || computer.playerScore <=100) {
    // Player 1 clicks "roll"
    $("#playerOneRoll").click(function() {
      $("#diceRoll").text("");
      var diceNumber = diceRoll();
      if (counter % 2 == 1) {
        // player 1 lights up
        // $("#highlight1").show();
        // $("#highlight2").hide();
        // append diceNumber to dicebox
        $("#diceRoll").text(diceNumber);
        if (diceNumber == 1) {
          currentTotalScore = 0;
          $("#currentScore").text(currentTotalScore);
          counter ++;
          $("#highlight1").hide();
          $("#highlight2").show();
          bot(currentTotalScoreBot);
        } else if (diceNumber != 1) {
          // add diceNumber to Curent Total Count
          currentTotalScore = currentTotalScore + diceNumber;
          $("#currentScore").text(currentTotalScore);
        }
      }
    });
  }
  // Computer clicks "roll"
  $("#computerRoll").click(function() {
    var diceNumber = diceRoll();
    // alert("bot roll; dice number is:"+ diceNumber);
    // alert("counter is:"+counter);
    // var currentTotalScore = 0;
    if (counter % 2 == 0) {
      // player 2 lights up
      $("#highlight2").show();
      $("#highlight1").hide();
      // alert("calculating: if =1 end; if !=1 continue..");
      // append diceNumber to dicebox
      $("#diceRoll").text(diceNumber);
      if (diceNumber == 1) {
        currentTotalScoreBot = 0;
        $("#currentScore").text(currentTotalScoreBot);
        counter ++;
        $("#highlight1").show();
        $("#highlight2").hide();
      } else if (diceNumber !=1) {
        // add diceNumber to Curent Total Count
        currentTotalScoreBot = currentTotalScoreBot + diceNumber;
        $("#currentScore").text(currentTotalScoreBot);
        // alert("currentTotal score is:"+currentTotalScoreBot+"calling bot again");
        bot(currentTotalScoreBot);
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
      // alert("hello P1 Pass is clicked");
      bot(currentTotalScoreBot);
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


  $("#computerPass").click(function() {
    if (counter % 2 ==0) {
      computer.playerScore = computer.playerScore + currentTotalScoreBot;
      // append player1.playerScore to player1 Score board;
      currentTotalScoreBot = 0;
      $("#p2Score").text(computer.playerScore);
      counter ++;
      $("#highlight1").show();
      $("#highlight2").hide();
      $("#diceRoll").text("");
      $("#currentScore").text("");

    }
    if (computer.playerScore >= 100) {
      // hide dice box and score box to display "player 1 wins!"
      $("#scoreBox").hide();
      $("#dice").hide()
      $("#currentBox").hide();
      $("#diceBox").hide();
      $("#winnerBox").show();
      $("#winnerBox h1").text("The Computer Wins. Lol.");
    }
  });
});
