"use strict"

const obtenerJsonDeApi = require('./obtenerJsonDeApi')
const municipiosDeUnaProvincia = require('./municipiosDeUnaProvinciaApi')
const crearElementoAProvincia = require('../crearElementos/crearElementoAProvincia')

let elementoProvincia

 module.exports = function mostrarProvincias(url,menuDeProvincias) {
   obtenerJsonDeApi(url).then(json => {
    
     for(let provincia  of json.provincias){
           
          let nombreProv = provincia.NOMBRE_PROVINCIA
          //anade un string vacio, para que siempre devuelve string, en caso que la api va en futuro cambiar el string por el numero
          let codProv = provincia.CODPROV +""
          elementoProvincia = crearElementoAProvincia(nombreProv,codProv)
          elementoProvincia.addEventListener('click',e=>{
          municipiosDeUnaProvincia(codProv)

          })
          menuDeProvincias.appendChild(elementoProvincia)
        }})    
     }
     
  