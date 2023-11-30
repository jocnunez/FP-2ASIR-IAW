import {secundaria} from './practica1.js'

let principal = 100

document.getElementById("botonEnviar").onclick =
function saludar() {
    let resultado = document.getElementById("resultado")
    let nombre = document.getElementById("campoNombre")
    resultado.innerHTML = nombre.value
}