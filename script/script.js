function dis(val) {
    document.getElementById("answer").value += val
}

//function that evaluates the digit and return answer 
function solve() {
    let x = document.getElementById("answer").value
    let y = eval(x)
    document.getElementById("answer").value = y
}

//function that clear the display 
function clr() {
    document.getElementById("answer").value = ""
}