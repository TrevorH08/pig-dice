function PlayerScore(player1, player2) {
  this.player1 = player1
  this.player2 = player2
}

function roll() {
  return Math.floor(Math.random() * 6) + 1;
}