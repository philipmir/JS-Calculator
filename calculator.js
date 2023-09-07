const buttonElements = document.getElementsByClassName('button');
const result = document.getElementById('result');
let firstInput = true;

//const signElement = document.getElementsByClassName('calc_sign');

//for (let i=0, i< numberElement.length, i++) {
//	numberElement[i],addEventListener
// }

// Array.from(numberElement),forEach(element => {
//	 element.addEventListener ...
// })

for(const buttonElement of buttonElements ) {
	buttonElement.addEventListener('click', () => {
		buttonListener(buttonElement);
	})
}

const buttonListener = (button) => {
	if (button.innerText == '=') {
		calculate();
	} else {
		display(button.innerText);
	}
}

const clearResult = () => {
	result.innerText = '';
}

const display = (value) => {
	if (firstInput) {
		clearResult();
		firstInput = false;
	}
	result.innerText += value;
}

const calculate = () => {
	let res = eval(result.innerText)  // använd ej eval!!
	display('=' + res);
	firstInput = true;
}