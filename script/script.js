let nombre, correo, mensaje;
let formulario= document.getElementById('form')
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    LeerDatos()
})

function LeerDatos() {
    nombre = document.getElementById('nombre').value
    correo = document.getElementById('correo').value
    mensaje = document.getElementById('textarea').value
    ValidarData(nombre, correo.mensaje)
    GuardarLocalStorage(nombre, correo, mensaje)
}

function ValidarData(nombre, correo, mensaje) {
    if(nombre,length==0 || correo.length==0 || mensaje.length==09){
    
        swal.fire({
            title:'error!',
            text:'do you want to continue',
            icon:'error',
            confirmButtonText:'cool',
            iconColor:'purple'
     }) 
   }
 }

 function GuardarLocalStorage(nombre, correo, mensaje) {
    localStorage.setItem('nombre', nombre)
    localStorage.setItem('correo', correo)
    localStorage.setItem('mensaje', mensaje)
    ListarData()
 }

 function ListarData() {
    let nombreUsu = localStorage.getItem('nombre')
    let correoUsu = localStorage.getItem('correo')
    let mensajeUsu = localStorage.getItem('correo')
 }

 

