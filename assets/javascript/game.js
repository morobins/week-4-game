$('.document').ready(function () {

  // Name Variables for counter, user score, random number and crystal values
var randomNumber = Math.floor(Math.random() * 120) + 19;
console.log(randomNumber);
var currentValue = 0;
// var gems = Math.floor(Math.random() * 12) + 1;
var redGem = Math.floor(Math.random() * 12) + 1;
// console.log(redGem);
var blueGem = Math.floor(Math.random() * 12) + 1;
// console.log(blueGem);
var greenGem = Math.floor(Math.random() * 12) + 1;
// console.log(greenGem);
var pinkGem = Math.floor(Math.random() * 12) + 1;
// console.log(pinkGem);
var gems = [redGem, blueGem, greenGem, pinkGem];
console.log(gems);
var wins = 0
var loses = 0

// reset game 
var reset = function () {
currentValue = 0;
randomNumber = Math.floor(Math.random() * 120) + 19;
gems = Math.floor(Math.random() * 12) + 1;
// redGem = Math.floor(Math.random() * 12) + 1;
// blueGem = Math.floor(Math.random() * 12) + 1;
// greenGem = Math.floor(Math.random() * 12) + 1;
// pinkGem = Math.floor(Math.random() * 12) + 1;
}

//set text numbers
$('#random-number').text(randomNumber);
$('#wins').text(wins);
$('#loses').text(loses);


// run for loop to a value into each crystal
for (i = 0; i < gems.length; i++) {
  var gemsOptions = $("img").html(gems[i]);
  // gemsOptions.addClass("gemStones");
 
  gemsOptions.attr("data-gems", gems[i]);
  gemsOptions.text(gems[i]);
  // console.log(gems[i]);
  $("#crystals").append(gemsOptions);
};

// var gems = $('.crystals img');
// $(gems).text($(this).attr("data-letter"));

//on click add crystalValue to currentValue
$('#crystals').on("click", function() {
  var crystalValue = ($(this).attr("data-gems"));
  crystalValue = parseInt(crystalValue);
  currentValue += crystalValue;
  $('#current-value').text(currentValue);
  alert(crystalValue);
});

// if user score equals the random number the player wins and game resets
if (currentValue === randomNumber) {
  wins++
} else if (currentValue < randomNumber) {
  //keep counting
}

if (currentValue > randomNumber) {
  loses--;
}

// else keep counting
// if user guess is higher than random number player loses and game resets

});
