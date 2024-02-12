function falarDepoisDe(segundos, frase) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(frase);
		}, segundos * 1000);
	});
}

falarDepoisDe(.5, 'Que Legal')
.then(frase =>frase.concat('??'))
.then(outraFrase => console.log(outraFrase))
