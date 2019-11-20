function twinkleTwinkle() {
    console.log("Blinka lilla stjärna");
    console.log("Hur jag undrar var du är");
}

twinkleTwinkle(); // Call a function

// Declare a function with two parameters
function multiply(num, num2) {
    console.log(num*num2);
}

// Call the function with two arguments
multiply(5,6);

function sayHello(theName) {
    console.log("Hello!, " + theName);
}

sayHello("Jens");

function getArea(width, height) {
    console.log("The area of: " + width + " and " + height + " is " + height * width)
}

getArea(5, 10);
getArea(7, 4);

function toSquare(x) {
    return x * x;
}

console.log("4 squared is: " + toSquare(4));
console.log("8 squared is: " + toSquare(8));

var result = toSquare(5);
console.log(result);

function quadrupleMe(x) {
    return 4 * x;
}
var myFavNumber = quadrupleMe(2);
console.log(myFavNumber);

function isEven(i) {
    if (i % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(4));

function kebabToSnake(str) {
    var mahKebab = str.replace(/-/g, "_");
    return mahKebab;
}
console.log(kebabToSnake("this - is -a - ---test"))

var showGlobalVar = 99; //Global variable
function globalScope() {
    showGlobalVar = 100
    console.log(showGlobalVar);
}
console.log(showGlobalVar);
globalScope();
console.log(showGlobalVar);

function hi() {
    var name = "Gustaph";
    console.log(name);
}
hi();
function bye() {
    console.log(name);
}
bye();


function sing() {
    console.log("Im singing in the rain");
    console.log("Just singing in the rain");
    console.log("What a glorious feeling!");
}
// Higher order function
setInterval(sing, 2000); // #1
clearInterval(1);
setInterval(sing, 2000); // #2
clearInterval(2);

var intervalExample = setInterval(sing, 2000);
clearInterval(intervalExample);

// Anonymous function
var anon = setInterval(function() {
    console.log("Im an anonymous function");
}, 1500);
clearInterval(anon);

function myTimer() {
    var d = new Date();
    var time = d.toLocaleTimeString();
    document.getElementById("timeOutput").innerHTML = time;
}
myTimer();
var myTime = setInterval(myTimer, 1000);

var stopBtn = document.getElementsByTagName('button')[0];
stopBtn.addEventListener('mouseenter', function() {
    clearInterval(myTime);
    alert('Time has stopped');
})

stopBtn.addEventListener('mouseleave', function() {
    myTime = setInterval(myTimer, 1000);
    alert('Time has resumed');
})

// Calcute tip

//function calculatedTip(total) {
    //var tipPercent = 0.15;
    //return total * tipPercent;


//var billTotal = prompt('Quanto Costa?');
//var billTip = calculatedTip(billTotal);
//var receipt = "Bill total: " + billTotal + "Tip: " + billTip;
//console.log(receipt);

var jobTitle = ['Doctor', 'Plumber', 'Chef'];
var randJob = jobTitle[~~(Math.random()*jobTitle.length)];
var geographicLocation = ['New york', 'Rome', 'Malå'];
var randGeo = geographicLocation[~~(Math.random()*geographicLocation.length)];
var partnerName = ['Emma', 'Doris', 'Rolf'];
var randPartner = partnerName[~~(Math.random()*partnerName.length)];
var numberOfChildren = [4, 2, 1];
var randNum = numberOfChildren[~~(Math.random()*numberOfChildren.length)];
var tellFortune = "You will be a " + randJob + " in " + randGeo + " and be married to " + randPartner + " with " + randNum + " children";
fortune.innerHTML = tellFortune;