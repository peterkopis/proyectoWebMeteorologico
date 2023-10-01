"use strict"

module.exports = function unMunicipioTemperaturaApi(idProvinciaDeElegidoMunicipio,idMunicipio){

        const urlPrefix = 'https://www.el-tiempo.net/api/json/v2/provincias/'
        const urlBetween = '/municipios/'
        let urlDeMunicipioTemperatura =urlPrefix + idProvinciaDeElegidoMunicipio + urlBetween + idMunicipio
        console.log (urlDeMunicipioTemperatura)
}