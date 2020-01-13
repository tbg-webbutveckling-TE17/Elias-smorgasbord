var friend1 = 'Måns';
var friend2 = 'Sten';
var friend3 = 'Claerence';
var friend4 = 'Mona';

//array in global scope
var friends = ["Måns", "Sten", "Claerence", "Mona"];
var printToScreen = document.getElementById("testArray");
printToScreen.innerHTML = friends[2];

function newName() {
    friends[1] = "Patrik";
}

//create an array in different ways
var colors = []; //standard
var colors = new Array(); //not that common
var randomArray = ["Yo", 20, false, true, {}];
printToScreen.innerHTML = randomArray.length;

//array built-in methods
colors = ["red", "green", "blue"];

//describe the result string of an array
printToScreen.innerHTML = colors.join(' <br /> ');

//pop() - remove an item at the end of an array
colors.pop();
