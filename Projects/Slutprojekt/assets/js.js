window.onscroll = function() {myFunction()};

var nav = document.getElementById("mybar");

var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset > 500) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}