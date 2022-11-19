const imprimirResultado = function (nota) {
	if (nota >= 7) {
		console.log('Aprovado!')
	}
	else {
		console.log('Reprovado!')
	}
}

imprimirResultado(4)
imprimirResultado(10)
imprimirResultado('Epaa') // O JS tentará comparar este valor com 7 e retornará false dentro da função.
