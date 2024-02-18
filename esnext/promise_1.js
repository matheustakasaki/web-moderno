let a = 1;
// console.log(a)

// console.log(typeof p)

const primeiroElemento = arrayOuString =>  arrayOuString[0];
const letraMin = letra => letra.toLowerCase();

let p = new Promise(function (cumprirPromessa) {
	cumprirPromessa(["Ana", "Bia", "Carlos", "Daniel"]);
})

	// Para acessar o valor dentro da promessa, usamos o then
	.then(primeiroElemento)
	.then(primeiroElemento)
	.then(letraMin)
	.then(console.log);
