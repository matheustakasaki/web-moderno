function nomeDoMes(num) {

	const meses = [
		'Janeiro',
		'Fevereiro',
		'Março',
		'Abril',
		'Maio',
		'Junho',
		'Julho',
		'Agosto',
		'Setembro',
		'Outubro',
		'Novembro',
		'Dezembro'
	]

	for (let indice in meses) {
		if (num === indice - 1) {
			console.log(meses[num]);
		}
	}
}

nomeDoMes(2)
