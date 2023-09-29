"use strict"



let elementoProvincia



function obtenerJson(url) {
   return fetch(url).then(response => response.json());
 }
 
 
 module.exports = function mostrarProvincias(url,menuDeProvincias) {
   obtenerJson(url).then(json => {
     
     for(let provincia of json.provincias){
          //console.log(provincia.NOMBRE_PROVINCIA +'--------'),
          elementoProvincia =document.createElement('a')
          elementoProvincia.classList.add('dropdown-item')
          elementoProvincia.innerText = provincia.NOMBRE_PROVINCIA
          elementoProvincia.setAttribute("codigo", provincia.CODPROV)
         // menuDeProvincias = document.getElementById('drop-menu')
          menuDeProvincias.appendChild(elementoPorvincia)

     }
     
   });
 }