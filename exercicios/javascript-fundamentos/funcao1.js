/*
    Função é um bloco de código nomeado(ou não) para executarmos uma sequência de operações
*/

// Função sem retorno
function imprimirSoma(a,b) {
    console.log('Função sem retorno \n',a + b);
}
imprimirSoma(2,3)
imprimirSoma(1) // Se não passarmos o segundo parâmetro definido na função, o segundo valor será undefined. Quando somamos um number com undefined, temos como retorno um NaN

// Função com retorno
function soma( a, b = 0 ) {
    return a + b
}
//Nessa função tratamos o segundo valor para retornar um number
console.log('Função com retorno \n', soma(2));