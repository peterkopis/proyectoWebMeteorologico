"use strict"


module.exports =function obtenerJsonDeApi(url) {
    return fetch(url).then(response => response.json());
  }