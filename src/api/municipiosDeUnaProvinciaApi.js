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