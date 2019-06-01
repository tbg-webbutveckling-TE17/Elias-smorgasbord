window.onscroll = function() {myFunction()};

var nav = document.getElementById("leftbar");
var navs = document.getElementById("rightbar");
var navss = document.getElementById("mainbar")

var leftsticky = nav.offsetTop;
var rightsticky = navs.offsetTop;
var mainsticky = navss.offsetTop;

function myFunction() {
	if (window.pageYOffset > 580) {
		nav.classList.add("leftsticky");
		navs.classList.add("rightsticky");
		navss.classList.add("mainsticky");
  } 
	else {
		nav.classList.remove("leftsticky");
		navs.classList.remove("rightsticky");
		navss.classList.remove("mainsticky");
  }
}