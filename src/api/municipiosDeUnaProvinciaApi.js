"use strict"

let obtenerJsonDeApi = require('./obtenerJsonDeApi')
let unMunicipioTemperaturaApi = require('./unMunicipioTemperaturaApi')

module.exports = function municipiosDeUnaProvincia(urlcodProv){
    //let elementoMunicipio 
    //let idMunicipio
    let menuDeMunicipios = document.getElementById('exampleFormControlSelect1')
   // let idProvinciaDeElegidoMunicipio

    const urlPrefix = 'https://www.el-tiempo.net/api/json/v2/provincias/'
    const urlPostfix = '/municipios'
    let urlMunicipiosDeUnaProvincia = urlPrefix+urlcodProv+urlPostfix
    //console.log(urlMunicipiosDeUnaProvincia)
    obtenerJsonDeApi(urlMunicipiosDeUnaProvincia).then(json => {

        //cuanto se elige una nueva provincia los municipios se cargan de nuevo 
        menuDeMunicipios.innerHTML = ''
        /*while(menuDeMunicipios.hasChildNodes()){
            menuDeMunicipios.removeChild(menuDeMunicipios.firstChild)
        }*/
        for(let municipio  of json.municipios){

            //console.log(municipio)
            let elementoMunicipio =document.createElement('option')
            elementoMunicipio.innerText = municipio.NOMBRE
            //Que devuelve siempre string
            let idMunicipio = municipio.CODIGOINE + ''
            //El [ID] son los primeros cinco dígitos del dato CODIGOINE
            idMunicipio = idMunicipio.substring(0,5)
            elementoMunicipio.setAttribute("value", idMunicipio)
           let  idProvinciaDeElegidoMunicipio = municipio.CODPROV 
           idProvinciaDeElegidoMunicipio += ''
            elementoMunicipio.setAttribute("codigoProv", idProvinciaDeElegidoMunicipio)
           
            
            
            menuDeMunicipios.appendChild(elementoMunicipio)
            //elementoMunicipio.addEventListener('click',()=>console.log('bum'))
            //elementoMunicipio.addEventListener('click',e =>{e.preventDefault,console.log('buu'),unMunicipioTemperaturaApi(idProvinciaDeElegidoMunicipio,idMunicipio)})
            


        }
    })
        /*let idProvinciaDeElegidoMunicipio = menuDeMunicipios.options[menuDeMunicipios.selectedIndex].getAttribute("codigoProv")
         let idMunicipio = menuDeMunicipios.options[menuDeMunicipios.selectedIndex].getAttribute("value")*/
       // menuDeMunicipios.addEventListener('change',e=>{/*unMunicipioTemperaturaApi(idProvinciaDeElegidoMunicipio,idMunicipio)*/console.log('hu')})
   
}