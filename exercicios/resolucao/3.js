function calcularSalario(qtdHoras, qtdSalario) {

	const totalSalario = qtdHoras * qtdSalario;
	return `Salário igual a R$${totalSalario}`
}

console.log(calcularSalario(150, 40.5))
