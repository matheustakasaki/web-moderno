console.log(typeof Array, typeof new Array, typeof [])


// Forma de criar array

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) // Acessando o primeiro elemento do array: Bia
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);	// undefined


aprovados[3] = 'Paulo'  // Atribuindo valor Paulo para a posição 3 do array ( não é mais undefined)
aprovados.push('Abia') // Adicionando um elemento ao array

console.log(aprovados);
console.log(aprovados.length) // Retorna o tamanho do array


aprovados[9] = 'Rafael'
console.log(aprovados); // Array agora passa a ter um intervalo com itens undefined

aprovados.sort() // Aqui, alteramos a ordem do array aprovados ordenando de ordem alfabética
console.log(aprovados);

// Excluindo item do array
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // Método versátil para excluir ou adicionar elementos baseado a partir de um índice
console.log(aprovados);
