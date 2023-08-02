const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const multiply = function(a, b){
    return a * b
}
const divide = function(a, b){
    return a / b
}

const firstNumber = ''
const secondNumber = ''
const operator = ''

function operate (operator, firstNumber, secondNumber){
    const functions = {
        "+": add,
        "-": subtract,
        "*": multiply,
        "/": divide,
    }
    if (!functions.hasOwnProperty(operator)){
        return NaN
    }
    return functions[operator](firstNumber,secondNumber)
}

let displayValue = "";
