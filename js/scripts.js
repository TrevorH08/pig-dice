// Business Logic ----------

function PlayerScore(score) {
  this.score = 0;
}

function roll() {
  return Math.floor(Math.random() * 6) + 1;
}

// UI Logic ----------

function handleFormSubmission(event) {
  event.preventDefault();
  player1.score += roll();
  player2.score += roll();
  let player1 = new PlayerScore(0);
  let player2 = new PlayerScore(0);
}

window.addEventListener("load", function (){
}
