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
console.log("gems"+  gems);
var wins = 0;
var losses = 0;

// reset game 
var reset = function () {
currentValue = 0;
randomNumber = Math.floor(Math.random() * 120) + 19;
gems = Math.floor(Math.random() * 12) + 1;
// redGem = Math.floor(Math.random() * 12) + 1;
// blueGem = Math.floor(Math.random() * 12) + 1;
// greenGem = Math.floor(Math.random() * 12) + 1;
// pinkGem = Math.floor(Math.random() * 12) + 1;
$("#random-number").text(randomNumber);
}

//set text numbers
$('#random-number').text(randomNumber);
$('#wins').text(wins);
$('#losses').text(losses);


// run for loop to a value into each crystal


for (i = 0; i < gems.length; i++) {
  console.log(gems[i]);

  // var gemsOptions = $("img").html(gems[i]);
//look up how to do this with jQuery
 var gemsOptions_js = document.getElementsByTagName("img")[i];  
  var gemsOptions = $(gemsOptions_js);

  gemsOptions.addClass("gemStones");

  gemsOptions.attr("data-gems", gems[i]);
  gemsOptions.text(gems[i]);
  // console.log(gems[i]);
  // $("#crystals").append(gemsOptions);
};

// var gems = $('.crystals img');
// $(gems).text($(this).attr("data-letter"));

//on click add crystalValue to currentValue
$('.gemStones').on("click", function() {
  var crystalValue = ($(this).attr("data-gems"));
  $(crystalValue).text($(this).attr("data-gems"));
  console.log(crystalValue);
  crystalValue = parseInt(crystalValue);
  currentValue += crystalValue;
  $('#current-value').text(currentValue);
  // alert(crystalValue);


// if user score equals the random number the player wins and game resets
if (currentValue === randomNumber) {
  wins++;
  $("#wins").text(wins);
  reset();
// } else if (currentValue <= randomNumber) {
  //keep counting
} else if (currentValue >= randomNumber) {
  losses++;
  $("#losses").text(losses);
  reset();
}

});

// else keep counting
// if user guess is higher than random number player loses and game resets

});
