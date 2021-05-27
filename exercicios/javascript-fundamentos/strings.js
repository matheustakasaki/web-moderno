/*
    Podemos delimitar strings de tres formas: 
    1 - com aspas duplas ""
    2 - com aspas simples ''
    3 - com crase ``, quando utilizamos template strings
*/

const escola = "Cod3r";
console.log(escola.charAt(0)); // C
console.log(escola.charAt(1)); // O
console.log(escola.charAt(2)); // D
console.log(escola.charAt(3)); // 3
console.log(escola.charAt(4)); // R

/*
    A função charAt retorna o caractere encontrado em determinado índice.
    - Se a função não encontrar nada, a função retornará um vazio.
*/

console.log(escola.charCodeAt(3)); 
// charCodeAt()
// Devolve o valor da tabela unicode para o caracter especificado

console.log(escola.indexOf('3')); 
// indexOf()
// retorna índice do caracter especificado dentro da string

console.log(escola.substring(1)); 
// substring()
// Retorna a string encontrada no intervalo passado em seus parâmetros () não incluindo o caractere encontrado
// no parâmetro fim.

console.log(escola.substring(0,3)); //define um intervalo de inclusão de caracteres


console.log("Escola ".concat(escola).concat("!")); 
// concat()
// Realiza a concatenação dos valores.


console.log(escola.replace(3,'e')); 
// replace
// substitui um caracter passado no primeiro parâmetro por outro passado no segundo. No caso acima, substitui o
// número 3 encontrado na variável escola pela letra 'e'

console.log('Ana, Maria,Braga'.split(',')); 
// split();
// Conseguimos pegar uma string que possui separações por vírgulas e converte-la em array. Podemos usar expressões regulares também. 

/*
    String é uma cadeia de caracteres separadas por aspas ou crases
*/



