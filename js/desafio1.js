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