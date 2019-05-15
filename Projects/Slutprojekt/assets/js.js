window.onscroll = function() {myFunction()};

var nav = document.getElementById("leftbar");

var leftsticky = nav.offsetTop;

function myFunction() {
	if (window.pageYOffset > 550) {
		nav.classList.add("leftsticky");
  } 
	else {
		nav.classList.remove("leftsticky");
  }
}

window.onscroll =function() {myFunction()}

var navs = document.getElementById("rightbar");

var rightsticky = navs.offsetTop;

function myfunction() {
	if (window.pageYOffset > 550) {
		navs.classList.add("rightsticky");
	}
	else {
		navs.classList.remove("rightsticky");
	}
}