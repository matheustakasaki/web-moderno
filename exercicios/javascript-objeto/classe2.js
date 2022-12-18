class Avo {
	constructor(sobrenome) {
		this.sobrenome = sobrenome
	}
}

class Pai extends Avo {
	constructor(sobrenome, profissao = 'Professor') {

		// Chama construtor de avo para setar o this.sobrenome
		super(sobrenome)

		// Esta linha de código define um atributo 'sobrenome' no objeto instanciado
		this.profissao = profissao
	}
}

class Filho extends Pai {
	constructor() {
		super('Silva')
	}
}

const filho = new Filho
console.log(filho)
