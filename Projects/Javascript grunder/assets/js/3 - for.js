//For använder man när man vet hur många gånger loopen ska köra

//initiering; villkor; inkrementering
for(var i = 0; i < 6; i++) {
    // kör koden för varje iteration
    console.log(i);
}

var str = "Hello World!";
for(var i = 0; i < str.length - 1; i++) {
    console.log(str[i]);
}

var myArr = [ "HTML", "CSS", "JS", 42, true ];
var len = myArr.length;
for (var i = 0; i < len; i++) {
    console.log(myArr[i]);
}