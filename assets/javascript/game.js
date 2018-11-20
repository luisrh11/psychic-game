var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]

var wins = 0;
var loses = 0;
var guesses = 10;

var winsText = document.getElementById("wins");
var losesText = document.getElementById("loses");
var guessesLeftText = document.getElementById("guessesLeft");
var userText = document.getElementById("user-text1");
var guessesarr = document.getElementById("user-text")
var guessesarr = [];
var userGuess;


document.onkeyup = function(event) {
    userGuess = event.key;
    guessesarr.push(userGuess);
    userText.textContent = guessesarr;


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

if((userGuess === "q") || (userGuess === "w") || (userGuess === "e") ||(userGuess === "r") || (userGuess === "t") || (userGuess === "y") || (userGuess === "u") || (userGuess==="i") || (userGuess==="o") || (userGuess==="p")  || (userGuess==="a") || (userGuess==="s") || (userGuess==="d") || (userGuess==="f") || (userGuess==="g") ||(userGuess==="h") || (userGuess==="j") || (userGuess==="k") || (userGuess==="l") || (userGuess==="z") || (userGuess==="x") || (userGuess==="c") || (userGuess==="v") || (userGuess==="b") || (userGuess==="n") || (userGuess==="m")){

  if(userGuess === computerGuess){
    wins++;
    reset();
  }

  else if(userGuess !== computerGuess){
    guesses = guesses -1;
  }

  else{
    loses++;
  }

  if(guesses === 0){
    loses++;
    reset();
  }

  winsText.textContent = wins;
  losesText.textContent = loses;
  guessesLeftText.textContent = guesses;
  }
};

function reset(){
guessesarr = [];
guesses = 10;
}
