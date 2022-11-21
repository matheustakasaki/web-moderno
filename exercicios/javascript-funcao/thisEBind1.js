const pessoa = {
	saudacao: 'Bom dia!',
	falar() {
		console.log(this.saudacao)
	}
}
pessoa.falar()

const falar = pessoa.falar
falar() // undefined - Conflito entre paradigmas: funcional e O.O(não há um this resolvido para pessoa.falar pois está utilizando o contexto da const 'falar')

const falarDePessoa = pessoa.falar.bind(pessoa) // A função bind serve para especificar o contexto léxico que queremos resolver para o 'this'
falarDePessoa()
