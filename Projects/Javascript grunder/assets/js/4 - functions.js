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

var jobArray = ['Doctor', 'Plumber', 'Chef'];
var locArray = ['New york', 'Rome', 'Malå'];
var partnerArray = ['Emma', 'Doris', 'Rolf'];
var childrenArray = [4, 2, 0]

function tellFortune(jobArray, locArray, partnerArray, childrenArray) {
    var randJob = jobArray[Math.floor(Math.random() * jobArray.length)];
    var randLoc = locArray[Math.floor(Math.random() * locArray.length)];
    var randPartner = partnerArray[Math.floor(Math.random() * partnerArray.length)];
    var randChild = childrenArray[Math.floor(Math.random() * childrenArray.length)];
    var displayFuture = document.getElementsByClassName("fortune") [0];
    var tellFuture = "You will be a " + randJob + " in " + randLoc + " and be married to " + randPartner + " with " +  randChild + " children";
    displayFuture.innerHTML = tellFuture;
}

tellFortune(jobArray, locArray, partnerArray, childrenArray)

var refreshFortune = document.getElementsByClassName("button1") [0];
refreshFortune.addEventListener("click", function() {
   tellFortune(jobArray, locArray, partnerArray, childrenArray)
})

var dogAge = prompt("How old is your dog in human years?")
function calculateDogYears(dogAge) {
   var displayDogYears = document.getElementsByClassName("doggo") [0];
   var dogYears = dogAge * 7;
   var showDogYears = "Your dog is " + dogYears + " in dog years"
   
   displayDogYears.innerHTML = showDogYears; 
}

calculateDogYears(dogAge)

var yourAge = prompt("How old are you?")
var snackAmount = prompt("How much of your snacks do you want per day?")
function calculateSupply (yourAge, snackAmount) {
    var displaySnackPerDay = document.getElementsByClassName("snack") [0];
    var supplyDate = (100 - yourAge) * 365;
    var supplyAmount = supplyDate * snackAmount;
    var showSupply = "You will need " + supplyAmount + " to last you until the ripe old age of 100"

    displaySnackPerDay.innerHTML = showSupply;
}

calculateSupply(yourAge,snackAmount)