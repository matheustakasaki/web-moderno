const peso = 60.5;
const peso2 = Number('2.0')

console.log(peso, peso2);

console.log("É inteiro? " + Number.isInteger(peso)); //verifica se a variavel é inteira

const avaliacao = 9.871;
const avaliacao2 = 6.761;
const total = avaliacao * peso + avaliacao2 * peso2;
const media = total / (peso + peso2)
console.log(media.toFixed(2));
console.log(media.toString(2)); //binário
console.log(typeof media);
console.log(typeof Number);