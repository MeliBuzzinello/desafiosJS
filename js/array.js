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