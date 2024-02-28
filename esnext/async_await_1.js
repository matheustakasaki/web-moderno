function esperarPor(tempo = 2000) {
	return new Promise(function (resolve) {
		setTimeout(() => resolve(), tempo);
	});
}

function retornarValor() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(10)
		}, 5000);
	});
}
// await esperarPor(3000).then(esperarPor).then(esperarPor);

async function executar() {

	let valor = await retornarValor()
	await esperarPor(2000)
	console.log(`Async/await ${valor}`)

	await esperarPor(2000)
	console.log(`Async/await ${valor + 1}`)

	await esperarPor(2000)
	console.log(`Async/await ${valor + 2}`);

	return valor + 3;
}

executar().then(console.log)
