// Object.preventExtensions - Desabilita a possibilidade de adicionar novos atributos ao objeto

const produto = Object.preventExtensions({
	nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log('Extensível', Object.isExtensible(produto))

// Tentando alterar atributos
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag

console.log(produto) // { nome: 'Borracha', preco: 1.99 }


// Object.seal() - Nao eh possivel adicionar nem excluir atributos no objeto mas eh possivel altera-los
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa) // { nome: 'JUliana', idade: 29 }

// Object.freeze = selado + valores constantes
