let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function more() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

function less() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
}

