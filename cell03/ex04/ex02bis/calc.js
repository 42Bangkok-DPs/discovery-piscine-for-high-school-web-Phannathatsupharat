const leftOperandInput = document.getElementById('leftOperand');
const rightOperandInput = document.getElementById('rightOperand');
const operatorSelect = document.getElementById('operator');
const calculateButton = document.getElementById('calculateButton');

calculateButton.addEventListener('click', () => {
    const leftOperand = parseInt(leftOperandInput.value);
    const rightOperand = parseInt(rightOperandInput.value);
    const operator = operatorSelect.value;

    if (isNaN(leftOperand) || isNaN(rightOperand) || leftOperand < 0 || rightOperand < 0) {
        alert("Error :(");
        return;
    }

    let result;

    if (operator === '/' && rightOperand === 0) {
        alert("It’s over 9000!");
        console.log("It’s over 9000!");
        return;
    }

    if (operator === '%' && rightOperand === 0) {
        alert("It’s over 9000!");
        console.log("It’s over 9000!");
        return;
    }

    switch (operator) {
        case '+':
            result = leftOperand + rightOperand;
            break;
        case '-':
            result = leftOperand - rightOperand;
            break;
        case '*':
            result = leftOperand * rightOperand;
            break;
        case '/':
            result = leftOperand / rightOperand;
            break;
        case '%':
            result = leftOperand % rightOperand;
            break;
        default:
            alert("Error :(");
            return;
    }

    alert(`Result: ${result}`);
    console.log(`Result: ${result}`);
});

// Alert every 30 seconds
setInterval(() => {
    alert("Please, use me...");
}, 30000);
