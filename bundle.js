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
     
    
    let menuDeMunicipios = document.getElementById('exampleFormControlSelect1')
    let elementoMunicipio

    const urlPrefix = 'https://www.el-tiempo.net/api/json/v2/provincias/'
    const urlPostfix = '/municipios'
    let urlMunicipiosDeUnaProvincia = urlPrefix+urlcodProv+urlPostfix
    //console.log(urlMunicipiosDeUnaProvincia)
    obtenerJsonDeApi(urlMunicipiosDeUnaProvincia).then(json => {

        //cuanto se elige una nueva provincia los municipios se cargan de nuevo 
        menuDeMunicipios.innerHTML = ''
        //el primer valor en los optiones, solo para cambiar valor
        elementoMunicipio =document.createElement('option')
        elementoMunicipio.innerText = 'MUNICIPIOS'
        menuDeMunicipios.appendChild(elementoMunicipio)

        
        for(let municipio  of json.municipios){

            //console.log(municipio)
            elementoMunicipio =document.createElement('option')
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

let obtenerJsonDeApi = require('./obtenerJsonDeApi')
let crearElementosUl = require('../crearElementos/crearElementoUl')


module.exports = function unMunicipioTemperaturaApi(idProvinciaDeElegidoMunicipio,idMunicipio){

        //primero limpia la tarjeta de previoso resultado
        let cartaTiempoDelMunicipio = document.getElementById('cartaTiempoDelMunicipio')
        cartaTiempoDelMunicipio.innerHTML = ''

        if((idProvinciaDeElegidoMunicipio != null) && (idMunicipio != null) ){


        const urlPrefix = 'https://www.el-tiempo.net/api/json/v2/provincias/'
        const urlBetween = '/municipios/'
        let urlDeMunicipioTemperatura =urlPrefix + idProvinciaDeElegidoMunicipio + urlBetween + idMunicipio
        console.log (urlDeMunicipioTemperatura)
        obtenerJsonDeApi(urlDeMunicipioTemperatura)
        .then(
                json => {

                        console.log(json.metadescripcion)
                        console.log(json.temperatura_actual)
                        
                        let elementoNombreDeMunicipio = document.createElement('h5')
                        elementoNombreDeMunicipio.classList.add('card-title')
                        elementoNombreDeMunicipio.innerText = json.metadescripcion
                        let divCardBody = document.createElement('div')
                        divCardBody.classList.add('card-body')
                        divCardBody.appendChild(elementoNombreDeMunicipio)

                        let cardText = document.createElement('p')
                        cardText.classList.add('card-body')
                        cardText.innerText = 'La fecha: ' + json.fecha
                        divCardBody.appendChild(cardText)
                        /*
                        //ul
                        let elementoUl = document.createElement('ul')
                        elementoUl.classList.add('list-group')
                        elementoUl.classList.add('list-group-flush')

                        let elementLi = document.createElement('li')
                        elementLi.classList.add('list-group-item')*/
                        let temperatura_actual = json.temperatura_actual
                        let estadoDelCielo = json.stateSky.description
                        let tempMin = json.temperaturas.min
                        let tempMax = json.temperaturas.max


                        cartaTiempoDelMunicipio.appendChild(divCardBody)
                        cartaTiempoDelMunicipio.appendChild(crearElementosUl(temperatura_actual,estadoDelCielo,tempMin,tempMax))







                }
        )

        }        
}
},{"../crearElementos/crearElementoUl":5,"./obtenerJsonDeApi":3}],5:[function(require,module,exports){
"use strict"

module.exports = function crearElementosUl(temperaturaActual,estadoDelCielo,tempMin,tempMax){

    //ul
    let elementoUl = document.createElement('ul')
        elementoUl.classList.add('list-group')
        elementoUl.classList.add('list-group-flush')

        //li
        for(let element = 0; element < 3; element++){
        
            let elementLi = document.createElement('li')
            elementLi.classList.add('list-group-item')
            
            //elementLi.innerHTML = 'bold'
            if(element < 1 ){
                
                elementLi.innerText = "temperatura_actual: " + temperaturaActual
            }
            else if (element == 1 ) {
                elementLi.innerText = "estado del cielo: " + estadoDelCielo
                
            } else{
                elementLi.innerText = "temperaturas hoy: min: "+ tempMin + " max: " + tempMax

            }
        
             elementoUl.appendChild(elementLi)

        }
        return elementoUl
    
}
},{}],6:[function(require,module,exports){
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
 







   
},{"./api/ProvinciasApi":1,"./api/unMunicipioTemperaturaApi":4}]},{},[6]);
