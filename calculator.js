let currentInput = '';

function appendValue(value) {
    currentInput += value;
    document.getElementById('input-display').value = currentInput;
}

function calculate() {
    try {
        const result = eval(currentInput);
        document.getElementById('result-display').value = result;
    } catch {
        document.getElementById('result-display').value = 'Error';
    }
}

function clearResult() {
    currentInput = '';
    document.getElementById('input-display').value = '';
    document.getElementById('result-display').value = '';
}