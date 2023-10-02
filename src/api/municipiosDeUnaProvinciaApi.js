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

            //Que devuelve siempre string,  en caso que en la api en futuro se va cambiar el string por el numero
            let nombreMunic = municipio.NOMBRE
            let idMunicipio = municipio.CODIGOINE + ''
            //El [ID] son los primeros cinco dígitos del dato CODIGOINE
            idMunicipio = idMunicipio.substring(0,5)
            let  idProvinciaDeElegidoMunicipio = municipio.CODPROV 
            //Que devuelve siempre string,  en caso que en la api en futuro se va cambiar el string por el numero
           idProvinciaDeElegidoMunicipio += ''
            elementoMunicipio.setAttribute("codigoProv", idProvinciaDeElegidoMunicipio)
            elementoMunicipio = crearElementoMunicipio(nombreMunic,idMunicipio,idProvinciaDeElegidoMunicipio)
            menuDeMunicipios.appendChild(elementoMunicipio)
        }
    })
       
}