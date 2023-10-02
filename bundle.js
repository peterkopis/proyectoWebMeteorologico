(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict"

const obtenerJsonDeApi = require('./obtenerJsonDeApi')
const municipiosDeUnaProvincia = require('./municipiosDeUnaProvinciaApi')
const crearElementoAProvincia = require('../crearElementos/crearElementoAProvincia')

let elementoProvincia

 module.exports = function mostrarProvincias(url,menuDeProvincias) {
   obtenerJsonDeApi(url).then(json => {
    
     for(let provincia  of json.provincias){
           
          let nombreProv = provincia.NOMBRE_PROVINCIA
          //anade un string vacio, para que siempre devuelve string
          let codProv = provincia.CODPROV +""
          elementoProvincia = crearElementoAProvincia(nombreProv,codProv)
          elementoProvincia.addEventListener('click',e=>{
          municipiosDeUnaProvincia(codProv)

          })
          menuDeProvincias.appendChild(elementoProvincia)
        }})    
     }
     
  
},{"../crearElementos/crearElementoAProvincia":5,"./municipiosDeUnaProvinciaApi":2,"./obtenerJsonDeApi":3}],2:[function(require,module,exports){
"use strict"

const obtenerJsonDeApi = require('./obtenerJsonDeApi')
const unMunicipioTemperaturaApi = require('./unMunicipioTemperaturaApi')
const crearElementoMunicipio = require('../crearElementos/crearElementoMunicipio') 

module.exports = function municipiosDeUnaProvincia(urlcodProv){
     
    
    const menuDeMunicipios = document.getElementById('exampleFormControlSelect1')
    let elementoMunicipio

    const urlPrefix = 'https://www.el-tiempo.net/api/json/v2/provincias/'
    const urlPostfix = '/municipios'
    let urlMunicipiosDeUnaProvincia = urlPrefix+urlcodProv+urlPostfix
    
    obtenerJsonDeApi(urlMunicipiosDeUnaProvincia).then(json => {

        //cuanto se elige una nueva provincia los municipios se cargan de nuevo 
        menuDeMunicipios.innerHTML = ''
        //el primer valor en los optiones, solo para cambiar valor
        elementoMunicipio =document.createElement('option')
        elementoMunicipio.innerText = 'MUNICIPIOS'
        menuDeMunicipios.appendChild(elementoMunicipio)

        
        for(let municipio  of json.municipios){

            //Que devuelve siempre string
            let nombreMunic = municipio.NOMBRE
            let idMunicipio = municipio.CODIGOINE + ''
            //El [ID] son los primeros cinco dígitos del dato CODIGOINE
            idMunicipio = idMunicipio.substring(0,5)
            let  idProvinciaDeElegidoMunicipio = municipio.CODPROV 
           idProvinciaDeElegidoMunicipio += ''
            elementoMunicipio.setAttribute("codigoProv", idProvinciaDeElegidoMunicipio)
            elementoMunicipio = crearElementoMunicipio(nombreMunic,idMunicipio,idProvinciaDeElegidoMunicipio)
            menuDeMunicipios.appendChild(elementoMunicipio)
        }
    })
       
}
},{"../crearElementos/crearElementoMunicipio":7,"./obtenerJsonDeApi":3,"./unMunicipioTemperaturaApi":4}],3:[function(require,module,exports){
"use strict"


module.exports =function obtenerJsonDeApi(url) {
    return fetch(url).then(response => response.json());
  }
},{}],4:[function(require,module,exports){
"use strict"

const obtenerJsonDeApi = require('./obtenerJsonDeApi')
const crearElementosUl = require('../crearElementos/crearElementoUl')
const crearElementoDivCard = require('../crearElementos/crearElementoDivCard')


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
                        let metadescripcion = json.metadescripcion
                        let fecha = json.fecha
                        let divCardBody = crearElementoDivCard(metadescripcion,fecha)
                        
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
},{"../crearElementos/crearElementoDivCard":6,"../crearElementos/crearElementoUl":8,"./obtenerJsonDeApi":3}],5:[function(require,module,exports){
"use strict"

module.exports = function crearElementoAProvincia(nombreProvincia,codprov){

    let elementoProvincia =document.createElement('a')
    elementoProvincia.setAttribute('href','#')
    elementoProvincia.classList.add('dropdown-item')
    elementoProvincia.innerText = nombreProvincia
    elementoProvincia.setAttribute("codigo", codprov)

    return elementoProvincia
}
},{}],6:[function(require,module,exports){
"use strict"

module.exports = function crearElementoDivCard(metadescription,fecha){

    let elementoNombreDeMunicipio = document.createElement('h5')
    elementoNombreDeMunicipio.classList.add('card-title')
    elementoNombreDeMunicipio.innerText = metadescription
    let divCardBody = document.createElement('div')
    divCardBody.classList.add('card-body')
    divCardBody.appendChild(elementoNombreDeMunicipio)
    let cardText = document.createElement('p')
    cardText.classList.add('card-body')
    cardText.innerText = 'La fecha: ' + fecha
    divCardBody.appendChild(cardText)
    return divCardBody

}
},{}],7:[function(require,module,exports){
"use strict"

module.exports = function crearElementoMunicipio(municipioNombre,idMunicipio,idProvinciaDeElegidoMunicipio){

    let elementoMunicipio =document.createElement('option')
        elementoMunicipio.innerText = municipioNombre
        elementoMunicipio.setAttribute("value", idMunicipio)
        elementoMunicipio.setAttribute("codigoProv", idProvinciaDeElegidoMunicipio)

        return elementoMunicipio
}
},{}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
"use strict"


const mostrarProvincias= require('./api/ProvinciasApi')
const unMunicipioTemperaturaApi = require('./api/unMunicipioTemperaturaApi')
const urlProvincias = 'https://www.el-tiempo.net/api/json/v2/provincias'
let elementosProvincia
let contarLosUsos = 0




//cargar todo el DOM
document.addEventListener("DOMContentLoaded", function() {

const menuDeMunicipios = document.getElementById('exampleFormControlSelect1')
const menuDeProvincias =  document.getElementById('drop-menu')

mostrarProvincias(urlProvincias, menuDeProvincias)


menuDeMunicipios.addEventListener('change',e=>{
  contarLosUsos++
  if(contarLosUsos > 5){
    alert('Para más suscribete al Premium')
    document.write('Suscribete al Premium :)')
    throw new Error("El limite de usos gratuitos!");
  }
let idProvinciaDeElegidoMunicipio = menuDeMunicipios.options[menuDeMunicipios.selectedIndex].getAttribute("codigoProv")
let idMunicipio = menuDeMunicipios.options[menuDeMunicipios.selectedIndex].getAttribute("value")
unMunicipioTemperaturaApi(idProvinciaDeElegidoMunicipio,idMunicipio)
})
 

  

  })
 







   
},{"./api/ProvinciasApi":1,"./api/unMunicipioTemperaturaApi":4}]},{},[9]);
