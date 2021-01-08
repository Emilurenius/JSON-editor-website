import {textFormat} from "/static/javascript/codeify.js"
const JSONeditor = document.getElementById("JSONeditor")
const createJSONbutton = document.getElementById("CreateJSONelement")

JSONeditor.addEventListener("input", updateJsonData)

function updateJsonData() {
    const obj = {
        // JSON data generation goes here
    };
    const data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
    const a = document.getElementById("saveJSON")
    a.href = 'data:' + data;
    a.download = 'data.json';
}

function createJSONelement() {
    const container = document.createElement("div")
    container.classList.add("Content-box")

    const nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.placeholder = "name"
    container.appendChild(nameInput)

    const valueInput = document.createElement("input")
    valueInput.type = "text"
    valueInput.placeholder = "value"
    container.appendChild(valueInput)

    JSONeditor.appendChild(container)
}

createJSONbutton.addEventListener("click", createJSONelement)