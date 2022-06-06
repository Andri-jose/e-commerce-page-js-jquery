
/*objet with Products*/
class Product {
    constructor(id, name, price, img){
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        
    }

    showProduct() {
        alert('A elegido' + this.name + 'valor' + this.price);
    }
}

/*array of objects*/
const vegetables = [];

vegetables.push(new Product(0,"Porotos Negros",500,"css/images/porotos.jpg"));
vegetables.push(new Product(1,"Garbanzos",600,"css/images/garbanzo-460.jpg"));
vegetables.push(new Product(2,"Lentejas",400,"css/images/lentejas.jpg"));
vegetables.push(new Product(3,"Soja",500,"css/images/soja.jpg"));


const nuts = [];

nuts.push(new Product(4,"Almendras",700,"css/images/almendras.jpg"));
nuts.push(new Product(5,"Avellanas",800,"css/images/avellanas.jpg"));
nuts.push(new Product(6,"Pasas",500,"css/images/pasas.png"));
nuts.push(new Product(7,"Nuez",900,"css/images/Nuez.jpg"));

const cereals = [];
cereals.push(new Product(8,"Avena",200,"css/images/avena.jpg"));
cereals.push(new Product(9,"Cebada",100,"css/images/cebada.jpg"));
cereals.push(new Product(10,"Trigo",300,"css/images/trigo.jpg"));
cereals.push(new Product(11,"Arroz integral",400,"css/images/arroz.jpg"));

















    

    
