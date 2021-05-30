// Armazenando uma função em uma variável

const imprimirSoma = function ( a , b ) {
    console.log('Função dentro de variável \n',a + b);
}
imprimirSoma(2,3)

// Armazenando uma função Arrow em uma variável
const soma = (a , b) => {
    return a + b
}
console.log('Arrow function dentro de variável \n', soma(3,3));

// retorno implícito
const subtracao = (a,b) => a-b
console.log('Função com retorno implícito dentro de variável\n',subtracao(2,3));