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

// Recurso do ES8
// Objetivo de simplificar o uso de promises.
let obterAlunos = async () => {
	const ta = await getTurma("A");
	const tb = await getTurma("B");
	const tc = await getTurma("C");

	return [].concat(ta, tb, tc);
}; // Retorna um objeto async function

obterAlunos()
	.then((e) => e.map((a) => a.nome))
	.then((nomes) => console.log(nomes));
