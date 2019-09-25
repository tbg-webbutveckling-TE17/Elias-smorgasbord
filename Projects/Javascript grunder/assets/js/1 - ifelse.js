// alert('Popup ruta');

var myName = "Elias"; // datatyp string
var myAge = "18"; // datatyp Number
var isEvil = false; // datatyp Boolean

// Single line content
/*
    Block content
*/

/**
 
    -------------------------
            If/else
    -------------------------

 */

if(myAge < 18) {
    //alert("You can not take a drivers licens.");
} else {
    //alert("Congratz! You are old enough to drive.");
};

if(myName == "Elias") {
    //alert("Welcome, " + myName);
} else {
    //alert("You are not welcome here!");
}

// == equals to, === equals to and same datatype
if(myAge == "18") {
    //alert("Välkommen");
} else {
    //alert("Icket välkommen");
}

var hasWatched = false; //add to watchlist

if(isEvil == true) {
    //alert("Du är ond");
} else {
    //alert("Du är god");
}

/* 

    *********************
        Guessing app
    *********************

*/


var secretNumber = 7;
var userInput = Number(prompt("Guess a number between 0 and 10"));

if(userInput === secretNumber) {
    document.writeln("Grattis du har gissat rätt! <br>");
    lololol = true;
} else if(userInput === 6 || userInput === 8 ) {
    document.writeln("Det bränns!");
} else {
    document.writeln("Gissa igen...");
}