alert("Ingrese el nombre y nota de los 10 alumnos");
let sumaNotas = 0
let promedio = 0
let cantAprobados = 0
let cantReprobados = 0

for (i = 0; i < 10; i++) {
    let nombre = prompt("Ingrese nombre del alumno");
nota = prompt("Ingrese la nota");
    nota = parseInt(nota);
    sumaNotas = sumaNotas + nota;

    if(nota >= 6){
          cantAprobados = cantAprobados + 1
    }
    else 
         cantReprobados = cantReprobados + 1
}
promedio = sumaNotas/i;
alert("Promedio total de los alumnos " + promedio);
alert("Cantidad de Aprobados= " + cantAprobados);
alert("Cantidad de reprobados= " + cantReprobados);



// function Escritura(precio) {
//       let resultado = (precio * 0.1) * 0.7
//       return resultado
// }
// function Comision(precio, porcentaje) {
//       let resultado = precio * porcentaje
//       return resultado
// }



// let numero = prompt("Indique tipo de inmueble 1-TERRENO / 2-CASA / 3-DUPLEX / 4-DEPARTAMENTO / 5-LOCAL COMERCIAL")
// let precio = 0
// let costoEscritura = 0
// let comision = 0 
// switch (numero) {
//       case "1":
//             precio = Number(prompt("Indique costo de terreno en pesos argentinos"))
//             costoEscritura = Escritura(precio)

//             comision = Comision(precio, 0.05)

//             alert("Los cargos de escritura es de $ " + costoEscritura)
//             alert("El costo de comision inmobiliaria es del 5%, debe abonar $ " + comision)

//             break;

//       case "2": case "3": case "4":
//             precio = Number(prompt("Indique costo de la propiedad en pesos Argentino"))
            
//             costoEscritura = Escritura(precio)
                      
//             comision = Comision(precio, 0.03)

//             alert("Los cargos de escritura es de $ " + costoEscritura)
//             alert("El costo de comision inmobiliaria es del 3%, debe abonar $ " + comision)

//             break;

//       case "5":
//             alert("Por el momento no contamos con locales comerciales para la venta")

//             break;

//       default:
//             alert("Ingreso un dato incorrecto")
//             break;
// }