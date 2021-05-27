const peso1 = 60.5;
const peso2 = Number('2.0')

console.log(peso1, peso2);

console.log("É inteiro? " + Number.isInteger(peso2)); 
//  isInteger verifica se a variavel é inteira

const avaliacao = 9.871;
const avaliacao2 = 6.761;

const total = avaliacao * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2)

console.log('A média é: ' + media.toFixed(2));
// toFixed fixará o número de casas decimais do número retornado

console.log(media.toString(2));
// toString transforma o valor de ponto flutuante para um valor Binário

console.log(typeof media); // A variável media é de qual tipo? Number.
console.log(typeof Number);