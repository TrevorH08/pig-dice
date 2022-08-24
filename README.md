# pig dice

- **What will happen when a user clicks "Play"?**
    - 1st roll?
- **What objects will you need?**
    - player 1, player 2
- **What key-value pairs will each object need to contain in order for the game to work?**
    - Player name
    - current score
    - is it their turn
    - have they won
- **What functions?**
    - dice roll random number (1-7 actually)
        - check score
        - branching statement "if roll === 1 , switch turn
          - else add player roll to score
        - determine win/loss conditions
    - keep track of the score
    - switch turns/enable dice roll for each player
- **How will these be triggered throughout the gameplay?**
    - dice roll button
    - switch turns
        - if player rolls 1 or clicks hold, hides roll/hold buttons until their turn again.
- **How will information be collected from the user? How will it be displayed?**
    - dice roll button
    - hold/switch turn button


Describe: roll();

Test: "Should roll random number between 1 - 6 
Code:
 function roll() {
  return Math.floor(Math.random() * 6) + 1;
}
Expected Output: Random Number between 1 - 6

Describe: PlayerScore()

Test: "Should create constructor object for player score"
Code:
PlayerScore(player1, player2) {
  this.player1 = player1
  this.player2 = player2
}
Expected Output: after defining new PlayerScore object, will house numbers entered (0)