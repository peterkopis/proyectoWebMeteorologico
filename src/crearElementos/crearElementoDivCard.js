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