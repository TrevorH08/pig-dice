// Business Logic ----------

function Player(nameOfPlayer) {
  this.name = nameOfPlayer;
  this.roll = 0;
  this.totalScore = 0;
  this.turnScore = 0;
}

Player.prototype.one = function() {
  if (this.roll === 1) { 
  this.turnScore = 0;
} else {
  this.turnScore += this.roll;
}}

Player.prototype.hold = function () {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
}

function roll() {
  return Math.floor(Math.random() * 6) + 1;
}


// UI Logic ----------

function handleFormSubmission(event) {
  event.preventDefault();
  player1.score += roll();
  player2.score += roll();
  let player1 = new Player(0);
  let player2 = new Player(0);
}

window.addEventListener("load", function (){
});
