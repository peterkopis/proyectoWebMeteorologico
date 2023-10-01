"use strict"

let obtenerJsonDeApi = require('./obtenerJsonDeApi')

let elementoProvincia

 module.exports = function mostrarProvincias(url,menuDeProvincias) {
   obtenerJsonDeApi(url).then(json => {
    
     for(let provincia  of json.provincias){
          //console.log(provincia.NOMBRE_PROVINCIA +'--------'),
          elementoProvincia =document.createElement('a')
          elementoProvincia.setAttribute('href','#')
          elementoProvincia.classList.add('dropdown-item')
          elementoProvincia.innerText = provincia.NOMBRE_PROVINCIA
          elementoProvincia.setAttribute("codigo", provincia.CODPROV)
          elementoProvincia.addEventListener('click',e=>console.log('clicki'))
          menuDeProvincias.appendChild(elementoProvincia)

     }
     
   })

 }