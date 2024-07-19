let display = document.getElementById('display');
        let currentOperation = null;
        let firstOperand = '';
        let secondOperand = '';

        function appendNumber(number) {
            if (currentOperation === null) {
                firstOperand += number;
                display.innerText = firstOperand;
            } else {
                secondOperand += number;
                display.innerText = secondOperand;
            }
        }

        function setOperation(operation) {
            if (firstOperand === '') return;
            currentOperation = operation;
        }

        function calculateResult() {
            if (firstOperand === '' || secondOperand === '') return;

            let result;
            switch (currentOperation) {
                case '+':
                    result = parseFloat(firstOperand) + parseFloat(secondOperand);
                    break;
                case '-':
                    result = parseFloat(firstOperand) - parseFloat(secondOperand);
                    break;
                case '*':
                    result = parseFloat(firstOperand) * parseFloat(secondOperand);
                    break;
                case '/':
                    result = parseFloat(firstOperand) / parseFloat(secondOperand);
                    break;
                default:
                    return;
            }
            display.innerText = result;
            firstOperand = result;
            secondOperand = '';
            currentOperation = null;
        }

        function clearDisplay() {
            display.innerText = '';
            firstOperand = '';
            secondOperand = '';
            currentOperation = null;
        }