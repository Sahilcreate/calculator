
let firstNumber = '';
let secondNumber = '0';
let currentOperator = '';

let display = document.querySelector('.display');
display.textContent = '0';

let date = document.querySelector('.date');
showDate();

function showDate() {
    let fullDate = new Date();
    let day = fullDate.getDate();
    let month = fullDate.getMonth();
    let year = fullDate.getFullYear();
    fullDate = `${day}/${month + 1}/${year}`;
    date.textContent = fullDate;
}

let buttonContainer = document.querySelector('.button-container');

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function calculation (firstNumber, secondNumber, operator) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    let result;

    switch (operator) {
        case '+':
            result = add(firstNumber, secondNumber);
            break;
        case '-':
            result = subtract(firstNumber, secondNumber);
            break;
        case '*':
            result = multiply(firstNumber, secondNumber);
            break;
        case '/':
            result = divide(firstNumber, secondNumber);
            break;
    }
    result = Math.round(result*100000)/100000;
    return result;
}

function setDisplayText(text) {
    text = `${text}`;
    if (text.length > 20) {
        clearOperation();
        alert(`i ain't paid enough for this ****, keep it's length below 21.`)
    } else {
        display.textContent = text;
    }
}

function numberOperation(number) {
    console.log('numberOperation');
    if (secondNumber === '0') {
        secondNumber = number;
        setDisplayText(secondNumber);
        
    } else {
        secondNumber = secondNumber.concat(number);
        setDisplayText(secondNumber);

    }
}

function operatorOperation(operator) {
    console.log('operatorOperation');
    if (firstNumber !== '' && secondNumber !== '') {
        secondNumber = `${calculation(firstNumber, secondNumber, currentOperator)}`;
        setDisplayText(secondNumber);
    }

    currentOperator = operator;

    if (secondNumber !== '') {
        firstNumber = secondNumber;
    }
    secondNumber = '0';
}

function decimalOperation() {
    console.log('decimalOperation');
    if (!secondNumber.includes('.')) {
        secondNumber = secondNumber.concat('.');
        setDisplayText(secondNumber);
    }
}

function equalOperation() {
    console.log('equalOperation');
    if (firstNumber !== '' && secondNumber !== '') {
        secondNumber = `${calculation(firstNumber, secondNumber, currentOperator)}`;
        setDisplayText(secondNumber);
        firstNumber = '';

    }
}

function clearOperation() {
    console.clear();
    console.log('clearOperation');
    firstNumber = '';
    secondNumber = '0';
    currentOperator = '';
    setDisplayText(0);
}

function deleteOperation() {
    console.log('deleteOperation');
    if (secondNumber.length === 1) {
        secondNumber = '0';   
    } else {
        secondNumber = secondNumber.slice(0, secondNumber.length - 1);
    }
    setDisplayText(secondNumber);
}

function oppositeOperation() {
    console.log('oppositeOperation');
    secondNumber = `${Number(secondNumber)*(-1)}`;
    setDisplayText(secondNumber);
}

function percentOperation() {
    console.log('percentOperation');
    secondNumber = `${Number(secondNumber)/100}`;
    setDisplayText(secondNumber);
}

function clickEventHandler (event) {
    let target = event.target;
    let classList = target.getAttribute('class');

    if (classList.includes('number-btn')) {
        numberOperation(target.textContent);

    } else if (classList.includes('operator-btn')) {
        operatorOperation(target.textContent);

    } else if (classList.includes('decimal-btn')) {
        decimalOperation();

    } else if (classList.includes('equal-btn')) {
        equalOperation();

    } else if (classList.includes('clear-btn')) {
        clearOperation();

    } else if (classList.includes('delete-btn')) {
        deleteOperation();

    } else if (classList.includes('opposite-btn')) {
        oppositeOperation();

    } else if (classList.includes('percent-btn')) {
        percentOperation();

    }
}

buttonContainer.addEventListener('click', clickEventHandler);

//TO-DO:
//1. Add keyboard support