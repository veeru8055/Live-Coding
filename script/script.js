function dis(val) {
    document.getElementById("answer").value += val
    document.getElementById("label").innerHTML = document.getElementById("answer").value
}

//function that evaluates the digit and return answer 
function solve() {
    let x = document.getElementById("answer").value
    let y = eval(x)
    document.getElementById("answer").value = y
    let result = document.createElement("div")
    result.setAttribute("id", "result")
    result.appendChild(document.createTextNode("Ans : " + y))
    document.getElementById("label").appendChild(result)
}

//function that clear the display 
function clr() {
    document.getElementById("answer").value = ""
    document.getElementById("label").innerHTML = ""
}