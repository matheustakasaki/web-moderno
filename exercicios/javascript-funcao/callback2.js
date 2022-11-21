const notas = [
	7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0
]

// Extrair notas menores do que 7
// Sem callback
let notasBaixas = [];

for (const i in notas) {
	if (notas[i] < 7) {
		notasBaixas.push(notas[i])
	}
}

console.log(notasBaixas)

// Com callback

const notasBaixas2 = notas.filter(function (nota) {
	return nota < 7
})

console.log(notasBaixas2)

const notasMenoresQueSete = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenoresQueSete);
console.log(notasBaixas3);
