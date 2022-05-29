let output = "";


const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

const operate = (operator, num1, num2) => {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {   
        return subtract(num1, num2); 
    } else if (operator === "*") {   
        return multiply(num1, num2);  
    } else {
        return divide(num1, num2);
    
    }
}

const display = (number) => {
    const displayedNumber = document.querySelector('.display');
    output += number;
    displayedNumber.textContent = output;
    let storedNumber = output;
}