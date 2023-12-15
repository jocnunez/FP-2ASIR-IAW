//En cada ejercicio crearemos un nuevo bloque (con { y }) donde escribiremos nuestro código
//Así podemos usar variables con el mismo nombre en diferentes ejercicios sin que haya ningún conflicto

//Importante: para los ejercicios 5 y 6 utiliza un único bloque, ya que comparten código.
//Importante: lo mismo para los ejercicios 7 y 8.

//Ejercicio 1
{
    //Escribe en la consola un mensaje como este al principio de cada bloque de ejercicio
    let a = 25
    let b = a
    a = 40
    console.log(b) //25

    let c = [25]
    let d = c
    c[0] = 40 
    console.log(JSON.stringify(d))
}

//Ejercicio 2
{
    let var1 = 25
    let var2 = "Un texto"
    let var3 = false
    let var4 = { key: "value" }
    let var5 = null
    console.log("var 1: ", typeof var1)
    console.log("var 2: ", typeof var2)
    console.log("var 3: ", typeof var3)
    console.log("var 4: ", typeof var4)
    console.log("var 5: ", typeof var5)
}

//Ejercicio 3 ...
{
    console.log("Ejercicio 3")
    elButton = document.getElementById("calcularIVA")
    elInput = document.getElementById("precioIVA")
    elOutput = document.getElementById("resultadoIVA")

    elButton.addEventListener("click", calcularIVA)
    function calcularIVA() {
        elOutput.innerHTML = elInput.value * 0.21
    }
}

{
    console.log("Ejercicio 4")
    elText = document.getElementById("texto")
    elChars = document.getElementById("numCaracteres")

    elText.addEventListener("input", getChars)
    function getChars() {
        elChars.innerHTML = elText.value.length
    }
}

{
    console.log("Ejercicio 5 y 6")
    elList = document.getElementById("list")
    elButtonAdd = document.getElementById("addNumber")
    item = document.getElementById("item")
    max = document.getElementById("max")

    let lista = []
    elButtonAdd.addEventListener("click", addElement)

    function addElement() {
        lista.push(item.value)
        elList.innerHTML = JSON.stringify(lista)
        maxValue = 0
        lista.forEach((item) =>  {
            if (Number(item) > maxValue) {
                maxValue = Number(item)
            }
            max.innerHTML = maxValue
        })
    }
}

{
    console.log("Ejercicios 7 y 8")

    elName = document.getElementById("name")
    elSurname = document.getElementById("surname")
    elAge = document.getElementById("age")
    elTotal = document.getElementById("total")
    elButton = document.getElementById("addItem")
    elButton.addEventListener("click", addItem)

    let local = localStorage.getItem("lista")
    if (local) {
        lista = JSON.parse(local)
    } else {
        lista = []
    }
    total.innerHTML = lista.length

    function addItem(event) {
        let item = {}
        item.name = elName.value
        item.apellidos = elSurname.value
        item.edad = elAge.value
        lista.push(item)
        total.innerHTML = lista.length
        localStorage.setItem("lista", JSON.stringify(lista))
    }
}

