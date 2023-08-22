let firstNumber = document.getElementById("display1")
let secondNumber = document.getElementById("display2")
let result = document.getElementById("solution")


function add(){
    result.textContent = "Solution : "
    result.textContent+=Number(firstNumber.value) + Number(secondNumber.value)
}
function subtract(){
    result.textContent = "Solution : "
    result.textContent+=Number(firstNumber.value) - Number(secondNumber.value)
}
function multiply(){
    result.textContent = "Solution : "
    result.textContent+=Number(firstNumber.value) * Number(secondNumber.value)
    
}
function divide(){
    result.textContent = "Solution : "
    if (Number(firstNumber.value)< Number(secondNumber.value)){
        result.textContent += "0"
    
    }
    else {
        result.textContent+=(Number(firstNumber.value)/Number(secondNumber.value)).toFixed(2)
    }
}