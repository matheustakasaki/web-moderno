function area(largura, altura) {
	const area = largura * altura;
	if (area > 20) {
		console.log(`Valor acima do permitido ${area}m2.`);
	} else {
		return area
	}
}

console.log(area(2, 2)) // 2 * 2
console.log(area(2)) // 2 * NaN
console.log(area()); // NaN * NaN
console.log(area(2, 3, 17, 22, 44)) // Considera apenas os primeiros parâmetros recebidos e ignora os outros
console.log(area(5, 5)) // Entrará no If e retornará undefined

