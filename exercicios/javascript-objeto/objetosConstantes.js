// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro' // Eu n mudei a referência para o endereço de memória do objeto

console.log(pessoa);

// pessoa -> 456 -> {...}
pessoa = { nome: 'Ana' } // Estou tentando fazer com que esta const deixe de apontar para 123, e aponte a um novo endereço


Object.freeze(pessoa) // Congelando o obj pessoa(não consigo mais mexer no objeto, seja adicionar ou excluir atributos ou manipulá-los. Alterações antes do frezze, vão se manter)

pessoa.nome = 'Maria'; // Vai continuar a ser pedro pois teve um freeze acima
pessoa.end = 'Rua ABC';
delete pessoa.nome;
console.log(pessoa.nome);
console.log(pessoa);


// Criar objeto congelado desde o começo
const pessoaConstante = Object.freeze({ nome: 'Joao' });
pessoaConstante.nome = 'Maria';
console.log(pessoaConstante);
