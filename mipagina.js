console.log("Hola mundo")

document.addEventListener("DOMContentLoaded", init)

let msg = "Hola mundo"

function init(event) {
    let title = document.getElementById("title")
    console.log(title)
    title.style.color = "red"
    title.style.backgroundColor = "blue"
    title.innerHTML = msg
    loadData("data.json")
}

function loadData(url) {
    let json 
    fetch(url)
        .then(response => response.json())
        .then(data => Hobbies(data))
}

function Hobbies(json) {
    console.log(json)
}