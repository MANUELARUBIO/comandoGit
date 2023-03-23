let placa, tipo, fecha_de_entrada,hora_de_inicio, cantidad_de_horas, propietario_de_vehiculo, modelo_de_vehiculo;
let formulario= document.getElementById('form')
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    LeerDatos()
})

function LeerDatos() {
    placa = document.getElementById('placa').value
    tipo = document.getElementById('tipo').value
    fecha_de_entrada = document.getElementById('fecha de entrada').value
    hora_de_inicio = document.getElementById('hora de inicio').value
    cantidad_de_horas = document.getElementById('cantidad de horas').value
    propietario_de_vehiculo = document.getElementById('propietario de vehiculo').value
    modelo_de_vehiculo = document.getElementById('modelo de vehiculo').value
    ValidarData(placa, tipo, fecha_de_entrada, hora_de_inicio, cantidad_de_horas, propietario_de_vehiculo, modelo_de_vehiculo)
    GuardarLocalStorage(placa, tipo, fecha_de_entrada, hora_de_inicio, cantidad_de_horas, propietario_de_vehiculo, modelo_de_vehiculo )
}

function ValidarData(placa, tipo, fecha_de_entrada, hora_de_inicio,cantidad_de_horas, propietario_de_vehiculo, modelo_de_vehiculo) {
    if(placa,length==0 || tipo.length==0 || fecha_de_entrada.length==0 || hora_de_inicio==0 ||cantidad_de_horas==0 || propietario_de_vehiculo==0 || modelo_de_vehiculo==0){
    
        swal.fire({
            title:'error!',
            text:'do you want to continue',
            icon:'error',
            confirmButtonText:'cool',
            iconColor:'purple'
     }) 
   }
 }

 function GuardarLocalStorage(placa, tipo, fecha_de_entrada, hora_de_inicio, cantidad_de_horas, propietario_de_vehiculo, modelo_de_vehiculo) {
    localStorage.setItem('placa', placa)
    localStorage.setItem('tipo', tipo)
    localStorage.setItem('fecha de entrada', fecha_de_entrada)
    localStorage.setItem('hora de inicio', hora_de_inicio )
    localStorage.setItem('cantidad de horas', cantidad_de_horas)
    localStorage.setItem('propietario de vehiiculo', propietario_de_vehiculo)
    localStorage.setItem('modelo de vehiculo', modelo_de_vehiculo)
    ListarData()
 }

 function ListarData() {
    let placaUsu = localStorage.getItem('placa')
    let tipoUsu = localStorage.getItem('tipo')
    let fecha_de_entradaUsu = localStorage.getItem('fecha de entrada')
    let hora_de_inicio = localStorage.getItem('hora de inicio')
    let cantidad_de_horas = localStorage.getItem('cantidad de horas')
    let propietario_de_vehiculo = localStorage.getItem('propietario de vehiculo')
    let modelo_de_vehiculo = localStorage.getItem('modelo de vehiculo')
 }