const pai = {
	nome: 'Pedro',
	corCabelo: 'preto'
}

const filha1 = Object.create(pai) // o método Create define o parametro como protótipo da variavel filha

filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
	nome: { value: 'Bia', writable: false, enumerable: true }
}) // Neste método, também é possível passar algumas opcções de configuração para o objeto e valores de atributos

console.log(filha2.nome);
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));


for (let key in filha2) {

	// Verifica se um atributo é do objeto ou se recebeu via herança
	filha2.hasOwnProperty(key) ?
		console.log(key) : console.log(`Por herança: ${key}`)
}
