# pig dice

- **What will happen when a user clicks "Play"?**
    - 1st roll?
- **What objects will you need?**
    - player, game?
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

Describe: Player()

Test: "Should create constructor object for player score"
Code:
PlayerScore(score) {
  this.score = 0
}
Expected Output: after defining new PlayerScore object, will house numbers entered (0)

Test: "Should create constructor function for Player object type. With name, current score 0"
Code:
let player1 = new Player('Sam', 0)
Expected output: Player {name: 'Sam', score: '0'}