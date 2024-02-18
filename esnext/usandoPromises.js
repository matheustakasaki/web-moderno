// com promise
const http = require("http");

const getTurma = (letra) => {
	const url = `http://files.cod3r.com.br/curso-js/turma/${letra}.json`;

	// No método get, acionamos a callback que retorna a resposta. Na resposta é onde vamos receber os dados em formato de streaming de dados.

	return new Promise((resolve, reject) => {
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
				try {
					resolve(JSON.parse(resultado));
				} catch (e) {
					reject(e);
				}
			});
		});
	});
};

// let nomes = [];
// getTurma("A").then((alunos) => {
// 	nomes = nomes.concat(alunos.map((a) => a.nome));
// 	getTurma("B").then((alunos) => {
// 		nomes = nomes = nomes.concat(alunos.map((a) => a.nome));
// 		getTurma("C").then((alunos) => {
// 			nomes = nomes.concat(alunos.map((a) => a.nome));
// 			console.log(nomes);
// 		});
// 	});
// });

// dispara as promises todas em paralelo
Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
	.then((turmas) => [].concat(...turmas))
	.then((alunos) => alunos.map((a) => a.nome))
	.then((nomes) => console.log(nomes));

getTurma("D").catch((e) => console.log(e.message));
