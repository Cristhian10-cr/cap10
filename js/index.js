const botonFormulario = document.querySelector('.btn')
const formulario = document.getElementById('formulario')

const inputs = document.querySelectorAll('#formulario')
const NombreInput = document.getElementById('nombre')
const NombreTarjeta = document.querySelector('.nombre_tarjeta')

const NumeroInput = document.getElementById('numero')
const NumeroTarjeta = document.querySelector('.numero_tarjeta')

const MesInput = document.getElementById('mes')
const NumeroFecha = document.querySelector('.fecha')

const YearInput = document.getElementById('year')
const NumeroYear = document.querySelector('.fecha_2')

const cvcInput = document.getElementById('cvc')
const Numerocvc = document.querySelector('.numero_cvc')




const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    numero: /^\d{16}$/,
    vacio:  /^[^]+$/,
    formato: /0[123456789]|10|11|12/
}

const campos = {
    nombre: false,
    numero: false,
    vacio: false
}


inputs.forEach((input) => {
    input.addEventListener('keyup', () => {
        valiadrNombre()
        validarNumero()
        validarMes()
        validarYear()
        validarcvc()
        
    })
})

botonFormulario.addEventListener('click', (e) => {
    e.preventDefault()
        validarFormulario(expresiones.nombre, nombre, 'nombre')
        validarFormulario(expresiones.numero, numero, 'numero') 
        validarFormulario(expresiones.vacio, mes, 'mes')
        validarFormulario(expresiones.vacio, year, 'year')
        validarFormulario(expresiones.vacio, cvc, 'cvc')
        if(campos.nombre && campos.numero && campos.mes && campos.year && campos.cvc){
            document.querySelector('.formulario').classList.add('desactive_form')
            document.querySelector('.contenedor_modal').classList.add('active_modal')
        }
})

function valiadrNombre(){
    NombreTarjeta.textContent = NombreInput.value
    if(NombreInput.value == 0){
        NombreTarjeta.textContent = 'JANE APPLESEED'
    }
}


function validarNumero(){    
    NumeroTarjeta.textContent = NumeroInput.value
    .replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();
    if(NumeroInput.value == 0){
        NumeroTarjeta.textContent = '0000 0000 0000 0000'
    }

}
function validarMes(){
    NumeroFecha.textContent = MesInput.value
    if(MesInput.value == 0){
        NumeroFecha.textContent = '00'
    }
}
function validarYear(){
    NumeroYear.textContent = YearInput.value
    if(YearInput.value == 0){
        NumeroYear.textContent = '00'
    }
}
function validarcvc(){
    Numerocvc.textContent = cvcInput.value
    if(cvcInput.value == 0){
        Numerocvc.textContent = '000'
    }
}

function validarFormulario (expresion, input, campo){
    if(expresion.test(input.value)){    
        document.getElementById(`grupo_${campo}`).classList.remove('error_input')
        campos[campo] = true;
        return;
    }else{
        document.getElementById(`grupo_${campo}`).classList.add('error_input')
        campos[campo] = false;
    } 
}