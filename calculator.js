let displayedNumber = "";
let chosenOperator = [];
let storedNumber = "";
let result = "";
let index = 0;

const add = (num1, num2) => {
    let addition = JSON.parse(num1) + JSON.parse(num2);
    return Math.round(addition * 1000) / 1000
}

const subtract = (num1, num2) => {
    let subtraction = JSON.parse(num1) - JSON.parse(num2);
    return Math.round(subtraction * 1000) / 1000
}

const multiply = (num1, num2) => {
    let multiplication = JSON.parse(num1) * JSON.parse(num2);
    return Math.round(multiplication * 1000) / 1000
}

const divide = (num1, num2) => {
    if (num2 === "0") {
        storedNumber = "";
        displayedNumber = "";
        chosenOperator = [];
        index = 0;
        return "Nope";
    } else {
        let division = JSON.parse(num1) / JSON.parse(num2);
        return Math.round(division * 1000) / 1000
    }
}

const operate = (operator, num1, num2) => {
    const screen = document.querySelector('.display');
    if (!num1 || !num2) {
        screen.textContent = displayedNumber || storedNumber || "0";
    } else {
        if (operator === "+") {
            result = add(num1, num2);   
        } else if (operator === "-") {   
            result = subtract(num1, num2); 
        } else if (operator === "*") {   
            result = multiply(num1, num2); 
        } else {
            result = divide(num1, num2);
        }
        if (result !== "Nope") {
            storedNumber = result;
        } 
        screen.textContent = result;
        displayedNumber = "";
        return result;
    }    
}

const clearAll = () => {
    const screen = document.querySelector('.display');
    screen.textContent = "0";
    storedNumber = "";
    displayedNumber = "";
    chosenOperator = [];
    index = 0;
    result = "";
}

const undo = () => {
    if (displayedNumber !== "") {
        const screen = document.querySelector('.display');
        let index = displayedNumber.length;
        displayedNumber = displayedNumber.slice(0, index - 1);
        if (displayedNumber !== ""){
            screen.textContent = displayedNumber;
        } else {
            screen.textContent = "0";
        }        
    }
}

const decimal = (point) => {
    const screen = document.querySelector('.display');
    console.log(result);
    if (!screen.textContent.includes(point) && screen.textContent !== JSON.stringify(result)) {
        if (screen.textContent === "0") {
            displayedNumber = "0";
        }
        displayedNumber += point;
        screen.textContent = displayedNumber; 
    }  
}

const selectOperator = (operator) => {
    chosenOperator[index] = operator;
    if (storedNumber != "" && displayedNumber != "") {
        operate(chosenOperator[index - 1], storedNumber, displayedNumber);
    } else if (storedNumber != "") {      
        index++;
        return;
    } else {
        storedNumber = displayedNumber;
        displayedNumber = "";
    }
    index++;
}

const display = (digit) => {
    const screen = document.querySelector('.display');
    if (screen.textContent === "0") {
        displayedNumber = digit;
    } else {
        displayedNumber += digit;      
    }
    screen.textContent = displayedNumber;  
}