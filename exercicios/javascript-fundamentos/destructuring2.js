const [a] = [10]
console.log(a);

// Exemplo 1 
const [num1, , num2, num3, num4] = [1, 2, 3, 4]
console.log( num1, num2, num3, num4);

//  Exemplo 2
const [, [, nota]] = [ [,8,8], [9,6,0] ]

// Ao ter um vazio e vírgula( ,) estamos ignorando o elemento que vier naquela sequência específica do destructuring
console.log(nota);