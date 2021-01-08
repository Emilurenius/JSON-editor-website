import {textFormat} from "/static/javascript/codeify.js"
const codeifyOUT = document.getElementById("codeifyOUT")
const codeifyIN = document.getElementById("codeifyIN")
const textArea = document.getElementById("textarea")

codeifyIN.addEventListener("input", updateJsonData)

function updateJsonData() {
    codeifyOUT.innerHTML = ""

    let text = textFormat(textArea.value, "Body-Text-alignLeft")
    //text.id = "codeifyOUTtext"
    codeifyOUT.appendChild(text)

    const obj = {
        text: textArea.value,
        moreData: "bøgeri"
    };
    const data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
    const a = document.getElementById("saveJSON")
    a.href = 'data:' + data;
    a.download = 'data.json';
    console.log("bøgeri")
}