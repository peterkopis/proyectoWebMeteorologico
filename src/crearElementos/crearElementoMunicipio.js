"use strict"

module.exports = function crearElementoMunicipio(municipioNombre,idMunicipio,idProvinciaDeElegidoMunicipio){

    let elementoMunicipio =document.createElement('option')
        elementoMunicipio.innerText = municipioNombre
        elementoMunicipio.setAttribute("value", idMunicipio)
        elementoMunicipio.setAttribute("codigoProv", idProvinciaDeElegidoMunicipio)

        return elementoMunicipio
}