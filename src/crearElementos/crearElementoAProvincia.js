"use strict"

module.exports = function crearElementoAProvincia(nombreProvincia,codprov){

    let elementoProvincia =document.createElement('a')
    elementoProvincia.setAttribute('href','#')
    elementoProvincia.classList.add('dropdown-item')
    elementoProvincia.innerText = nombreProvincia
    elementoProvincia.setAttribute("codigo", codprov)

    return elementoProvincia
}