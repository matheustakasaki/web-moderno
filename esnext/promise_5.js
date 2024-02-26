function funcionarOuNao(valor, chanceErro) {
	return new Promise((resolve, reject) => {
		if (Math.random() < chanceErro) {
			reject("Ocorreu um erro");
		} else {
			resolve(valor);
		}
	});
}

funcionarOuNao("Testando...", 0.5)
	.then(v => console.log(`Valor ${v}`))
	.then(
		v => console.log(v),
		erro => console.log(`Erro específico ${erro}`)
	)
	.catch(e => console.log(`Erro ${e}`))
