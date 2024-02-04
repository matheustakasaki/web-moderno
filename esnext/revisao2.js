// Arrow Function

const soma = (a, b) => a + b;
console.log(soma(2, 3));

// Arrow Function
const lexico1 = () => console.log(this === exports);

// Parametro default
function log(text = `node`) {
	console.log(text);
}
log();

// Operador Rest ou Spread
function total(...numeros) {
	let total = 0;
	numeros.forEach((n) => (total += n));
	return total;
}

console.log(total(2, 3, 4, 5));
