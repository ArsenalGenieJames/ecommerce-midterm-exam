
const productsJson = [  
    {"id": 1, "name": "Iphone 14 Pro Max", "price": 1500, "stock": 5, "image": "https://d3chjy2wsvtsxc.cloudfront.net/1.d/preview/c/e/ceebe81a_b2b786a3_14ProMax-DeepPurple.png"},  
    {"id": 2, "name": "Vivo Y18 Pro Max", "price": 100, "stock": 10, "image": "https://shop.vivoglobal.ph/cdn/shop/files/Y18-Wave-Aqua.jpg?v=1716361803&width=600"},  
    {"id": 3, "name": "Realme X50 Pro", "price": 50, "stock": 28, "image": "https://i.ebayimg.com/images/g/2IsAAOSwsQ5e-1ed/s-l400.jpg"}  
];  

let cartCount = 0;  
let total = 0;  
let cartItems = [];  


function addToCart(productName, price) {  
    cartCount++;  
    total += price;  
    cartItems.push({ name: productName, price: price });  
    updateCartDisplay();  
    showNotification(`Added to cart: ${productName} for $${price.toFixed(2)}`);  
}  

 
function updateCartDisplay() {  
    document.getElementById("cartCount").innerText = `Cart: ${cartCount} items`;  
    document.getElementById("checkoutTotal").innerText = `Total: $${total.toFixed(2)}`;  
    document.getElementById("checkoutButton").disabled = (cartCount === 0);  
    displayCartItems();  
}  


function displayCartItems() {  
    const cartItemsDiv = document.getElementById("cartItems");  
    cartItemsDiv.innerHTML = '';  
    cartItems.forEach(item => {  
        const itemDiv = document.createElement("div");  
        itemDiv.innerText = `${item.name}: $${item.price.toFixed(2)}`;  
        cartItemsDiv.appendChild(itemDiv);  
    });  
}  


function showNotification(message) {  
    const notificationElement = document.getElementById("notificationMessage");  
    notificationElement.innerText = message;  
    const notificationModal = new bootstrap.Modal(document.getElementById('notificationModal'));  
    notificationModal.show();  
}  


function checkout() {  
    alert(`Proceeding to checkout with ${cartCount} items for a total of $${total.toFixed(2)}`);  
    cartCount = 0;  
    total = 0;  
    cartItems = [];  
    updateCartDisplay();  
}  


function displayProducts() {  
    const productsDiv = document.getElementById("products");  
    productsJson.forEach(product => {  
        const productDiv = document.createElement("div");  
        productDiv.innerHTML = `  
            <img src="${product.image}" alt="${product.name}" style="width: 100px; height: auto;">  
            <h3>${product.name}</h3>  
            <p>Price: $${product.price.toFixed(2)}</p>  
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>  
        `;  
        productsDiv.appendChild(productDiv);  
    });  
}  


window.onload = displayProducts;
