let obj = [
    {
    pname:"Oro Floro Studs",
    pprice:65000,
    pimg:" img/oroflorearring1.webp",
    pimg1:" img/oroflorearring2.webp",
    pdesc:"These pieces feature intricate craftsmanship, using traditional designs and precious materials. They are treasured not just for their beauty, but for the stories and legacy they carry.",
   }
   ,
   {
    pname:"Talia Ring",
    pprice:45000,
    pimg:"img/taliaring2.webp",
    pimg1:"img/taliaring1.webp",
    pdesc:"These pieces feature intricate craftsmanship, using traditional designs and precious materials. They are treasured not just for their beauty, but for the stories and legacy they carry.",
   }
   ,
   {
    pname:"Reva Necklace",
    pprice:20000,
    
    pimg:"img/reva1.webp",
    pimg1:"img/reva2.webp",
    pdesc:"These pieces feature intricate craftsmanship, using traditional designs and precious materials. They are treasured not just for their beauty, but for the stories and legacy they carry.",
   }
   ,
   {
     pname:"Amyra Bracelet",
     pprice:10000,
     pimg:"img/amyra1.webp",
     pimg1:"img/amyra2.webp",
     pdesc:"These pieces feature intricate craftsmanship, using traditional designs and precious materials. They are treasured not just for their beauty, but for the stories and legacy they carry.",
    
    }
 ]
 
 
 let heritage = [
    {
    pname:"Cora Ring",
    pprice:1000000,
    pimg:"img/valerie1.webp",
    pimg1:"img/valerie2.webp",
    pdesc:"Heritage jewelry embodies history and cultural significance, often passed down through generations. These pieces feature intricate craftsmanship, using traditional designs and precious materials.",
   
}
   ,
   {
    pname:"Oro Hueco Necklace",
    pprice:450000,
    pimg:"img/orohueconeclace2.webp",
    pimg1:"img/orohueconeclace1.webp",
    pdesc:"Heritage jewelry embodies history and cultural significance, often passed down through generations. These pieces feature intricate craftsmanship, using traditional designs and precious materials.",
   
}
   ,
   {
    pname:"Turquesa Bracelet",
    pprice:850000,
    pimg:"img/turquesa1.webp",
    pimg1:"img/turquesa2.webp",
    pdesc:"Heritage jewelry embodies history and cultural significance, often passed down through generations. These pieces feature intricate craftsmanship, using traditional designs and precious materials.",
}
   ,
   {
     pname:"Naira Earrings",
     pprice:1000000,
     pimg:"img/Dnairaearrings2.webp",
     pimg1:"img/Dnairaearrings1.webp",
     pdesc:"Heritage jewelry embodies history and cultural significance, often passed down through generations. These pieces feature intricate craftsmanship, using traditional designs and precious materials.",
    }
 ]

 let Classics = [
    {
    pname:"Naira Bracelet",
    pprice:10000,
    pimg:"img/nairabracelet2.webp",
    pimg1:"img/nairabracelet1.webp",
    pdesc:"These pieces feature intricate craftsmanship, using traditional designs and precious materials. They are treasured not just for their beauty, but for the stories and legacy they carry.",
    
    
   }
   ,
   {
    pname:"La Classico Necklace",
    pprice:1000000,
    pimg:"img/laclassiconeclace1.webp",
    pimg1:"img/laclassiconeclace2.webp",
    pdesc:"These pieces feature intricate craftsmanship, using traditional designs and precious materials. They are treasured not just for their beauty, but for the stories and legacy they carry.",
    
    
   }
   ,
   {
    pname:"Naive Earrings",
    pprice:1000000,
    pimg:"img/denaiveearring2.webp",
    pimg1:"img/denaiveearring1.webp",
    pdesc:"These pieces feature intricate craftsmanship, using traditional designs and precious materials. They are treasured not just for their beauty, but for the stories and legacy they carry.",
    
   }
   ,
   {
     pname:"Madona Ring",
     pprice:1000000,
     pimg:"img/madona1.webp",
     pimg1:"img/madona2.webp",
     pdesc:"These pieces feature intricate craftsmanship, using traditional designs and precious materials. They are treasured not just for their beauty, but for the stories and legacy they carry.",
    
    
    }
 ]

 let div = document.getElementById('cards');
 
 for(var a in obj)
 {
   div.innerHTML+=
   `
  
             <div class="pro">
                    <img class="img-1" src="${obj[a].pimg}" alt="">
                    <img class="img-2" src="${obj[a].pimg1}" alt="">
                    <ul class="product-links">
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="addcart.html"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <div class="des">
                        <h6>${obj[a].pname}</h6>
                        <span>PKR ${obj[a].pprice}</span>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <a href="limitededdition.html?id=${a}"><button  class="slide-button" class="btn btn-outline-dark ">Quick View</button></a>
                    </div>
                </div>
      
   `
 }
 
 let divv = document.getElementById('heritage');
 
 for(var b in heritage)
 {
   divv.innerHTML+=
   `
  
             <div class="pro">
                    <img class="img-1" src="${heritage[b].pimg}" alt="">
                    <img class="img-2" src="${heritage[b].pimg1}" alt="">
                    <ul class="product-links">
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="addcart.html"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <div class="des">
                        <h6>${heritage[b].pname}</h6>
                        <span>PKR ${heritage[b].pprice}</span>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <a href="heritage.html?id=${b}"><button class="slide-button" class="btn btn-outline-dark ">Quick View</button></a>
                    </div>
                </div>
      
   `
 }

 let divv1 = document.getElementById('Classics');
 
 for(var c in Classics)
 {
   divv1.innerHTML+=
   `
  
             <div class="pro">
                    <img class="img-1" src="${Classics[c].pimg}" alt="">
                    <img class="img-2" src="${Classics[c].pimg1}" alt="">
                    <ul class="product-links">
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="addcart.html"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <div class="des">
                        <h6>${Classics[c].pname}</h6>
                        <span>PKR ${Classics[c].pprice}</span>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <a href="classics.html?id=${c}"><button class="slide-button" class="btn btn-outline-dark ">Quick View</button></a>
                    </div>
                </div>
      
   `
 }














 function addtocart() {
    // Get the current product details
    let url = new URL(window.location.href);
    let i = url.searchParams.get("id");
    
    // Retrieve the relevant product data
    let product = {
      pname: obj[i].pname,
      pimg: obj[i].pimg,
      pprice: obj[i].pprice,
      pquantity: 1, 
      ptotal: obj[i].pprice 
    //   ptotal: Rings[i].pprice ,
    //   ptotal: Rings[i].pprice 
    };
    
  
    // Retrieve the cart from localStorage or initialize an empty cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the product is already in the cart
    let existingProductIndex = cart.findIndex(item => item.pname === product.pname);
    
    if(existingProductIndex !== -1) {
      // Update the quantity and total if the product is already in the cart
      cart[existingProductIndex].pquantity += 1;
      cart[existingProductIndex].ptotal = cart[existingProductIndex].pquantity * cart[existingProductIndex].pprice;
    } else {
      // Add the new product to the cart
      cart.push(product);
    }
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Redirect to the cart page (optional)
    window.location.href = "cart.html";
  }





 



  function addtocart() {
    // Get the current product details
    let url = new URL(window.location.href);
    let i = url.searchParams.get("id");
    
    // Retrieve the relevant product data
    let product = {
      pname: heritage[i].pname,
      pimg: heritage[i].pimg,
      pprice: heritage[i].pprice,
      pquantity: 1, 
      ptotal: heritage[i].pprice 
    //   ptotal: Rings[i].pprice ,
    //   ptotal: Rings[i].pprice 
    };
    
  
    // Retrieve the cart from localStorage or initialize an empty cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the product is already in the cart
    let existingProductIndex = cart.findIndex(item => item.pname === product.pname);
    
    if(existingProductIndex !== -1) {
      // Update the quantity and total if the product is already in the cart
      cart[existingProductIndex].pquantity += 1;
      cart[existingProductIndex].ptotal = cart[existingProductIndex].pquantity * cart[existingProductIndex].pprice;
    } else {
      // Add the new product to the cart
      cart.push(product);
    }
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Redirect to the cart page (optional)
    window.location.href = "cart.html";
  }


  function addtocart() {
    // Get the current product details
    let url = new URL(window.location.href);
    let i = url.searchParams.get("id");
    
    // Retrieve the relevant product data
    let product = {
      pname: Classics[i].pname,
      pimg: Classics[i].pimg,
      pprice: Classics[i].pprice,
      pquantity: 1, 
      ptotal: Classics[i].pprice 
    //   ptotal: Rings[i].pprice ,
    //   ptotal: Rings[i].pprice 
    };
    
  
    // Retrieve the cart from localStorage or initialize an empty cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the product is already in the cart
    let existingProductIndex = cart.findIndex(item => item.pname === product.pname);
    
    if(existingProductIndex !== -1) {
      // Update the quantity and total if the product is already in the cart
      cart[existingProductIndex].pquantity += 1;
      cart[existingProductIndex].ptotal = cart[existingProductIndex].pquantity * cart[existingProductIndex].pprice;
    } else {
      // Add the new product to the cart
      cart.push(product);
    }
  
    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Redirect to the cart page (optional)
    window.location.href = "cart.html";
  }

 

 
 