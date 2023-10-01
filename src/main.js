"use strict"


let mostrarLasProvincias= require('./api/ProvinciasApi')
const urlProvincias = 'https://www.el-tiempo.net/api/json/v2/provincias'
let elementosProvincia



//cargar todo el DOM
document.addEventListener("DOMContentLoaded", function() {

  let menuDeProvincias =  document.getElementById('drop-menu')
mostrarLasProvincias(urlProvincias, menuDeProvincias)
 

  elementosProvincia = document.querySelectorAll('.dropdown-item'),
  //document.querySelectorAll(".dropdown-item"); //document.getElementsByTagName('a') document.querySelectorAll('a');
  
  elementosProvincia.forEach((elementProv)=> {elementProv.addEventListener('click',(e)=>{e.preventDefault(),console.log('hecho click')})})


  /*escocherLasProvincias.addEventListener('click', (e)=>{console.log('hecho click'), aElement = document.createElement('a'),

    aElement.classList.add('dropdown-item'),escocherLasProvincias.appendChild(aElement)},
     );*/

  })
 







   