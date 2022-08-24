// Business Logic ----------

function PlayerScore(score) {
  this.score = score
}

function roll() {
  return Math.floor(Math.random() * 6) + 1;
}

// UI Logic ----------

function handleFormSubmission(event) {
  event.preventDefault();
  let player1Score = 0;
  let player2Score = 0;
  player1Score += roll();
  player2Score += roll();
  let player1 = new PlayerScore(player1Score);
  let player2 = new PlayerScore(player2Score);
}

window.addEventListener("load", function (){
}