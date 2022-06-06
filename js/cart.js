

/*The shopping cart is shown through a side window*/
$("#header_btn").click(function(){
    $("#cart_content").toggleClass("active");
})


/*close the cart window with the x*/
$("#cart_cancel").click(function(){
    $("#cart_content").toggleClass("active");
})

/*calculate and show total price*/
function renderTotalPrice(){
    let totalPrice = 0,
        totalItems = 0;
    myCart.forEach((item) => {
        totalPrice += item.price * item.units;
        totalItems += item.units;
    })
    $(".price_total").html(`$${totalPrice}`);
    $(".box_btn").html(`${totalItems}`);
    

}

/*remove item from the cart*/
function removeCart(id){
   myCart = myCart.filter((item) => item.id !== id)
   updateCart();
}


/*indicates that the cart is empty*/
function emptyCar(){
    
    if (Object.keys(myCart).length === 0){
        $(".total_content").hide()
        $(".cart_info").append(`<div class="comment"><i class="fas fa-info-circle"></i> <p>El carrito de compras está vacío</p></div>`);  
    }
    else{
        $(".total_content").show();
        $(".comment").hide();
    }
   
}



// the cart saved in the LocalStorage is retrieved
let myCart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();





/*function update vegetables products to cart*/
function addCart(id) {
    /*warn that the product has already been saved in the cart*/
    if (myCart.some((item) => item.id === id)) {
        $(".show_alert").fadeIn()  
        /*the selected products are saved in the cart array and the units are added*/
        }else{
                const item = vegetables.find((product) => product.id === id);
                myCart.push({...item,units:1});
            }
    
    updateCart(); 
    
}  


function updateCart() {
// function is created so that the products appear in the cart.
    renderCart();
// The selected vegetables products are saved in the LocalStorage.
    localStorage.setItem("CART",JSON.stringify(myCart));
/* function to show the total amount*/
    renderTotalPrice() 
/* function to say that the cart is empty*/   
    emptyCar()
}  

/* Vegetables products are shown in the cart*/
function renderCart() {
    $("#cart_product").html("")  /*prevent items from being repeated in the cart*/
    myCart.forEach((item) =>{
        $("#cart_product").append( `
                <div class="cart_element">
                    <img src="${item.img}" alt="${item.name}" class="cart_img">
                    <h4 class="name_vegetables">${item.name}</h4>
                    <div class="unit_price">
                        <div class="minus" onclick="changeNumberOfUnits('minus',${item.id})"><i class="fas fa-minus-circle"></i></div>
                        <div class="number">${item.units}</div>
                        <div class="plus" onclick="changeNumberOfUnits('plus',${item.id})"><i class="fas fa-plus-circle"></i></div>
                    </div>
                    <div class="trash_container">
                        <span class="trash" onclick="removeCart(${item.id})"><i class="fa-solid fa-trash-can"></i></i></span>
                        <p class="price_cart"><i class="fas fa-dollar-sign">${item.price}</i></p>
                    </div>
                </div>

            `)  
    })
}

/*change the number of units of vegetables in the cart */
function changeNumberOfUnits(action,id){
    myCart = myCart.map((item) => {
        let units = item.units;
        
        if(item.id === id){
            if(action === "minus" && units > 1){
                units--;
            }else if(action === "plus"){
                units++;
            }
        }   
    
        return {
            ...item,
            units,
        };
    });
    updateCart();
    }
    




/*add nuts products to cart*/
function addCart2(id) {
    /*warn that the product has already been saved in the cart*/
    if (myCart.some((item) => item.id === id)) {
        $(".show_alert").fadeIn() 
        /*the selected products are saved in the cart array and the units are added*/
    } else {
        const item2 = nuts.find((product) => product.id === id);
        myCart.push({...item2,units:1});
    }
     /*the function is created where the nuts products are updated in the cart*/
    updateCart2();
}  


function updateCart2() {
    renderCart2();
    // The selected nuts products are saved in the LocalStorage.
    localStorage.setItem("CART",JSON.stringify(myCart));
    /* function to show the total amount*/
    renderTotalPrice(); 
    /* function to say that the cart is empty*/   
    emptyCar();
}

/* nuts products are shown in the cart*/
function renderCart2() {
    $("#cart_product").html("") /*prevent items from being repeated in the cart*/
    myCart.forEach((item) =>{
        $("#cart_product").append( `
                <div class="cart_element">
                    <img src="${item.img}" alt="${item.name}" class="cart_img">
                    <h4>${item.name}</h4>
                    <div class="unit_price">
                        <div class="minus" onclick="changeNumberOfUnits2('minus',${item.id})"><i class="fas fa-minus-circle"></i></div>
                        <div class="number">${item.units}</div>
                        <div class="plus" onclick="changeNumberOfUnits2('plus',${item.id})"><i class="fas fa-plus-circle"></i></div>
                    </div>
                    <div class="trash_container">
                        <span class="trash" onclick="removeCart(${item.id})"><i class="fa-solid fa-trash-can"></i></i></span>
                        <p class="price_cart"><i class="fas fa-dollar-sign">${item.price}</i></p>
                    </div>
                </div>

            `)
    })
}

/*change the number of units of nuts in the cart */
function changeNumberOfUnits2(action2,id){
    myCart = myCart.map((item) => {
        let units = item.units;
        
        if(item.id === id){
            if(action2 === "minus" && units > 1){
                units--;
            }else if(action2 === "plus"){
                units++;
            }
        }   
    
        return {
            ...item,
            units: units,
        };
    });
    updateCart2();
    }






/*add cereals products to cart*/
function addCart3(id) {
    /*warn that the product has already been saved in the cart*/
    if (myCart.some((item) => item.id === id)) {
        $(".show_alert").fadeIn() 
        /*the selected products are saved in the cart array and the units are added*/
    } else {
        const item3 = cereals.find((product) => product.id === id);
        myCart.push({...item3,units:1});
    }
    /*the function is created where the cereals products are updated in the cart*/
    updateCart3();
}  


function updateCart3() {
    renderCart3();
    // The selected cereals products are saved in the LocalStorage.
    localStorage.setItem("CART",JSON.stringify(myCart));
    /* function to show the total amount*/
    renderTotalPrice(); 
    /* function to say that the cart is empty*/   
    emptyCar();
}


/* cereals products are shown in the cart*/
function renderCart3() {
    $("#cart_product").html("") /*prevent items from being repeated in the cart*/
    myCart.forEach((item) =>{
        $("#cart_product").append( `
                <div class="cart_element">
                    <img src="${item.img}" alt="${item.name}" class="cart_img">
                    <h4>${item.name}</h4>
                    <div class="unit_price">
                        <div class="minus" onclick="changeNumberOfUnits2('minus',${item.id})"><i class="fas fa-minus-circle"></i></div>
                        <div class="number">${item.units}</div>
                        <div class="plus" onclick="changeNumberOfUnits2('plus',${item.id})"><i class="fas fa-plus-circle"></i></div>
                    </div>
                    <div class="trash_container">
                        <span class="trash" onclick="removeCart(${item.id})"><i class="fa-solid fa-trash-can"></i></i></span>
                        <p class="price_cart"><i class="fas fa-dollar-sign">${item.price}</i></p>
                    </div>
                </div>
   
            `)
    })
}

/*change the number of units of cereals in the cart */
function changeNumberOfUnits3(action3,id){
    myCart = myCart.map((item) => {
        let units = item.units;
        
        if(item.id === id){
            if(action3 === "minus" && units > 1){
                units--;
            }else if(action3 === "plus"){
                units++;
            }
        }   
    
        return {
            ...item,
            units: units,
        };
    });
    updateCart3();
    }








 











