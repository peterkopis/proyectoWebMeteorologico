"use strict"


const mostrarProvincias= require('./api/ProvinciasApi')
const unMunicipioTemperaturaApi = require('./api/unMunicipioTemperaturaApi')
const urlProvincias = 'https://www.el-tiempo.net/api/json/v2/provincias'
let elementosProvincia




//cargar todo el DOM
document.addEventListener("DOMContentLoaded", function() {

let menuDeMunicipios = document.getElementById('exampleFormControlSelect1')
let menuDeProvincias =  document.getElementById('drop-menu')

mostrarProvincias(urlProvincias, menuDeProvincias)


menuDeMunicipios.addEventListener('change',e=>{
let idProvinciaDeElegidoMunicipio = menuDeMunicipios.options[menuDeMunicipios.selectedIndex].getAttribute("codigoProv")
let idMunicipio = menuDeMunicipios.options[menuDeMunicipios.selectedIndex].getAttribute("value")
unMunicipioTemperaturaApi(idProvinciaDeElegidoMunicipio,idMunicipio)
})
 

  

  })
 







   