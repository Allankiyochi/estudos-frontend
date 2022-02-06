var currentNumber1 = document.getElementById('currentNumber');
var currentNumber = 0;

function more() {
    currentNumber = currentNumber + 1;
    currentNumber1.innerHTML = currentNumber;
}

function more10() {
    currentNumber = currentNumber + 10;
    currentNumber1.innerHTML = currentNumber;
}

function less() {
    currentNumber = currentNumber - 1;
    currentNumber1.innerHTML = currentNumber;
}

function less10() {
    currentNumber = currentNumber - 10;
    currentNumber1.innerHTML = currentNumber;
}
