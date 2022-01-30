class Alumno {
    constructor(legajo, nombre, apellido, nota) {
        this.legajo = legajo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nota = nota;
    }
}

const bdAlumnos = [new Alumno(1, "Juan", "Perez", 0),
new Alumno(2, "Marta", "Suarez", 0),
new Alumno(3, "Emilia", "Rodriguez", 0),
new Alumno(4, "Agustin", "Mestre", 0),
new Alumno(5, "Antonela", "Saad", 0)]

function agregarNota() {
    legajo = '0'
    while (legajo != "#") {
        legajo = prompt("Ingrese el legajo del alumno al cual quiere cargar la nota (o # para finalizar):  ")
        if (legajo != "#") {
            alum = bdAlumnos.find(al => al.legajo == legajo)
            nota = prompt('Ahora ingrese la nota del alumno :')
            alum.nota = parseInt(nota);
            console.log(alum)
        } else {
            console.log('legajo')
            alert("Finalizo la carga de notas")
        }
    }
}

agregarNota()
console.log(bdAlumnos)

function promedio() {

    let sumaNota = 0
    let cantAprobados = 0
    let cantReprobados = 0

    for (const al_no of bdAlumnos) {
        al_no.nota
        sumaNota = sumaNota + Number(al_no.nota)

        if (al_no.nota >= 6) {
            cantAprobados = cantAprobados +1
        }
        else
            cantReprobados = cantReprobados +1
    }
    let promedio = sumaNota / bdAlumnos.length
    console.log(sumaNota + " " + bdAlumnos.length)
    promedio = parseFloat(promedio)
    alert("Promedio total de los alumnos " + promedio);
    alert("Cantidad de Aprobados= " + cantAprobados);
    alert("Cantidad de reprobados= " + cantReprobados);
}

promedio()