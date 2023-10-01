"use strict"

let obtenerJsonDeApi = require('./obtenerJsonDeApi')
let municipiosDeUnaProvincia = require('./municipiosDeUnaProvinciaApi')

let elementoProvincia

 module.exports = function mostrarProvincias(url,menuDeProvincias) {
   obtenerJsonDeApi(url).then(json => {
    
     for(let provincia  of json.provincias){
          
          elementoProvincia =document.createElement('a')
          //elementoProvincia.removeEventListener('click',e=>{municipiosDeUnaProvincia(codProv)})
          elementoProvincia.setAttribute('href','#')
          elementoProvincia.classList.add('dropdown-item')
          elementoProvincia.innerText = provincia.NOMBRE_PROVINCIA
          //anade un string vacio, para que siempre devuelve string
          let codProv = provincia.CODPROV +""
          elementoProvincia.setAttribute("codigo", provincia.CODPROV)
          
          elementoProvincia.addEventListener('click',e=>{
            municipiosDeUnaProvincia(codProv)

          })
          menuDeProvincias.appendChild(elementoProvincia)
        
        }})
         
          
     }
     
  