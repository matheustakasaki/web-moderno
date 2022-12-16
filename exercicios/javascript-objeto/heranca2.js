// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z' // Não recomendado que se faça esse tipo de manipulação
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr1); // A
console.log(filho.attr2); // B
console.log(filho.attr3); // C

console.log(filho.attr0); // Z - Ele devolve Z pq é caminhou até o maior nível da cadeia de protótipos e encontrou Z na referência Object.prototype

// Caso FILHO possua um dos attr de pai ou avo, estes serão sobrescritos pelo valor definido pelo FILHO

const carro = {
	velAtual: 0,
	velMax: 200,
	acelerarMais(delta) {
		if (this.velAtual + delta <= this.velMax) {
			this.velAtual += delta
		} else {
			this.velAtual = this.velMax
		}
	},
	status() {
		return `${this.velAtual}Km/h de ${this.velMax}Km/h`
	}
}

const ferrari = {
	modelo: 'F40',
	velMax: 324 // shadowing - sobrescrita do valor de atributo de um escopo mais abrangente
}

const volvo = {
	modelo: 'V40',
	status() {
		return `${this.modelo}: ${super.status()}`
	}
}

// Estabelecendo a relação de protótipo
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari);
console.log(volvo);


volvo.acelerarMais(100)
console.log(volvo.status());
