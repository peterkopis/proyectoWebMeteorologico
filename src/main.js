"use strict"


let mostrarLasProvincias= require('./api/ProvinciasApi')
const urlProvincias = 'https://www.el-tiempo.net/api/json/v2/provincias'



//cargar todo el DOM
document.addEventListener("DOMContentLoaded", function() {

  let menuDeProvincias =  document.getElementById('drop-menu')
  mostrarLasProvincias(urlProvincias, menuDeProvincias)

  //let elementoProvincia = docu

  //let escocherLasProvincias = document.getElementById('drop-menu');
  escocherLasProvincias.addEventListener('click', (e)=>{console.log('hecho click'), aElement = document.createElement('a'),

    aElement.classList.add('dropdown-item'),escocherLasProvincias.appendChild(aElement)},
     );
    
  });
 







   