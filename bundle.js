(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict"

let obtenerJsonDeApi = require('./obtenerJsonDeApi')
let municipiosDeUnaProvincia = require('./municipiosDeUnaProvinciaApi')

let elementoProvincia

 module.exports = function mostrarProvincias(url,menuDeProvincias) {
   obtenerJsonDeApi(url).then(json => {
    
     for(let provincia  of json.provincias){
          //console.log(provincia.NOMBRE_PROVINCIA +'--------'),
          elementoProvincia =document.createElement('a')
          elementoProvincia.setAttribute('href','#')
          elementoProvincia.classList.add('dropdown-item')
          elementoProvincia.innerText = provincia.NOMBRE_PROVINCIA
          //anade para que siempre devuelve string
          let codProv = provincia.CODPROV +""
          elementoProvincia.setAttribute("codigo", provincia.CODPROV)
          elementoProvincia.addEventListener('click',e=>{console.log('clicki'),municipiosDeUnaProvincia(codProv)})
          menuDeProvincias.appendChild(elementoProvincia)

     }
     
   })

 }
},{"./municipiosDeUnaProvinciaApi":2,"./obtenerJsonDeApi":3}],2:[function(require,module,exports){
"use strict"

let obtenerJsonDeApi = require('./obtenerJsonDeApi')

module.exports = function municipiosDeUnaProvincia(urlcodProv){
    let elementoMunicipio;
    let menuDeMunicipios = document.getElementById('exampleFormControlSelect1')

    const urlPrefix = 'https://www.el-tiempo.net/api/json/v2/provincias/'
    const urlPostfix = '/municipios'
    let urlMunicipiosDeUnaProvincia = urlPrefix+urlcodProv+urlPostfix
    //console.log(urlMunicipiosDeUnaProvincia)
    obtenerJsonDeApi(urlMunicipiosDeUnaProvincia).then(json => {

        //cuanto se elige una nueva provincia los municipios se cargan de nuevo 
        menuDeMunicipios.innerHTML = ''
        for(let municipio  of json.municipios){

            //console.log(municipio)
            elementoMunicipio =document.createElement('option')
            elementoMunicipio.innerText = municipio.NOMBRE
            menuDeMunicipios.appendChild(elementoMunicipio)


        }})
}
},{"./obtenerJsonDeApi":3}],3:[function(require,module,exports){
"use strict"


module.exports =function obtenerJsonDeApi(url) {
    return fetch(url).then(response => response.json());
  }
},{}],4:[function(require,module,exports){
"use strict"


let mostrarLasProvincias= require('./api/ProvinciasApi')
const urlProvincias = 'https://www.el-tiempo.net/api/json/v2/provincias'
let elementosProvincia



//cargar todo el DOM
document.addEventListener("DOMContentLoaded", function() {

let menuDeProvincias =  document.getElementById('drop-menu')
mostrarLasProvincias(urlProvincias, menuDeProvincias)
 

  

  })
 







   
},{"./api/ProvinciasApi":1}]},{},[4]);
