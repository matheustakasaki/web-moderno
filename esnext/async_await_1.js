function esperarPor(tempo = 2000) {
	return new Promise(function (resolve) {
		setTimeout(function () {
			console.log("Executando promise...");
			resolve();
		}, tempo);
	});
}

await esperarPor(3000)
.then(esperarPor)
.then(esperarPor)
