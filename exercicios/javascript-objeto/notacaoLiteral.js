const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c }; // Antigo - Hoje isso serve para alterarmos o nome da constante
const obj2 = { a, b, c } // Agora

console.log(obj1, obj2);


const nomeAttr = 'nota';
const valorAttr = 7.87;

const obj3 = {}
obj3[nomeAttr] = valorAttr;
console.log(obj3);


const obj4 = { [nomeAttr]: valorAttr };
console.log(obj4);

// Definição de funcoes em objeto literal
const obj5 = {

	// Forma antiga
	funcao1: function () {
		// ...
	},

	// Forma nova(reduzida)
	funcao2() {
		// ...
	}
}

console.log(obj5);
