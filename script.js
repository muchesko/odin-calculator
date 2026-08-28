lucide.createIcons();

/* Add */
function addMath(a, b) {
    return a + b;
}

/* Subtract */
function subtractMath(a, b) {
    return a - b;
}

/* Multiply */
function multiplyMath(a, b) {
    return a * b;
}

/* Divide */
function divideMath(a, b) {
    return a / b;
}

function moduloMath(a, b) {
    return a % b;
}

function operate(a, b, operator) {
    if (operator === "+") {
        return addMath(a, b);
    }
    if (operator === "-") {
        return subtractMath(a, b);
    }
    if (operator === "*") {
        return multiplyMath(a, b);
    }
    if (operator === "/") {
        return divideMath(a, b);
    }
    if (operator === "%") {
        return moduloMath(a, b);
    }
}

/* Store first number selected as a and second number selected as  b and operator as operator,
use them as arguments in the operate() function, but 
only when the user presses = */

/* 3 steps: first: receive and store a,
second: receive and store b,
third: receive and store the operator */

/* Calculator needs to support chaining operators
First it should calculate nor
*/

let a = "";
let b = "";
let operator = "";
let calculated = false;

function receiveNumbers(number) {
    if (calculated === true) {
        clear();
        calculated = false;
    }
    if (operator === "") {
        a += number;
        resultDisplay.textContent = a;
    } else {
        b += number;
        resultDisplay.textContent = b;
    }
}

function clear() {
    resultDisplay.textContent = "";
    a = "";
    b = "";
    operator = "";
    calculated = false;
}

function decimal() {
    /* If we are on a (empty operator) or b,
    then check if a/b already includes a decimal,
    if it doesnt, then pass "." into receiveNumbers to
    be added to the string */
    if (operator === "") {
        if (a.includes(".")) {
            return;
        } else {
            receiveNumbers(".");
        }
    } else {
        if (b.includes(".")) {
            return;
        } else {
            receiveNumbers(".");
        }
    }
}

function calculate(newOperator) {
    if (a !== "" && operator !== "" && b !== "") {
        let numA = Number(a);
        let numB = Number(b);
        if (operator === "/" && numB === 0) {
            alert("Don't you know you can't divide by 0???");
            clear();
            return;
        }
        let result = operate(numA, numB, operator);
        result = Math.round(result * 1000) / 1000;
        resultDisplay.textContent = result;
        a = String(result);
        b = "";
    }
    operator = newOperator;
    resultDisplay.textContent = newOperator;
    calculated = false;
}

function equal() {
    if (a !== "" && b !== "" && operator !== "") {
        let numA = Number(a);
        let numB = Number(b);
        if (operator === "/" && numB === 0) {
            alert("Don't you know you can't divide by 0???");
            clear();
            return;
        }
        let result = operate(numA, numB, operator);
        result = Math.round(result * 1000) / 1000;
        resultDisplay.textContent = result;

        a = String(result);
        b = "";
        operator = "";
        calculated = true;
    }
}

function backspace() {
    if (operator === "") {
        a = a.slice(0, -1);
        resultDisplay.textContent = a;
    } else {
        b = b.slice(0, -1);
        resultDisplay.textContent = b;
    }
}

function keyboardShortcuts(e) {
    if (e.key >= "0" && e.key <= "9") {
        receiveNumbers(e.key);
    }
    if (e.key === "Escape") {
        clear();
    }
    if (e.key === "Backspace") {
        backspace();
    }
    if (e.key === ".") {
        decimal();
    }
    if (e.key === "%") {
        calculate("%");
    }
    if (e.key === "/") {
        calculate("/");
    }
    if (e.key === "*") {
        calculate("*");
    }
    if (e.key === "-") {
        calculate("-");
    }
    if (e.key === "+") {
        calculate("+");
    }
    if (e.key === "=" || e.key === "Enter") {
        equal();
    }
}

const resultDisplay = document.querySelector("#result");

document.addEventListener("keydown", function (e) {
    keyboardShortcuts(e);
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    clear();
});

const backspaceButton = document.querySelector("#backspace");
backspaceButton.addEventListener("click", () => {
    backspace();
});

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", () => {
    decimal();
});

const moduloButton = document.querySelector("#modulo");
moduloButton.addEventListener("click", () => {
    calculate("%");
});

const divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", () => {
    calculate("/");
});
const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", () => {
    calculate("*");
});
const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", () => {
    calculate("-");
});
const addButton = document.querySelector("#add");
addButton.addEventListener("click", () => {
    calculate("+");
});
const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", () => {
    equal();
});

const nine = document.querySelector("#nine");
nine.addEventListener("click", () => {
    receiveNumbers("9");
});
const eight = document.querySelector("#eight");
eight.addEventListener("click", () => {
    receiveNumbers("8");
});
const seven = document.querySelector("#seven");
seven.addEventListener("click", () => {
    receiveNumbers("7");
});
const six = document.querySelector("#six");
six.addEventListener("click", () => {
    receiveNumbers("6");
});
const five = document.querySelector("#five");
five.addEventListener("click", () => {
    receiveNumbers("5");
});
const four = document.querySelector("#four");
four.addEventListener("click", () => {
    receiveNumbers("4");
});
const three = document.querySelector("#three");
three.addEventListener("click", () => {
    receiveNumbers("3");
});
const two = document.querySelector("#two");
two.addEventListener("click", () => {
    receiveNumbers("2");
});
const one = document.querySelector("#one");
one.addEventListener("click", () => {
    receiveNumbers("1");
});
const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
    receiveNumbers("0");
});
