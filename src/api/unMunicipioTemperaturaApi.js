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