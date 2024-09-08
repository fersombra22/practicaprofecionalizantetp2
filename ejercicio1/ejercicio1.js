let displayValue = '';
let history = [];

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
        history.push(displayValue);
        displayHistory();
    } catch (error) {
        alert('Error en la expresión');
        clearDisplay();
    }
}

function displayHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}

function logarithm() {
    displayValue += 'Math.log10(';
    document.getElementById('display').value = displayValue;
}

function cubeRoot() {
    displayValue += '**(1/3)';
    document.getElementById('display').value = displayValue;
}
