function gerarNumerosEntre(min, max, numerosProibidos) {
	if (min > max) {
		[max, min] = [min, max]; // Destructuring = Definição de array
	}

	return new Promise((resolve, reject) => {
		const fator = max - min + 1;
		const aleatorio = parseInt(Math.random() * fator) + min;

		if (numerosProibidos.includes(aleatorio)) {
			reject("Número repetido");
		} else {
			resolve(aleatorio);
		}
	});
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
	// como tratar erros de promises dentro de função assíncrona? Lançando exceções
	try {
		// coódigo potencialmente problemático
		const numeros = [];
		for (let _ of Array(qtdNumeros).fill()) {
			numeros.push(await gerarNumerosEntre(1, 60, numeros));
		}
	} catch (e) {
		if (tentativas > 10) {
			throw "Não deu certo";
		} else {
			gerarMegaSena(qtdNumeros, tentativas + 1);
		}

		console.log("Que chato");
	}

	return numeros;
}

gerarMegaSena(8).then(console.log).catch(console.log);
