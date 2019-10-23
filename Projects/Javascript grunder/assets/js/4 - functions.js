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