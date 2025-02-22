document.addEventListener("DOMContentLoaded", function () {
    const cartButtons = document.querySelectorAll(".cart-btn");

    cartButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            // Get product details
            const productName = this.getAttribute("data-name");
            const productPrice = this.getAttribute("data-price");

            // Retrieve existing cart or initialize new one
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Check if the item is already in the cart
            let existingItem = cart.find(item => item.name === productName);
            if (existingItem) {
                existingItem.quantity += 1; // Increase quantity
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }

            // Save updated cart to local storage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Redirect to cart page
            window.location.href = "addtocart.html";
        });
    });
});