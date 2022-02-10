
// DOM
const alumno = document.getElementById('alumno')
const btnAceptar = document.getElementById('btnAceptar')
const selecId = document.getElementById('selecId')
const txtNota = document.getElementById('txtNota')
const listaNotas = document.getElementById('listaNotas')
const btnLimpiar = document.getElementById('btnLimpiar')


// EVENTS
btnAceptar.addEventListener('click', () => {

    let notaAlumno = bdAlumnos.find(el => el.legajo == selecId.value)
    console.log(notaAlumno);
    notaAlumno.nota = parseInt(txtNota.value)
    console.log(notaAlumno)
    txtNota.value = ""

    let div = document.createElement('div')
    if (notaAlumno.nota >= 6) {
        div.className = 'estiloAprobado'
        div.innerHTML = `<p>Alumno Aprobado legajo n: ${notaAlumno.legajo} ${notaAlumno.nombre} 
                     ${notaAlumno.apellido} Nota: ${notaAlumno.nota}  </p> \n`
        listaNotas.appendChild(div)
    }
    else {
        div.className = 'estiloDesaprobado'
        div.innerHTML = `<p>Alumno Desaprobado legajo n: ${notaAlumno.legajo} ${notaAlumno.nombre} 
                        ${notaAlumno.apellido} Nota: ${notaAlumno.nota}  </p> \n`
        listaNotas.appendChild(div)
    }

})

selecId.addEventListener('change', () => {
    console.log(selecId.value)
    switch (selecId.value) {
        case '1':
            mostrarAlumnos(bdAlumnos.filter(el => el.legajo == selecId.value))
            break;
        case '2':
            mostrarAlumnos(bdAlumnos.filter(el => el.legajo == selecId.value))
            break;
        case '3':
            mostrarAlumnos(bdAlumnos.filter(el => el.legajo == selecId.value))
            break;
        case '4':
            mostrarAlumnos(bdAlumnos.filter(el => el.legajo == selecId.value))
            break;
        case '5':
            mostrarAlumnos(bdAlumnos.filter(el => el.legajo == selecId.value))
            break;
        default:
            break;
    }
})

btnLimpiar.addEventListener('click', () => {

    while (listaNotas.firstChild) {
        listaNotas.removeChild(listaNotas.firstChild);
    }
})

//FUNCTIONS
function mostrarAlumnos(array) {
    alumno.innerHTML = "";
    let div = document.createElement('div')
    array.forEach(alu => {

        div.className = 'alum'
        div.innerHTML = `<p>Alumno: ${alu.nombre} ${alu.apellido} </p>`
        alumno.appendChild(div)
    })
}


