let listaTareas = JSON.parse(localStorage.getItem('listaTareas')) || []

function agregarTarea() {
    let tareaInput = document.getElementById("task")
    let nuevaTarea = tareaInput.value;

    if (nuevaTarea.trim() !== "") {
        let nuevaTareaObjeto = {
            texto: nuevaTarea,
            completada: false
        }

        listaTareas.push(nuevaTareaObjeto)

        localStorage.setItem('listaTareas', JSON.stringify(listaTareas))

        console.log("Lista de Tareas:", listaTareas)

        tareaInput.value = ""

        Listaconsola()
    }
}

function Listaconsola() {
    let taskList = document.getElementById("taskList")

    taskList.innerHTML = ""

    listaTareas.forEach(function(tarea) {
        let label = document.createElement("label")
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = tarea.completada

        checkbox.addEventListener("change", function() {
            tarea.completada = !tarea.completada
            localStorage.setItem('listaTareas', JSON.stringify(listaTareas))
            console.log("Lista de Tareas:", listaTareas)
        })

        let span = document.createElement("span")
        span.className = "checkable"
        span.textContent = tarea.texto

        label.appendChild(checkbox)
        label.appendChild(span)
        taskList.appendChild(label)
    })
}

let botonAddTask = document.getElementById("addTask")
botonAddTask.addEventListener("click", agregarTarea)

Listaconsola()
