//For använder man när man vet hur många gånger loopen ska köra

//initiering; villkor; inkrementering
//for(var i = 0; i < 6; i++) {
    // kör koden för varje iteration
    //console.log(i);


//var str = "Hello World!";
//for(var i = 0; i < str.length - 1; i++) {
    //console.log(str[i]);


//var myArr = [ "HTML", "CSS", "JS", 42, true ];
//var len = myArr.length;
//for (var i = 0; i < len; i++) {
    //console.log(myArr[i]);

for(var i = -10; i <= 19; i++) {
    console.log(i);
}

for(var i = 10; i <= 40; i+= 2) {
    console.log(i);
}

for(var i = 300; i <= 333; i++) {
    if(i % 2 !== 0) {
        console.log(i);
    }
}

for(var i = 5; i <=50; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}

var rows = 5;
var cols = 5;

for(var i = 0; i < rows; i++) {
    for(var ii = 0; ii < cols; ii++) {
        document.writeln('*');
    }
    document.writeln("<br/>");
}

for(var i = 1; i < 11; i++) {
    for(var ii = 1; ii < 11; ii++) {
        var result = i * ii;
        document.writeln(i + "*" + ii + "=" + result);
    }
    document.writeln("<br/>")
    document.writeln("<br/>")
}

var choices =[ 'Borgar', 'Pizza', 'Grillat', 'Tacos' ];

for(var i = 0; i < choices.length; i++) {
    document.writeln('My #' + (i + 1) + ' choice is ' + choices[i]);
    document.writeln("<br/>");
}

for(var i = 10; i > 0; i--) {
    document.writeln("* ".repeat(i));
    document.writeln("<br/>");
}
for(var i = 0; i < 10; i++) {
    document.writeln("* ".repeat(i));
    document.writeln("<br/>");
}