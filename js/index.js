const contenedor = document.querySelectorAll('.content')
const boton = document.querySelector('.boton')


let num = false
let activo = null

for(let i = 0; i < contenedor.length; i++){
    contenedor[i].addEventListener('click', () => {
        if(activo){
            activo.classList.remove('activ')
        }
        contenedor[i].classList.add('activ')
        activo = contenedor[i]
        num = true

        })
}

boton.addEventListener('click', () => {
    if(num == true){
        document.querySelector('.contenedor_box').style.display = 'none'
        document.querySelector('.contenedor_box_trank').style.display = 'block'
    }
})