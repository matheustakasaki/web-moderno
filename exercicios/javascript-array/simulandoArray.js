const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }

console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString', {
	value: function () { return Object.values(this) },
	enumerable: false // No momento que executar object.values, essa função nao aparecerá no array final
})

console.log(quaseArray[0])

const meuArray = ['Rafael', 'Ana', 'Bia']

console.log(quaseArray.toString(), meuArray)
