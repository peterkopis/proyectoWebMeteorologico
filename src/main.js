"use strict"


const rellenarPorProvincias= require('./api/ProvinciasApi')
const unMunicipioTemperaturaApi = require('./api/unMunicipioTemperaturaApi')
const urlProvincias = 'https://www.el-tiempo.net/api/json/v2/provincias'
let elementosProvincia
let contarLosUsos = 0


//cargar todo el DOM
document.addEventListener("DOMContentLoaded", function() {

const menuDeMunicipios = document.getElementById('exampleFormControlSelect1')
const menuDeProvincias =  document.getElementById('drop-menu')

//rellena el elemento por elementos a con nombre de las provincias
rellenarPorProvincias(urlProvincias, menuDeProvincias)

//alanza cuando se cambie valor del municipio
menuDeMunicipios.addEventListener('change',e=>{
  contarLosUsos++
  if(contarLosUsos > 5){
    alert('Para más suscribete al Premium')
    document.write('Suscribete al Premium :)')
    throw new Error("El limite de usos gratuitos!");
  }
  //id de provincia , a dondé pertenece el municipio elegido
let idProvinciaDeElegidoMunicipio = menuDeMunicipios.options[menuDeMunicipios.selectedIndex].getAttribute("codigoProv")
//id de elegido municipio
let idMunicipio = menuDeMunicipios.options[menuDeMunicipios.selectedIndex].getAttribute("value")
//muestra las temperaturas del municipio elegido
unMunicipioTemperaturaApi(idProvinciaDeElegidoMunicipio,idMunicipio)
})
  })
 







   