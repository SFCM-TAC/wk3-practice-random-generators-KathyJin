
// TODO: Use constructor notation to create an object
// with properties and methods that can be shared by both
// diceRollGenerator and eightBallGenerator.
function Generator(face1, face2, face3, face4, face5, face6) {
this.first = face1;
this.second = face2;
this.third = face3;
this.fourth = face4;
this.fifth = face5;
this.sixth = face6;

  // YOUR CODE HERE
}

// TODO: Initialise diceRollGenerator and eightBallGenerator
// using the constructor notation and the Generator object
// you just created
const diceRollGenerator = new Generator (1, 2, 3,4, 5, 6 );

const eightBallGenerator = new Generator ("It is certain", "Reply hazy try again", "Cannot predict now", "Don't count on it", "My reply is no", "As I see it, yes");

var outcome = function (world){
var keys = Object.keys(world)
return world[keys [keys.length = Math.random() << 0]];
}

function handleDiceRoll() {

  const resultElement = document.getElementById('diceResult');


  // TODO: call a method on diceRollGenerator to populate result with a random value
  const result = outcome (diceRollGenerator);
  resultElement.innerHTML = result;
}

function handleEightBallShake() {
  const resultElement = document.getElementById('eightBallResult');

  // TODO: call a method on eightBallGenerator to populate result with a random value
  const result = outcome (eightBallgenerator);
  resultElement.innerHTML = result;
}

document.addEventListener("DOMContentLoaded", function() {
  // this code block runs when the page finishes loading
  // and attaches listeners for button clicks
  // e.g. when the diceButton is clicked, it will run the handleDiceRoll function
  const diceButton = document.getElementById('diceButton');
  if (diceButton) {
    diceButton.addEventListener('click', handleDiceRoll);
  }

  const eightBallButton = document.getElementById('eightBallButton');
  if (eightBallButton) {
    eightBallButton.addEventListener('click', handleEightBallShake);
  }
});
