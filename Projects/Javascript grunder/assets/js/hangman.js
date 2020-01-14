var guesses = 10;
var wins = 0;
var losses = 0;
var word = ["G", "O", "A", "T"];
var hiddenWord = ["_", "_", "_", "_"];
var newHiddenWord = ["_", "_", "_", "_"];
var displayHiddenWord = document.getElementsByTagName("h3") [0]

var showGuesses = document.getElementsByClassName("guesses") [0];
var showWins = document.getElementsByClassName("wins") [0];
var showLosses = document.getElementsByClassName("losses") [0];
displayHiddenWord.innerHTML = hiddenWord;

showGuesses.innerHTML = "You have " + guesses + " left";
showWins.innerHTML = "You have " + wins + " wins";
showLosses.innerHTML = "You have " + losses + " losses";

document.addEventListener("keypress", function(e) {
    var guess = e.key;
    document.getElementsByClassName("show").innerHTML = hiddenWord;
    for (var i = 0, i <= word.length; i++) {
        if (guess == word[i]) {
            hiddenWord[i] == guess;
            displayHiddenWord.innerHTML = hiddenWord;
        }
    }
    if (hiddenWord == word) {
        
    }
    if (guesses == 0) {
        losses++;
        showLosses.innerHTML = "You have " + losses + " losses";
        guesses = 10;
        hiddenWord = newHiddenWord;
        showGuesses.innerHTML = "You have " + guesses + " guesses left"
    } else {
        guesses--;
        showGuesses.innerHTML = "You have " + guesses + " guesses left"
    }
})