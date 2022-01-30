class Articulo {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

let articulo1 = new Articulo(1, "Remera Diana", 600);
let articulo2 = new Articulo(2, "Remera Roxe", 650);
let articulo3 = new Articulo(3, "Remera Batic", 500);
let articulo4 = new Articulo(4, "Short Emma", 700);
let articulo5 = new Articulo(5, "Pantalon Gris", 800);

const arrayArticulo = [articulo1, articulo2, articulo3, articulo4, articulo5]

const carrito = []

function mostrarArray() {

    arrayArticulo.forEach((el) => {

        document.write(`<br>
        ${el.id} ${el.nombre}  <button onclick="comprar( ${el.id})">Comprar</button>
         </br>`)
    })
    document.write(`<button onclick="ordenarPrecio()">Ordenar</button>`)
}

function comprar(id) {
    carrito.push(arrayArticulo.find(x => x.id == id))
    console.log(carrito)
}

function ordenarPrecio() {
    arrayArticulo.sort((a, b) => a.precio - b.precio)
    console.log(arrayArticulo)
}

console.log(arrayArticulo)
