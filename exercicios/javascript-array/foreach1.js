const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']


aprovados.forEach(function (nome, indice) {
	// Lembrando que não somos obrigados a passar os parametros

	// Na funcção callback de um foreach, há três parâmetros disponíveis: elemento, indice e o próprio array
	console.log(`${indice + 1}: ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = (aprovado, indice) => console.log(`${indice + 1}) ${aprovado}`)

aprovados.forEach(exibirAprovados)
