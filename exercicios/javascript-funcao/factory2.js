// Função factory que cria produtos com atributos
// O atributo 'desconto' vem por padrão com o valor 0.1. Ou seja, se ele não for fornecido na chamada da função, o valor adotado será 0.1
function criarProduto(nome, preco, desconto = 0.1) {
	return {
		nome,
		preco,
		desconto
	}
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Ipad', 1199.49))
