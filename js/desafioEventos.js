
const txtTelefono = document.getElementById('txtTelefono')
const txtNombre = document.getElementById('txtNombre')
const selectHorario = document.getElementById('selectHorario')
const contenedorHijo = document.getElementById('contenedorHijo')
const miFormulario = document.getElementById('formulario')
const DivEnviado = document.getElementById('DivEnviado')
const btnEnviar = document.getElementById('btnEnviar')
const DivHorario = document.getElementById('DivHorario')
const DivNum = document.getElementById('DivNum')
const contenedorPadre = document.getElementById('icNombre')



// EVENTOS 

//txtNombre
txtNombre.addEventListener('change', () => {
    while (contenedorPadre.firstChild) {
        contenedorPadre.removeChild(contenedorPadre.firstChild);
    }

    const iconoNom = document.createElement('div')
    if (txtNombre.value == "") {
        iconoNom.innerHTML = `<img src="img/borrar.png" width="16">`
    }
    else {
        iconoNom.innerHTML = `<img src="img/comprobado.png" width="16">`
    }
    contenedorPadre.appendChild(iconoNom)
})

//txTelefono
txtTelefono.addEventListener('change', () => {

    while (DivNum.firstChild) {
        DivNum.removeChild(DivNum.firstChild);
    }

    let telefono = txtTelefono.value
    const iconoTel = document.createElement('div')
    if (telefono.length != 10) {
        iconoTel.innerHTML = `<img src="img/borrar.png" width="16">`

    }
    else {
        iconoTel.innerHTML = `<img src="img/comprobado.png" width="16">`
    }
    DivNum.appendChild(iconoTel)
})

txtTelefono.addEventListener('keypress', (e) => {
    const tecla = (document.all) ? e.keyCode : e.which
   
    if (tecla == 13) {

        alert('se presiona tecla ENTER')
    }
})

txtNombre.addEventListener('keypress', (e) => {
    const tecla = (document.all) ? e.keyCode : e.which
    if (tecla == 13) {
        alert('se presiona tecla ENTER')
    }
})


//selectHorario
selectHorario.addEventListener('change', () => {

    let divH = document.createElement('div')

    if (selectHorario.value == "select1") {

        divH.innerHTML = `<h4>Usted sera contactado en el horario de 8 a 13 hs</h4>`
    }
    else {
        divH.innerHTML = `<i class="fa-solid fa-alarm-clock"></i><h4>Usted sera contactado en el horario de 13 a 19 hs</h4>`
    }
    DivHorario.appendChild(divH);
    setTimeout(() => {
        DivHorario.removeChild(divH
        )
    }, 3000);
})

//formulario
miFormulario.addEventListener('submit', (e) => {
    e.preventDefault();

        if (!DivEnviado.hasChildNodes()) {
            let div = document.createElement('div');

            if (txtNombre.value == "" || txtTelefono.value == "") {
                div.className = 'parrafoEnviadoError';
                div.innerHTML = `<h4>Debe Completar los campos solicitados</h4>`

            } else {
                div.className = 'parrafoEnviadoOk';
                div.innerHTML = `<h4>Su información fue enviado correctamente</h4>`
            }
            DivEnviado.appendChild(div);
            setTimeout(() => {
                DivEnviado.removeChild(div)

            }, 2000);

            txtNombre.value = ""
            txtTelefono.value = ""
            selectHorario.value=""
            while (contenedorPadre.firstChild) {
                contenedorPadre.removeChild(contenedorPadre.firstChild);
            }
            while (DivNum.firstChild) {
                DivNum.removeChild(DivNum.firstChild);
            }
        }
})


//btnEnviar
btnEnviar.addEventListener('mouseover', () => {
    btnEnviar.className = 'estiloBtnOver'
})

btnEnviar.addEventListener('mouseout', () => {
    btnEnviar.className = 'estiloBtnOut'
})

btnEnviar.addEventListener('click', () => {
    btnEnviar.className = 'estiloBtnClick'
})

btnEnviar.addEventListener('mousedown', () => {
    btnEnviar.className = 'estiloBtnMousedown'
})

