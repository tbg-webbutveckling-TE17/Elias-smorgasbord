var collapse = document.getElementsByClassName("button");
var i;

for (i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

function ready() {

}

function addToCartClick() {
    var title = part.getElementsByClassName(h2)[0];
    var itemPrice = part.getElementsByClassName("price")[0];
    var imgSrc = part.getElementsByClassName(img)[0];
}

function addItemToCart(title, itemPrice, imgSrc) {

}

function quantity() {

}

function remove() {

}

function purchase() {
    alert("Tack för ditt köp");
    var cartItems = document.getElementsByClassName(cart-item)[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCart();
}

function updateCart() {

}