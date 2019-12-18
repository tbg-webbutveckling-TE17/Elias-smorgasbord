var guesses = 10;
var word = ["G", "O", "A", "T"];
var hiddenWord = ["_", "_", "_", "_"];

document.addEventListener("keypress", function(e) {
    var guess = e.key
    console.log(guess)

    document.getElementsByClassName("show").innerHTML += guess;
})