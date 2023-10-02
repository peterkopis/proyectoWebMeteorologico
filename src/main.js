"use strict"


const mostrarProvincias= require('./api/ProvinciasApi')
const unMunicipioTemperaturaApi = require('./api/unMunicipioTemperaturaApi')
const urlProvincias = 'https://www.el-tiempo.net/api/json/v2/provincias'
let elementosProvincia
let contarLosUsos = 0




//cargar todo el DOM
document.addEventListener("DOMContentLoaded", function() {

const menuDeMunicipios = document.getElementById('exampleFormControlSelect1')
const menuDeProvincias =  document.getElementById('drop-menu')

mostrarProvincias(urlProvincias, menuDeProvincias)


menuDeMunicipios.addEventListener('change',e=>{
  contarLosUsos++
  if(contarLosUsos > 5){
    alert('Para más suscribete al Premium')
    document.write('Suscribete al Premium :)')
    throw new Error("El limite de usos gratuitos!");
  }
let idProvinciaDeElegidoMunicipio = menuDeMunicipios.options[menuDeMunicipios.selectedIndex].getAttribute("codigoProv")
let idMunicipio = menuDeMunicipios.options[menuDeMunicipios.selectedIndex].getAttribute("value")
unMunicipioTemperaturaApi(idProvinciaDeElegidoMunicipio,idMunicipio)
})
 

  

  })
 







   