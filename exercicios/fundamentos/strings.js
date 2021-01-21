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

console.log(escola.charCodeAt(3)); // Devolve o valor da tabela unicode para o caracter especificado
console.log(escola.indexOf(3)); // indice do caracter especificado dentro da string

console.log(escola.substring(1)); // inclui a string a partir deste index
console.log(escola.substring(0,3)); //define um intervalo de inclusão de caracteres


console.log("Escola ".concat(escola).concat("!")); //concatenação
console.log(escola.replace(3,'e')); //substitui um caracter por outro

console.log('Ana, Maria,Braga'.split(',')); //Conseguimos pegar uma string que possui separações por vírgulas e converte-la em array. Podemos usar expressões regulares também. 

/*
    String é uma cadeia de caracteres separadas por aspas ou crases
*/



