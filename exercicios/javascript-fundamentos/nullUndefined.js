
//  Atribuição por referência
const a = {name: 'teste'}
const b = a;

b.name = 'oi'
// console.log(a);

/*
    Quando trabalhamos com objetos e funções, o js nos faz trabalhar com atribuições por referência
    Ao alterar o valor da constante b, a constante a irá perceber a diferença e vice-versa pois
    o que fizemos foi uma atribuição por referência ou seja, as duas constantes apontam para o mesmo lugar e as duas perceberão as alterações
*/

let c = 3;

let d = c; //copia o valor de c para d
d++ 

/*
    Quando trabalhamos com os tipos primitivos, ao igualar duas variáveis, o que o javascript faz, é realizar a cópia do valor de uma variavel para outra.
*/

let valor //não inicializado
console.log('Valor é: ', valor);

valor = null //ausência de valor, não aponta para nenhum lugar de memória.
// É importante não definirmos nada como undefined

// console.log(valor.toString());   // ERRO!

const produto = {}
console.log(produto.preco); //Retornará undefined

produto.preco = 3.5
console.log(produto);

// Undefined
produto.preco = undefined //    evitar atribuir undefined!
console.log(!!produto.preco);
console.log(produto);

// Nulo
produto.preco = null // sem preço
console.log(!!produto.preco);
console.log(produto);