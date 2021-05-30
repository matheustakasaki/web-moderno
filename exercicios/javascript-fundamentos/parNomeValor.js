//  par nome/valor
const saudacao = 'Opa' // Contexto léxico 1  ( local físico no código )

function exec() {
    const saudacao = 'Fala fiotee'; // Contexto Léxico 2
    // A variável saudação procurará no o nome delcarado primeiramente no contexto mais restrito

    return saudacao
}

//  Objetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Matheus',
    idade: 18,
    endereco : {
        rua : 'Euclides da Silva',
        numero: 23
    }
} 

console.log(saudacao);
console.log(exec());
console.log(Cliente);