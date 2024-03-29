var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

// turning html into objects//
var wins = 0;
var losses = 0;
var left = 9;
var guesses = 9;
var guessesSoFar = [];
var psychicLetter;

var answer = "j";

// listing the methods taken to choose the letter and inputs//
var newLetter = function() {
    psychicLetter = letters[Math.floor(Math.random() * letters.length)];
};

var soFar = function() {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guessesSoFar.join(",");
};

var guessesLeft = function() {
    document.getElementById("left").innerHTML = "Guesses Left: " + left;
};

var newGame = function() {
	guessedLetters = [];
    left = 9;
    newLetter();
    guessesLeft();
    soFar();
}

//functions created to return answers//
document.onkeyup = function(event) {
	var userGuess = event.key;
    left--;
    guessesSoFar.push(userGuess);
    soFar();
    guessesLeft();
    if (left > 0) {
        if (answer == userGuess){
            alert("You have chosen the correct letter!")
        }
        if (userGuess == psychicLetter) {
        	wins++;
        	document.getElementById("wins").innerHTML = "Wins:" + wins;
            newGame();
        }
    } 
    else if (left == 0) {
    	losses++;
    	document.getElementById("losses").innerHTML = "Losses:" + losses;
        newGame();
    }
};