// sem promise
const http = require("http");

const getTurma = (letra, callback) => {
	const url = `http://files.cod3r.com.br/curso-js/turma/${letra}.json`;

	// No método get, acionamos a callback que retorna a resposta. Na resposta é onde vamos receber os dados em formato de streaming de dados.

	http.get(url, (res) => {
		let resultado = "";

		// Interceptamos o evento de resposta
		res.on("data", (dados) => {
			// concatenamos os dados que forem chegando no resultado
			resultado += dados;
		});

		// Interceptamos o evento de resposta quando terminar de chegar os dados
		res.on("end", () => {
			// Passar para a funçao callback o array de objetos convertido
			callback(JSON.parse(resultado));
		});
	});
};

let nomes = [];
getTurma("A", (alunos) => {
	nomes = nomes.concat(alunos.map((a) => a.nome));
	getTurma("B", (alunos) => {
		nomes = nomes = nomes.concat(alunos.map((a) => a.nome));
		getTurma("C", (alunos) => {
			nomes = nomes.concat(alunos.map((a) => a.nome));
			console.log(nomes)
		});
	});
});
