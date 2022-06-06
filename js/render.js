/* vegetables products are shown in the html*/

function render(){
    vegetables.forEach( (product) => {
        $("#item1").append(  `
        <article class="products_all" >
        <img class="img_all" src="${product.img}" alt="paquete de ${product.name}">
        <h3 class="text">${product.name}</h3>
        <div class="products_btn">
            <button type="submit" id="" class="select" onclick="addCart(${product.id})">Agregar</button>
            <p class="price"><i class="fas fa-dollar-sign"></i>${product.price}</p>
        </div>
        </article>
        
    `);

    }

    )
};

render();


/* nuts products are shown in the html*/

function render2(){
    nuts.forEach( (product2) => {
        $("#item2").append( `
        <article class="products_all" >
        <img class="img_all" src="${product2.img}" alt="paquete de ${product2.name}">
        <h3 class="text">${product2.name}</h3>
        <div class="products_btn">
            <button type="submit" id="" class="select" onclick="addCart2(${product2.id})">Agregar</button>
            <p class="price"><i class="fas fa-dollar-sign"></i>${product2.price}</p>
        </div>
        </article>
        
    `);

    }

    )
};

render2();



/* cereals products are shown in the html*/

function render3(){
    cereals.forEach( (product3) => {
        $("#item3").append( `
        <article class="products_all" >
        <img class="img_all" src="${product3.img}" alt="paquete de ${product3.name}">
        <h3 class="text">${product3.name}</h3>
        <div class="products_btn">
            <button type="submit" id="" class="select" onclick="addCart3(${product3.id})">Agregar</button>
            <p class="price"><i class="fas fa-dollar-sign"></i>${product3.price}</p>
        </div>
        </article>
        
    `);

    }

    )
};

render3();




/*showing the searched products of the search engine*/

// /*search bar of vegetables*/
function selectElement(selector){
    return document.querySelector(selector);
}

function getVegetables(){
    const search = selectElement('#search_text').value;
    if(search.length > 0){
        for(let i = 0; i < vegetables.length; i++){
            if(vegetables[i].name.toLowerCase().includes(search.toLowerCase())
            ){
                $(".main_vegetables").html("");
                $(".main_vegetables").prepend(`
                <article class="products_all" >
                        <img class="img_all" src="${vegetables[i].img}" alt="paquete de ${vegetables[i].name}">
                        <h3 class="text">${vegetables[i].name}</h3>
                        <div class="products_btn">
                            <button type="submit" id="" class="select" onclick="addCart(${vegetables[i].id})">Agregar</button>
                            <p class="price"><i class="fas fa-dollar-sign"></i>${vegetables[i].price}</p>
                        </div>
                        </article>`)
            }
            
        }
    } 
}

selectElement("#search_text").addEventListener("keyup",getVegetables);




/*search bar of nuts*/
function selectElement2(selector2){
    return document.querySelector(selector2);
}

function getNuts(){
    const search2 = selectElement2('#search_text').value;
    if(search2.length > 0){
        for(let i = 0; i < nuts.length; i++){
            if(nuts[i].name.toLowerCase().includes(search2.toLowerCase())
            ){
                $(".main_vegetables").html("");
                $(".main_vegetables").prepend(`
                <article class="products_all" >
                        <img class="img_all" src="${nuts[i].img}" alt="paquete de ${nuts[i].name}">
                        <h3 class="text">${nuts[i].name}</h3>
                        <div class="products_btn">
                            <button type="submit" id="" class="select" onclick="addCart(${nuts[i].id})">Agregar</button>
                            <p class="price"><i class="fas fa-dollar-sign"></i>${nuts[i].price}</p>
                        </div>
                        </article>`)
            }
        
        }
    }
}


selectElement2("#search_text").addEventListener("keyup",getNuts);



/*search bar of cereals*/
function selectElement3(selector3){
    return document.querySelector(selector3);
}

function getCereals(){
    const search3 = selectElement('#search_text').value;
    if(search3.length > 0){
        for(let i = 0; i < cereals.length; i++){
            if(cereals[i].name.toLowerCase().includes(search3.toLowerCase())
            ){
                $(".main_vegetables").html("");
                $(".main_vegetables").prepend(`
                <article class="products_all" >
                    <img class="img_all" src="${cereals[i].img}" alt="paquete de ${cereals[i].name}">
                    <h3 class="text">${cereals[i].name}</h3>
                    <div class="products_btn">
                        <button type="submit" id="" class="select" onclick="addCart(${cereals[i].id})">Agregar</button>
                        <p class="price"><i class="fas fa-dollar-sign"></i>${cereals[i].price}</p>
                    </div>
                </article>`)
            }
        
        }
    }
}


selectElement3("#search_text").addEventListener("keyup",getCereals);




/*an animation is shown indicating that the cart already has the product*/
$(".btn_alert").click(function(){
    $(".show_alert").fadeOut()
})

$(".icon_alert").click(function(){
    $(".show_alert").fadeOut()
})


