import { cart, addToCart } from "../data/cart.js";
import { product } from "../data/products.js";

let productsHTML = ``;
product.forEach((products) => {
    productsHTML += `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src=${products.image}>
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${products.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="images/ratings/rating-${products.ratings.star}.png">
                <div class="product-rating-count link-primary">
                ${products.ratings.rate}
                </div>
            </div>

            <div class="product-price">
                $${(products.price / 100).toFixed(2)}
            </div>
            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-name = "${products.name}">
                Add to Cart
            </button>
        </div>
    `
});
document.querySelector('.js-product').innerHTML = productsHTML;



function totalQty(){
    let totalQuantity = 0;
    cart.forEach((items) => {
        totalQuantity += items.quantity
    })
    document.querySelector(".js-cart-quantity")
        .innerHTML = totalQuantity;
}



document.querySelectorAll(".js-add-to-cart")
  .forEach((button) => {
    button.addEventListener('click', () => {
        const productName = button.dataset.productName
        addToCart(productName)
        totalQty()
    });
  });
  
  
