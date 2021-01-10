//defining the values of the dicee

var randomnumber1 = Math.floor((Math.random(0,1)*6+1));
var randomnumber2 = Math.floor((Math.random(0,1)*6+1));

// defining random dice images

var randomDiceImage1 = "images/dice" + randomnumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomnumber2 + ".png";

// gibing random dice image to html

document.querySelector(".img1").setAttribute("src", randomDiceImage1);
document.querySelector(".img2").setAttribute("src", randomDiceImage2);


// win lose decider for h1 tag if else statement
if (randomnumber1>randomnumber2) {
  document.querySelector(".mainTitle").textContent="⛳Player 1 Wins!";
}
if (randomnumber2>randomnumber1) {
  document.querySelector(".mainTitle").textContent="Player 2 Wins!⛳";
}
if (randomnumber1===randomnumber2) {
  document.querySelector(".mainTitle").textContent="🤣Draw!🤣";
}
