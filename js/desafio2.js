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

arrayArticulo.push(articulo6 = new Articulo(6,'Pantalon verde',560))
console.log(arrayArticulo)

arrayArticulo.sort((a,b) => {
    if (a.nombre > b.nombre) {
        return 1;
    }
    if (a.nombre < b.nombre) {
        return -1;
    }
    // a es igual a b
    return 0;
}
)

console.log(arrayArticulo)


//Obtenemos el nodo donde vamos a agregar los nuevos elementos
let padre = document.getElementById("personas");
//Array con la información a agregar
let personas = ["HOMERO","MARGE", "BART", "LISA","MAGGIE"];
//Iteramos el array con for...of
for (const persona of personas) {
    //Creamos un nodo <li> y agregamos al padre en cada ciclo
    let li = document.createElement("li");
    li.innerHTML = persona
    padre.appendChild(li);
}

const carrito = []

function mostrarArray() {

    arrayArticulo.forEach((el) => {

        
        document.write(`<br>
        ${el.id} ${el.nombre}  <button onclick="comprar( ${el.id})">Comprar</button>
         </br>`)

         const resultado = array.some()

         if (resultado == true){
document.write()

         }
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
