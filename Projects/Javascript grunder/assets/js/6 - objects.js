var output = document.querySelector("body > p");
var person = [ "Sid", 31, "EagleShieldBay" ];

output.innerHTML = person[2];

var persona = {
    name: "Sid", //key/value pair
    age: 41, 
    hometown: "Heresneezedduck"
};

persona.hometown = "Buy a Harbour";

output.innerHTML = person.name + " lives in " + persona.hometown;

var oddNums = {};
oddNums.number = 1;
oddNums.str = "one";
oddNums.isOdd = true;

output.innerHTML = oddNums.number;

var dog = {
    name: "Doggo",
    breed: "Golden",
    age: 3,
    isFriendly: true
};

var cat = new Object();
cat.name = "Smilla",
cat.age = 3;
output.innerHTML = cat.name;

var junkObject = {
    name: "junk",
    age: 33,
    color: "Space Gray",
    isEvil: false,
    friends: [ "Daruk", "Revali", "Urbosa"],
    pet: {
        name: "Challe",
        species: "Pig",
        age: 9
    }
};

output.innerHTML = junkObject.friends[1];
output.innerHTML = junkObject.pet.species;

var posts = [
    {
        author: "Jk",
        title: "Hary Potr",
        comments: ["Worst book series ever written, absolute trash, i want a refund", "Gay", "Movies were better"]
    },
    {
        author: "Jrrrr Tolki",
        title: "Hobbit feet the movie",
        comments: "10/10 - IGN"
    },
];

output.innerHTML = "Author: " + posts[0].author + "<br/> Comments: " + posts[0].comments[0];

posts.forEach(function(post) {
    output.innerHTML += "Author: " + post.author + "<br/>Title: " + post.title + "<br/>Comments: " + post.comments + "<br/>";
});