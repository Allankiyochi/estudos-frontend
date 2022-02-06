function changeMode() {
	changeClasses();
	changeText();
}

function changeClasses() {
	button.classList.toggle(darkModeClass);
	p.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

function changeText() {
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		p.innerHTML = darkMode + ' ON';
		return;
	}

	button.innerHTML = darkMode;
	p.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('btnSeletor');
const p = document.getElementById('typeMode');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);


    
let lines = gets().split('\n');

let N = parseInt(lines.shift());
for (let i = 1; i < 10000; i++) {
	if (i % N == 2) print(i);
}