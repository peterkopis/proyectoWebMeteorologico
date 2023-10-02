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