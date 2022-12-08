// Usando a notação literal
const obj1 = {}
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object) // Function , object (que foi criado a partir de uma função construtora)
const obj2 = new Object;
console.log(obj2);

// Funções construtoras - Mesma coisa q object em js mas a função construtora é NoSSA

function Produto(nome, preco, desc) {
	this.nome = nome; // Quando definimos o this significa que será um atributo passível de alteração externa pois ele é público

	// o this na função indica que manipularemos os dados por ela manipulados, por qualquer instância que for criada
	this.getPrecoComDesconto = () => {
		return preco * (1 - desc);
	}

	// note que os params preco e desc estão encapsulados no escopo da função - ou seja, não estão passíveis de alteração externa
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 2988.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Função Factory - Padrão de projeto onde existe uma função que gera objeto
function criarFuncionario(nome, salarioBase, faltas) {
	return {
		nome,
		salarioBase,
		faltas,
		getSalario() {
			return (salarioBase / 30) * (30 - faltas);
		}
	}
}

const f1 = criarFuncionario('Joao', 7980, 4);
const f2 = criarFuncionario('Joao', 11400, 1);

console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// Função famosa que retorna objeto... - Muito utilizado em webServices
const fromJSON = JSON.parse('{"info":"So um um JSON"}');
console.log(fromJSON);

