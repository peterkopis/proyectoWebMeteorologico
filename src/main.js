"use strict"


let mostrarProvincias= require('./api/ProvinciasApi')
const urlProvincias = 'https://www.el-tiempo.net/api/json/v2/provincias'
let elementosProvincia




//cargar todo el DOM
document.addEventListener("DOMContentLoaded", function() {

let menuDeMunicipios = document.getElementById('exampleFormControlSelect1')
let menuDeProvincias =  document.getElementById('drop-menu')

mostrarProvincias(urlProvincias, menuDeProvincias)
menuDeMunicipios.addEventListener('change',e=>{/*unMunicipioTemperaturaApi(idProvinciaDeElegidoMunicipio,idMunicipio)*/console.log('hu')})
 

  

  })
 







   