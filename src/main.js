"use strict"


let mostrarLasProvincias= require('./api/ProvinciasApi')
const urlProvincias = 'https://www.el-tiempo.net/api/json/v2/provincias'
let elementosProvincia



//cargar todo el DOM
document.addEventListener("DOMContentLoaded", function() {

let menuDeProvincias =  document.getElementById('drop-menu')
mostrarLasProvincias(urlProvincias, menuDeProvincias)
 

  

  })
 







   