/*data is requested*/
$("#container").append(`
        <div id="pay_content">
            <form method="post" class="request_content">
                <p>Finalizar Pedido</p>
                <label>Nombre y Apellido:</label>
                <input type="text" id="name" name="name">
                <label>Email:</label>
                <input type="email" id="email" name="email">
                <label>Telefono:</label>
                <input type="tel" id="tfn" name="tfn">
                <label>Dirección:</label>
                <input type="text" id="dire" name="dire">
                <input type="submit" id="submit" value="Pagar">
            </form>
        </div> `);
   
/*the products purchased and the total are displayed*/
$("#container").append(`
        <article class="products_container">
            <div class="cart_info">
                <article id="cart_product"></article> 
                <div class="line"></div>
                <div class="total_content">
                    <div class="cart_total">
                        <p class="price_text">Total: </p>
                        <p class="price_total"><i class="fas fa-dollar-sign"></i></p>
                    </div>
                </div>
            </div>
        </article>`);



// the cart saved in the LocalStorage is retrieved
let totalCart = JSON.parse(localStorage.getItem("CART")) || [];


/* Total products are shown in the cart*/
function renderCart() {
    // $("#cart_product").html("")  /*prevent items from being repeated in the cart*/
    totalCart.forEach((item) =>{
        $("#cart_product").append( `
            <div class="cart_element">
                <img src="${item.img}" alt="${item.name}" class="cart_img">
                <p>${item.name}</p>
                <p class="price_cart"><i class="fas fa-dollar-sign">${item.price}</i></p>
            </div>`)  
    })
}
renderCart();


/*calculate and show total price*/
function renderTotalPrice(){
    let totalPrice = 0;
    totalCart.forEach((item) => {
    totalPrice += item.price * item.units;
    })
    $(".price_total").html(`$${totalPrice}`);
}
renderTotalPrice()





const urlApi = 'https://jsonplaceholder.typicode.com/posts'



$("#submit").click(function(e){

    $.post(urlApi, formulary, function(response,status){
                if(status === 'success'){
                    $('#container').append(`<div><p>Muchas gracias por su compra ${response.name}</p></div>`);
                }
                
            })


})


$("#submit").click(function(e){
const namef = document.getElementById("name").value; 
const direction= document.getElementById("dire").value;
})





