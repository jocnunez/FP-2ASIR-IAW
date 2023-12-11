//En cada ejercicio crearemos un nuevo bloque (con { y }) donde escribiremos nuestro código
//Así podemos usar variables con el mismo nombre en diferentes ejercicios sin que haya ningún conflicto

//Importante: para los ejercicios 5 y 6 utiliza un único bloque, ya que comparten código.
//Importante: lo mismo para los ejercicios 7 y 8.

//Ejercicio 1
{
    console.log("Ejercicio 1");

    let a = 25
    let b = a
    a = 40
    console.log(b)
    //El valor de la variable "b" es 25 debido a que "b" aún retiene el valor original de la variable "a" y este no se actualiza al cambiar el valor de "a" posteriormente.

    let c = [25]
    let d = c
    c = [40]
    console.log(d)
    //Aquí estamos asignando un array a una variable, así que cuando modificamos el contenido del array al que apunta "c" al final, "d" sigue apuntando al array original "[25]".
}

//Ejercicio 2
{
    console.log("Ejercicio 2");

    let var1 = 25
    let var2 = "Un texto"
    let var3 = false
    let var4 = { key: "value" }
    let var5 = null

    function Tipovalor(parametro) {
        console.log(typeof parametro)
    }
        
    Tipovalor(var1); //number
    Tipovalor(var2); //string
    Tipovalor(var3); //boolean
    Tipovalor(var4); //object
    Tipovalor(var5); //object
}

//Ejercicio 3
{
    console.log("Ejercicio 3");

    function calcularIVA(precio) {
        return precio * 0.21
    }
    
    function onClickCalcularIVA() {
        let precioInput = document.getElementById("precioIVA")
        let precio = precioInput.value

        let iva = calcularIVA(precio)

        let resultado = document.getElementById("resultadoIVA")
        resultado.innerHTML = iva
    }
    
    let botonCalcularIVA = document.getElementById("calcularIVA")
    botonCalcularIVA.addEventListener("click", onClickCalcularIVA)
}

//Ejercicio 4
{
    console.log("Ejercicio 4");

    function contar() {
        let textoInput = document.getElementById("texto")
        let texto = textoInput.value

        let numCarac = document.getElementById("numCaracteres")
        numCarac.innerHTML = texto.length
    }
    
    let textoInput = document.getElementById("texto")
    textoInput.addEventListener("input", contar)
}

//Ejercicio 5 y 6
{
    console.log("Ejercicio 5 y 6");

    let listarray = []

    function actualizarListaEnPantalla() {
        let listaDiv = document.getElementById("list")
        listaDiv.innerHTML = JSON.stringify(listarray)
    }

    function actualizarValorMaximo() {                  //Ejercicio 6
        valorMaximo = Math.max(...listarray)            //Ejercicio 6  
        let maxNum = document.getElementById("max")     //Ejercicio 6
        maxNum.innerHTML = valorMaximo                  //Ejercicio 6
    }                                                   //Ejercicio 6

    function agregarNumero() {
        let numeroInput = document.getElementById("item")
        let numero = parseInt(numeroInput.value)

        if (!isNaN(numero)) {
            listarray.push(numero)
            actualizarValorMaximo()                      //Ejercicio 6
            actualizarListaEnPantalla()
        }

        numeroInput.value = ""
    }

    let botonAddNumber = document.getElementById("addNumber")
    botonAddNumber.addEventListener("click", agregarNumero)
}

//Ejercicio 7 y 8
{
    console.log("Ejercicio 7 y 8");

    let listobjeto = JSON.parse(localStorage.getItem('listaobjeto')) || []      //Ejercicio 8

    function agregarObjeto() {
        let nombre = document.getElementById("name").value
        let apellidos = document.getElementById("surname").value
        let edad = document.getElementById("age").value

        let nuevoObjeto = {
            nombre: nombre,
            apellidos: apellidos,
            edad: edad
        }

        listobjeto.push(nuevoObjeto)

        localStorage.setItem('listaobjeto', JSON.stringify(listobjeto))          //Ejercicio 8

        let resultado = document.getElementById("total")
        resultado.innerHTML = listobjeto.length
        
        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("age").value = "";
    }

    let botonAddItem = document.getElementById("addItem")
    botonAddItem.addEventListener("click", agregarObjeto)
}
