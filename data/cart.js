export let cart =  JSON.parse(localStorage.getItem('cart'));

function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(productName){
    let matched;
        cart.forEach((item)=>{
            if (productName === item.productName){
                matched = item
            }
        })
        if (matched){
            matched.quantity += 1
        }else{
            cart.push({
                productName: productName,
                quantity: 1
            })
        }
        saveToStorage();
}

export function removeProduct(productId){
    cart.forEach((cartItems) => {
        if (cartItems.id !== productId){
            cart.pop(cartItems);
        }
    })
    console.log(cart)
    saveToStorage()
    
}