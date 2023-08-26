// const add = function(a, b) {
// 	return a + b
// };

// const subtract = function(a, b) {
// 	return a - b
// };

// const multiply = function(a, b){
//     return a * b
// }
// const divide = function(a, b){
//     return a / b
// }

// const firstNumber = ''
// const secondNumber = ''
// const operator = ''

// function operate (operator, firstNumber, secondNumber){
//     const functions = {
//         "+": add,
//         "-": subtract,
//         "*": multiply,
//         "/": divide,
//     }
//     if (!functions.hasOwnProperty(operator)){
//         return NaN
//     }
//     return functions[operator](firstNumber,secondNumber)
// }

// (function buttonClicking(){
// const numberButtons = document.querySelectorAll('.number')
// const operationButtons = document.querySelectorAll('.operation')
// const equalsButton = document.querySelector('.equals')
// const clearButton = document.querySelector('.clear')
// const display = document.querySelector('#display')

// numberButtons.forEach(function(button){
//     button.addEventListener('click', function(e){
//         let value = e.target.dataset.num
//         display.value += value
//     })
// })

// })()
// buttonClicking()
(function(){

    let screen = document.querySelector('.screen')
    let buttons = document.querySelectorAll('.btn')
    let clear = document.querySelector('.btn-clear')
    let equal = document.querySelector('.btn-equal')

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    equal.addEventListener('click', function(e){
        if( screen.value === ""){
            screen.value = ""
        }else{
            let answer = eval(screen.value)
            screen.value = answer
        }
    })

    clear.addEventListener('click',function(e){
        screen.value = ""
    })
})()