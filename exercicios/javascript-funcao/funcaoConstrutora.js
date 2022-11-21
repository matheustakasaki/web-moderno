function Carro(velocidadeMaxima = 200, delta = 5) {
	// atributo privado
	let velocidadeAtual = 0;

	// Método público
	this.acelerar = function () {
		if (velocidadeAtual + delta <= velocidadeMaxima) {
			velocidadeAtual += delta;
		} else {
			velocidadeAtual = velocidadeMaxima;
		}
	}

	// Método público
	this.getVelocidadeAtual = function () {
		return velocidadeAtual
	}

}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);

console.log(ferrari.getVelocidadeAtual());
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual());

