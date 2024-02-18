//  passar para a promise um path e o resultado dela deve ser o conteúdo do arquivo
const fs = require("fs");

// Minha resposta
function lerArquivo(path) {
	const caminho = __dirname + path;

	return new Promise((resolve) => {
		const p = fs.readFile(caminho, "utf-8", (err, conteudo) =>
			console.log(conteudo)
		);

		resolve(p);
	});
}

// lerArquivo("/dados.txt").then();

// Resposta Vídeo
const path = require("path");

function readFile(caminho) {
	return new Promise((resolve) => {
		fs.readFile(caminho, function (_, conteudo) {
			resolve(conteudo.toString());
		});

		console.log("Depois de ler");
	});
}

const caminho = path.join(__dirname, "dados.txt");

readFile(caminho)
	.then((conteudo) => conteudo.split('\n'))
	.then((linhas) => linhas.join(","))
	.then((conteudo) => `O valor final é ${conteudo}`)
	.then(console.log);
