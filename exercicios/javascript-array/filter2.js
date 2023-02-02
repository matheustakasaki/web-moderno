Array.prototype.filter2 = function (callback) {
	const newArray = [] // Os elementos filtrados representam um novo array, ou seja, não iremos alterar o array original

	for (let i = 0; i < this.length; i++) {
		if (callback(this[i], i, this)) {
			newArray.push(this[i])
		}
	}
	return newArray
}

const produtos = [
	{ nome: 'Notebook', preco: 2499, fragil: true },
	{ nome: 'iPad Pro', preco: 4199, fragil: true },
	{ nome: 'Copo de Vidro', preco: 12.49, fragil: true },
	{ nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function (p) {
	//  Algum tipo de lógica que retorne true/false
	// Verdadeiro = elementos estarão presentes no array final
	// Ou
	// False = elementos NÃO estarão presentes no array final


	return p.preco > 10

}))

const caro = p => p.preco >= 500
const fragil = p => p.fragil

console.log(produtos.filter(caro).filter2(fragil))
