$('.document').ready(function () {

  // Name Variables for counter, user score, random number and crystal values
var randomNumber = Math.floor(Math.random() * 120) + 19;
console.log(randomNumber);
var currentValue = 0;
var redGem = Math.floor(Math.random() * 12) + 1;
console.log(redGem);
var blueGem = Math.floor(Math.random() * 12) + 1;
console.log(blueGem);
var diamond = Math.floor(Math.random() * 12) + 1;
console.log(diamond);
var pinkGem = Math.floor(Math.random() * 12) + 1;
console.log(pinkGem);
var wins = 0
var loses = 0

// reset game 
var reset = function () {
currentValue = 0;
randomNumber = Math.floor(Math.random() * 120) + 19;
redGem = Math.floor(Math.random() * 12) + 1;
blueGem = Math.floor(Math.random() * 12) + 1;
diamond = Math.floor(Math.random() * 12) + 1;
pinkGem = Math.floor(Math.random() * 12) + 1;
}

//set random number
$('#random-number').text(randomNumber);

//on click add value to currentValue
// var crystalValue = ($(this).attr("data-crystalvalue"));
$('.crystals').on("click", function() {
// var currentValue + blueGem
});

$('#diamond').on('click', )
$('#pink-gem').on('click', )
$('#red-gem').on('click', )
// if user score equals the random number the player wins and game resets
if (currentValue === randomNumber) {
  wins++
} else if (currentValue < randomNumber) {
  //keep counting
};

// if (currentValue > randomNumber) {
//   loses==
// };

// else keep counting
// if user guess is higher than random number player loses and game resets

});
