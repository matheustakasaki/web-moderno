function Aula(nome, videoID) {
	this.nome = nome;
	this.videoID = videoID
}
const aula1 = new Aula('Bem-vindo!', 123)
const aula2 = new Aula('Até breve!', 456)
console.log(aula1, aula2)


// Simulando o new
function novo(f, ...params) {
	const obj = {}
	// Associamos o prototype do objeto ao atributo prototype da função que passei
	obj.__proto__ = f.prototype

	// Vai executar a função f passando como contexto de contexto(this) o obj criado na linha 12 e passamos os parametros do método novo
	f.apply(obj, params)
	return obj
}

const aula3 = novo(Aula, 'Bem-vindo!', 123)
const aula4 = novo(Aula, 'Bem-vindo!', 456)

console.log(aula3, aula4);
