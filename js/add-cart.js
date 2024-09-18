addItems()
cartItemsFetch()
function addToCart(elementId){
    addToCartItems.push(items[elementId])
    cartItemsFetch()
}
function deleteItem(elementId){
    addToCartItems.splice(elementId,1);
    cartItemsFetch()
}


function addToCart(elementId) {
  const itemToAdd = items[elementId];

  // Check if the item is already in the cart
  const isAlreadyInCart = addToCartItems.some((item) => item.image === itemToAdd.image);

  if (!isAlreadyInCart) {
    addToCartItems.push(itemToAdd);
    cartItemsFetch();
  } else {
    alert("This item is already in your cart.");
  }
}

       // Function to load cart items from local storage
        function loadCartFromLocalStorage() {
            const cartData = localStorage.getItem('cartItems');
            if (cartData) {
                addToCartItems = JSON.parse(cartData);
                cartItemsFetch(); // Update the cart display
            }
        }

        // Function to save cart items to local storage
        function saveCartToLocalStorage() {
            localStorage.setItem('cartItems', JSON.stringify(addToCartItems));
        }

        
        loadCartFromLocalStorage(); // Load cart items from local storage

        function addToCart(elementId) {
            const itemToAdd = items[elementId];
            
            // Check if the item is already in the cart
            const isAlreadyInCart = addToCartItems.some((item) => item.image === itemToAdd.image);

            if (!isAlreadyInCart) {
                addToCartItems.push(itemToAdd);
                cartItemsFetch();
                saveCartToLocalStorage(); // Save updated cart data to local storage
            } else {
                alert("This item is already in your cart.");
            }
        }

        function deleteItem(elementId) {
            addToCartItems.splice(elementId, 1);
            cartItemsFetch();
            saveCartToLocalStorage(); // Save updated cart data to local storage
        }

        function updateQuantity(index, newQuantity) {
            if (newQuantity >= 1) {
                addToCartItems[index].quantity = parseInt(newQuantity);
                cartItemsFetch();
                saveCartToLocalStorage(); // Save updated cart data to local storage
            }
        }

        function cartItemsFetch(){
            if(addToCartItems.length == 0){
                document.querySelector(".mainContainer .addToCartContainer .addedItems").innerHTML = `
                    <div class="card shadow-3">
                        <div class="alert alert-danger w-100 text-center m-0">Your cart is empty!!!</div>
                    </div>
                `
                document.querySelector(".mainContainer .addToCartContainer .toggler .cartCount").innerHTML = 0
                document.querySelector(".mainContainer .addToCartContainer .totalContainer span").innerHTML = 0
                document.querySelector(".mainContainer .addToCartContainer .totalContainer").style.display = "none"
            } else {
                let total = 0
                document.querySelector(".mainContainer .addToCartContainer .toggler .cartCount").innerHTML = addToCartItems.length
                document.querySelector(".mainContainer .addToCartContainer .addedItems").innerHTML = ""
                for(var i=0; i<addToCartItems.length; i++){
                    document.querySelector(".mainContainer .addToCartContainer .addedItems").innerHTML += `
                    <div class="card shadow cardItem${i}">
                    <div class="cardImage">
                    <img src="${addToCartItems[i].image}" alt="${addToCartItems[i].name}">
                    </div>
                    <div class="cardContent">
                    <h3>${addToCartItems[i].name}</h3>
                    <div class="group">
                    <p><span>${addToCartItems[i].price}</span>/-</p>
                    <button class="btn btn-danger" type="button" onclick="deleteItem('${i}')"><i class="fas fa-trash"></i></button>
                    </div>
                        </div>
                    </div>

                    `
                    total += parseFloat(addToCartItems[i].price.replace('$', '').trim());

                }
                
                document.querySelector(".mainContainer .addToCartContainer .totalContainer span").innerHTML = total
                document.querySelector(".mainContainer .addToCartContainer .totalContainer").style.display = ""
            }
        }
           
        function cartToggler(){
            document.querySelector(".mainContainer .addToCartContainer").classList.toggle("active")
            if(document.querySelector(".mainContainer .addToCartContainer").classList.contains("active")){
                document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.add("fa-times")
                document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.remove("fa-cart-plus")
            } else {
                document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.remove("fa-times")
                document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.add("fa-cart-plus")
            }
        }  
