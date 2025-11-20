let cart = [];

// Fonction appelée depuis les boutons ☕ dans menu.html
function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    updateCartCount();
}

// Mise à jour du compteur sur le bouton flottant
function updateCartCount() {
    const countElement = document.getElementById("cart-count");
    countElement.innerText = cart.length;
}

// Action lorsqu'on clique sur le bouton flottant
document.getElementById("floating-cart-btn").addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Votre panier est vide.");
        return;
    }

    let message = "Bonjour, je souhaiterais commander :\n\n";

    cart.forEach(item => {
        message += `• ${item.name} - ${item.price}\n`;
    });

    message += "\nMerci !";

    const phone = "2250716699999";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.location.href = url;
});
