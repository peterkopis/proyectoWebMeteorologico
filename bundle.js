(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
     
  
},{"./municipiosDeUnaProvinciaApi":2,"./obtenerJsonDeApi":3}],2:[function(require,module,exports){
"use strict"

let obtenerJsonDeApi = require('./obtenerJsonDeApi')
let unMunicipioTemperaturaApi = require('./unMunicipioTemperaturaApi')

module.exports = function municipiosDeUnaProvincia(urlcodProv){
    //let elementoMunicipio 
    //let idMunicipio
    let menuDeMunicipios = document.getElementById('exampleFormControlSelect1')
   // let idProvinciaDeElegidoMunicipio

    const urlPrefix = 'https://www.el-tiempo.net/api/json/v2/provincias/'
    const urlPostfix = '/municipios'
    let urlMunicipiosDeUnaProvincia = urlPrefix+urlcodProv+urlPostfix
    //console.log(urlMunicipiosDeUnaProvincia)
    obtenerJsonDeApi(urlMunicipiosDeUnaProvincia).then(json => {

        //cuanto se elige una nueva provincia los municipios se cargan de nuevo 
        menuDeMunicipios.innerHTML = ''
        /*while(menuDeMunicipios.hasChildNodes()){
            menuDeMunicipios.removeChild(menuDeMunicipios.firstChild)
        }*/
        for(let municipio  of json.municipios){

            //console.log(municipio)
            let elementoMunicipio =document.createElement('option')
            elementoMunicipio.innerText = municipio.NOMBRE
            //Que devuelve siempre string
            let idMunicipio = municipio.CODIGOINE + ''
            //El [ID] son los primeros cinco dígitos del dato CODIGOINE
            idMunicipio = idMunicipio.substring(0,5)
            elementoMunicipio.setAttribute("value", idMunicipio)
           let  idProvinciaDeElegidoMunicipio = municipio.CODPROV 
           idProvinciaDeElegidoMunicipio += ''
            elementoMunicipio.setAttribute("codigoProv", idProvinciaDeElegidoMunicipio)
           
            
            
            menuDeMunicipios.appendChild(elementoMunicipio)
            //elementoMunicipio.addEventListener('click',()=>console.log('bum'))
            //elementoMunicipio.addEventListener('click',e =>{e.preventDefault,console.log('buu'),unMunicipioTemperaturaApi(idProvinciaDeElegidoMunicipio,idMunicipio)})
            


        }
    })
        /*let idProvinciaDeElegidoMunicipio = menuDeMunicipios.options[menuDeMunicipios.selectedIndex].getAttribute("codigoProv")
         let idMunicipio = menuDeMunicipios.options[menuDeMunicipios.selectedIndex].getAttribute("value")*/
       // menuDeMunicipios.addEventListener('change',e=>{/*unMunicipioTemperaturaApi(idProvinciaDeElegidoMunicipio,idMunicipio)*/console.log('hu')})
   
}
},{"./obtenerJsonDeApi":3,"./unMunicipioTemperaturaApi":4}],3:[function(require,module,exports){
"use strict"


module.exports =function obtenerJsonDeApi(url) {
    return fetch(url).then(response => response.json());
  }
},{}],4:[function(require,module,exports){
"use strict"

module.exports = function unMunicipioTemperaturaApi(idProvinciaDeElegidoMunicipio,idMunicipio){

        const urlPrefix = 'https://www.el-tiempo.net/api/json/v2/provincias/'
        const urlBetween = '/municipios/'
        let urlDeMunicipioTemperatura =urlPrefix + idProvinciaDeElegidoMunicipio + urlBetween + idMunicipio
        console.log (urlDeMunicipioTemperatura)
}
},{}],5:[function(require,module,exports){
"use strict"


const mostrarProvincias= require('./api/ProvinciasApi')
const unMunicipioTemperaturaApi = require('./api/unMunicipioTemperaturaApi')
const urlProvincias = 'https://www.el-tiempo.net/api/json/v2/provincias'
let elementosProvincia




//cargar todo el DOM
document.addEventListener("DOMContentLoaded", function() {

let menuDeMunicipios = document.getElementById('exampleFormControlSelect1')
let menuDeProvincias =  document.getElementById('drop-menu')

mostrarProvincias(urlProvincias, menuDeProvincias)


menuDeMunicipios.addEventListener('change',e=>{
let idProvinciaDeElegidoMunicipio = menuDeMunicipios.options[menuDeMunicipios.selectedIndex].getAttribute("codigoProv")
let idMunicipio = menuDeMunicipios.options[menuDeMunicipios.selectedIndex].getAttribute("value")
unMunicipioTemperaturaApi(idProvinciaDeElegidoMunicipio,idMunicipio)
})
 

  

  })
 







   
},{"./api/ProvinciasApi":1,"./api/unMunicipioTemperaturaApi":4}]},{},[5]);
