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
    addItemToCart(title, itemPrice, imgSrc)
    updateCart();
}

function addItemToCart(title, itemPrice, imgSrc) {
    var cartRow = document.createElement("section");
    cartRow.classList.add("cart-row");
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert("Den här produkten är redan i din kundvagn");
            return;
        }
    }
    var cartRowContents =`
        <section class="cart-item cart-column">
            <img class="cart-item-image" src="${imgSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </section>
        <span class="cart-price cart-column">${itemPrice}</span>
        <section class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn-danger" type="button">REMOVE</button>
        </section>`
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", remove);
    cartRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", quantity);
}

function quantity(event) {
    var input = event.target;
}

function remove(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCart();
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