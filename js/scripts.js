// Business Logic ----------

function Player(nameOfPlayer) {
  this.name = nameOfPlayer;
  this.lastRoll = 0;
  this.totalScore = 0;
  this.turnScore = 0;
  console.log("player created " + this.name);
}

Player.prototype.roll = function(playerOneTurn) {
  this.lastRoll = rollD6();
  console.log("roll: " + this.lastRoll)
  if (this.lastRoll === 1) { 
    console.log("player one turn during roll" + playerOneTurn);
    if (playerOneTurn === true){
      console.log("changing turns from " + this.name);
      return false;
    } 
  } else {
    this.turnScore += this.lastRoll;
    console.log("turn score: " + this.turnScore);
    return true;
  }
}

Player.prototype.hold = function (playerOneTurn) {
  console.log("p1 turn = " + playerOneTurn);
  this.totalScore += this.turnScore;
  console.log(this.name + " total score " + this.totalScore);
  this.turnScore = 0;
  if (this.totalScore >= 20){
    winMessage(this.name);
  } else {
    if (playerOneTurn === true){
      console.log("changing player");
      return false;
    } else {
      console.log("changing player");
      return true;
    }
    console.log("p1 turn = " + playerOneTurn);
    console.log("changing turns from " + this.name);
  }
}

function rollD6() {
  return Math.floor(Math.random() * 6) + 1;
}


// function changeTurn(playerOneTurn) {
//     playerOneTurn = !playerOneTurn;
//     console.log("passing turn");
//   }

// function resetGame() {
//   playerOneTurn = true;
//   player1.turnScore = 0;
//   player1.totalScore = 0;
//   player2.turnScore = 0;
//   player2.totalScore = 0;
// }

// UI Logic ----------

function winMessage(player){
  console.log(player + " wins!");

}

window.addEventListener("load", function (){

  const resetButton = document.getElementById("reset-button");
  const rollButton = document.getElementById("roll-button");
  const holdButton = document.getElementById("hold-button");
  const startButton = document.getElementById("start-button");
  
  let playerOneTurn = true;
  
  const player1 = new Player("player1");
  const player2 = new Player("player2");

  // resetButton.addEventListener("click", resetGame());
  rollButton.addEventListener("click", function(event){
    event.preventDefault();
    if (playerOneTurn){
      playerOneTurn = player1.roll(playerOneTurn);
    } else {
      playerOneTurn = player2.roll(playerOneTurn);
    }
    console.log("player one turn " + playerOneTurn);
  });
  holdButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log ("clicked hold, p1 turn " + playerOneTurn);
    if (playerOneTurn){
      playerOneTurn = player1.hold(playerOneTurn);
    } else {
      playerOneTurn = player2.hold(playerOneTurn);
    }
  });
  
});

function playersRoll(playerOneTurn, player1, player2){
  if (playerOneTurn){
    player1.roll(playerOneTurn);
  } else {
    player2.roll(playerOneTurn);
  }
}

// playerOneTurn = player1.roll();

// game
// 	player1 = playerObject
// 	player2 = playerObject
// 	firstplayerturn = true;

// player
// 	player turn
// 		while player's turn
// 			while last roll !== 1
// 				roll 
// 					last roll = roll 
// 					roundscore += roll
// 				hold 
// 					gamescore += roundscore
// 					firstplayerturn = !thisplayerturn

// What happens when the user clicks play?
//   the game has 2 players 
//   player 1 goes first 
//   set all scores to 0 
//   update score dispays (all) //ui
//   if it's the player's turn 
//     the player can roll 
//       if they get a 1, 
//         they get 0 score 
//         the turn is passed
//           turn off this player's buttons //ui
//       otherwise 
//         it gets added to their turn score (the turn is not passed)
//         update turn score display //ui
//     the player can hold
//       their turn score is added to their game score
//       update game score display
//       if the player's score is over 100, 
//         they win
//           display win message //ui
//       otherwise
//         the turn is passed
//           turn off this player's buttons //ui


// What things do we want to track?
//   who's turn it is
//   turn score for each player
//   game score for each player
//   the roll each player makes

// What objects do we need? 
//   player

// What things from above do we put in which object?
//   player 
//     turn score
//     game score
//     roll 

// What functions do we need?
//   roll d6
//   pass the turn
//   hold 
  
// How will these be triggered through gameplay? //UI LOGIC TIME
//   roll = player button 
//   hold = player button 

// How will information be collected from the user? How will it be displayed?
