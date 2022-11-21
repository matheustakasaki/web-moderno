function soma() {
	let soma = 0;
	for (i in arguments) {
		soma += arguments[i]
	}
	return soma
}

console.log(soma());						// 0
console.log(soma(1));						// 1
console.log(soma(1.1, 2.2, 3.3));			// 6.6
console.log(soma(1.1, 2.2, 'Teste'));		// 3.3000000000000003Teste -> Imprecisão do ponto flutuante por conta da especificação
console.log(soma('a', 'b', 'c')); 			// 0abc -> como o a variável soma foi inicializada dentro da função, o 0 está presente no retorno
