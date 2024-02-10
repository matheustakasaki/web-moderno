function falarDepoisDe(segundos, frase) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(frase);
		}, segundos * 1000);
	});
}

falarDepoisDe(3, 'Que Legal')
.then(frase =>frase.concat('?1?'))
.then(outraFrase => console.log(outraFrase))
