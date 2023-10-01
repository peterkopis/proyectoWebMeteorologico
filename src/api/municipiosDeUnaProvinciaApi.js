"use strict"

let obtenerJsonDeApi = require('./obtenerJsonDeApi')

module.exports = function municipiosDeUnaProvincia(urlcodProv){

    const urlPrefix = 'https://www.el-tiempo.net/api/json/v2/provincias/'
    const urlPostfix = '/municipios'
    let urlMunicipiosDeUnaProvincia = urlPrefix+urlcodProv+urlPostfix
    console.log(urlMunicipiosDeUnaProvincia)
}