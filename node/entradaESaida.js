const anonimo = process.argv.indexOf("-a") !== -1;
// É possível identificar a existência de flags em comandos executados no terminal
// console.log(anonimo)

if (anonimo) {
	process.stdout.write("Fala Anonimo! \n");
	process.exit();
} else {
	process.stdout.write("Informe o seu nome");
	process.stdin.on("data", (data) => {
		const nome = data.toString().replace("\n", "");
		process.stdout.write(`Fala ${nome}!! \n`);
		process.exit();
	});
}
