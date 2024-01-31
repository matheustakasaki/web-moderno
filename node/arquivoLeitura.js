const fs = require("fs");

const caminho = __dirname + "/arquivo.json";
// Síncrono
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

// Assíncrono

fs.readFile(caminho, "utf-8", (err, conteudo) => {
	const config = JSON.parse(conteudo)
	console.log(`${config.db.host}: ${config.db.port}`);
});

// No caso de JSON, posso le-lo assim tbm
const config = require('./arquivo.json')
console.log(config)


fs.readdir(__dirname, (err, arquivos)=>{
	console.log('conteudo da pasta');
	console.log(arquivos)
})
