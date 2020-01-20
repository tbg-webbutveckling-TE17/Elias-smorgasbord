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
printToScreen.innerHTML = colors.join(' <br /> ');

// push() - add an item at the end of an array
colors.push("purple");
printToScreen.innerHTML = colors.join(' <br /> ');

// unshift() - add an item at the beginning of an array
colors.unshift("yellow");
printToScreen.innerHTML = colors.join(' <br /> ');

// shift() - remove an item at the beginning of an array
colors.shift();
printToScreen.innerHTML = colors.join(' <br /> ');

// slice() - copy parts of an array
var colorGreen = colors.slice(1,2);
printToScreen.innerHTML = colorGreen.join(' ');

var colorsCopy = colors.slice(colors);
printToScreen.innerHTML = colorsCopy.join(' ');

// indexOf - find the index of an item in the array
printToScreen.innerHTML = colors.indexOf("green");
printToScreen.innerHTML = colors.indexOf("yellow");



var numbers = [ 2, 4, 30, 31 ];
printToScreen.innerHTML = numbers[numbers.length];

var cars = [ 'Audi', 'Volvo', 'Ford', 'Ferarri', 'Landa', 'Lada', 'Citroën' ];
for(var i = 0; i< cars.length; i++) {
    printToScreen.innerHTML += cars[i] * '<br />';
}
printToScreen.innerHTML = cars.reverse;

var countries = ["Sweden", "Norway", "Finland", "Denmark", "Island"];
countries.forEach(function(country) {
    printToScreen.innerHTML += country + " ";
})

printToScreen.innerHTML = "";
var planets = ["Mercury", "Venus", "Earth", "Mars"];
planets.forEach(function(planet) {
    printToScreen.innerHTML = planet + " - ";
});

printToScreen.innerHTML = "";
var number = [ 1, 32, 44, 112, 3, 5 ];
var color = [ "red", "green", "blue", "yellow" ];

number.forEach(function(color) {
    if(color % 3 === 0) {
        printToScreen.innerHTML += color;
    }
});
// samma funktion som ovan
for(var i = 0; i < number.length; i++) {
    var num = i + 1;
    if(number[i] % 3 === 0) {
        printToScreen.innerHTML = number[i] + " ";
    }
}

var numList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

function printReverse(numList) {
    var newNumList = [];
    for(var i = numlist.length - 1; i >= 0; i--) {
        newNumList.push(numList[i]);
    }
    return newNumList;
}