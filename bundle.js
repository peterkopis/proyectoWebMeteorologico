(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict"



let elementoPorvincia



function obtenerJson(url) {
   return fetch(url).then(response => response.json());
 }
 
 
 module.exports = function mostrarProvincias(url,menuDeProvincias) {
   obtenerJson(url).then(json => {
     
     for(let provincia of json.provincias){
          console.log(provincia.NOMBRE_PROVINCIA +'--------'),
          elementoPorvincia =document.createElement('a')
          elementoPorvincia.classList.add('dropdown-item')
          elementoPorvincia.innerText = provincia.NOMBRE_PROVINCIA
          elementoPorvincia.setAttribute("codigo", provincia.CODPROV);
         // menuDeProvincias = document.getElementById('drop-menu')
          menuDeProvincias.appendChild(elementoPorvincia)

     }
     
   });
 }
},{}],2:[function(require,module,exports){
"use strict"


let mostrarLasProvincias= require('./api/ProvinciasApi')
const urlProvincias = 'https://www.el-tiempo.net/api/json/v2/provincias'



console.log("el fichero main")

document.addEventListener("DOMContentLoaded", function() {

  let menuDeProvincias =  document.getElementById('drop-menu')
    mostrarLasProvincias(urlProvincias, menuDeProvincias)

    //let escocherLasProvincias = document.getElementById('drop-menu');
    escocherLasProvincias.addEventListener('click', (e)=>{console.log('hecho click'), aElement = document.createElement('a'),

    aElement.classList.add('dropdown-item'),escocherLasProvincias.appendChild(aElement)},
     );
    
  });
 







   
},{"./api/ProvinciasApi":1}]},{},[2]);
