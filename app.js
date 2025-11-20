// PANIER STOCKÉ EN MÉMOIRE
let cart = [];

// AFFICHER LA BARRE PANIER
function updateCartBar() {
    const bar = document.getElementById("cart-bar");
    if (cart.length > 0) {
        bar.style.display = "block";
        bar.textContent = `🛍️ Voir mon panier (${getTotalItems()} articles)`;
    } else {
        bar.style.display = "none";
    }
}

// COMPTER LES ARTICLES
function getTotalItems() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// AJOUTER UN PRODUIT
function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    updateCartBar();
}

// OUVERTURE DU PANIER
function openCart() {
    let recap = "Voici votre commande CaféMisu :\n\n";

    cart.forEach(item => {
        recap += `• ${item.quantity} × ${item.name} — ${item.price * item.quantity} Fcfa\n`;
    });

    recap += `\nTOTAL : ${getTotalPrice()} Fcfa\n\nSouhaitez-vous envoyer cette commande sur WhatsApp ?`;

    if (confirm(recap)) {
        sendWhatsApp();
    }
}

// TOTAL DU PANIER
function getTotalPrice() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// ENVOI WHATSAPP
function sendWhatsApp() {
    let message = "Bonjour, je souhaite commander :\n\n";

    cart.forEach(item => {
        message += `• ${item.quantity} × ${item.name} — ${item.price * item.quantity} Fcfa\n`;
    });

    message += `\nTotal : ${getTotalPrice()} Fcfa\n`;

    const phone = "2250716699999";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.location.href = url;
}
