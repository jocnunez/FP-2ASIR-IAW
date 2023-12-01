///let principal = 100

///document.getElementById("botonEnviar").onclick =
///function saludar() {
///    let resultado = document.getElementById("resultado")
///    let nombre = document.getElementById("campoNombre")
///    resultado.innerHTML = nombre.value
///}

function factorial(n) {
    let i = n
    let resol = 1
    while (i >= 1) {
        resol = resol * i
        i = i - 1
    }
    return resol
}

function suma(lista) {
    let resultado = 0;
    for (let i = 0; i < lista.lenght; i = i + 1) {
        resultado = resultado + lista[i]
    }
    return resultado;
}

let numeros = [120,200,5,48,190]

console.log(suma(numeros))