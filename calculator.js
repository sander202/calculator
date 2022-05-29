let output = "";
let chosenOperator = "";
let storedNumber = "";
let result = "";

const add = (num1, num2) => {
    return JSON.parse(num1) + JSON.parse(num2);
}

const subtract = (num1, num2) => {
    return JSON.parse(num1) - JSON.parse(num2);
}

const multiply = (num1, num2) => {
    return JSON.parse(num1) * JSON.parse(num2);
}

const divide = (num1, num2) => {
    let division = JSON.parse(num1) / JSON.parse(num2);
    return Math.round(division * 1000) / 1000
}

const operate = (operator, num1, num2) => {
    const displayedNumber = document.querySelector('.display');
    if (operator === "+") {
        result = add(num1, num2);
        displayedNumber.textContent = result;
    } else if (operator === "-") {   
        result = subtract(num1, num2); 
        displayedNumber.textContent = result;
    } else if (operator === "*") {   
        result = multiply(num1, num2); 
        displayedNumber.textContent = result; 
    } else {
        result = divide(num1, num2);
        displayedNumber.textContent = result;
    }
}

const clearScreen = () => {
    const displayedNumber = document.querySelector('.display');
    displayedNumber.textContent = "0";
    storedNumber = "";
    output = "";
    chosenOperator = "";
}

const selectOperator = (operator) => {
    const displayedNumber = document.querySelector('.display');
    displayedNumber.textContent = operator;
    chosenOperator = operator;
    storedNumber = output;
    output = "";
}

const display = (num) => {
    const displayedNumber = document.querySelector('.display');
    output += num;
    displayedNumber.textContent = output;
    
}