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