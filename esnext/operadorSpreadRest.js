// operador ... rest(juntar)/spread(espalhar)
// Usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: "Maria", salario: 12348.99 };

const clone = { ativo: true, ...funcionario };
console.log(clone)
console.log(funcionario)

// usar spred com array
const grupoA = ['Joao','Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaeka']
console.log(grupoFinal)
