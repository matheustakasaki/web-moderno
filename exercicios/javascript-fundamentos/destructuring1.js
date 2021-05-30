//  novo recurso do ES 2015 (ES6)

const pessoa = {
    nome: 'Matheus',
    idade: 18,
    endereco : {
        logradouro: 'Rua Abc', 
        numero: 1000
    }
}

//  Tirando dados do objeto normalmente
    let exemplo = pessoa.nome
    console.log('Normal : ',exemplo);

//  Operador Destructuring
const { nome, idade } = pessoa;
console.log(nome, idade);

// Declarando variaveis no destructuting
const {nome : n, idade: i} = pessoa;
console.log('n = ', n, 'i = ',i);

// Setando valor padrão para uma chave que não existe dentro do objeto
const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada);

// Usando destructruring para tirar dados de objeto dentro de outro objeto
const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep);

//  Erro!
const { conta: {ag, num } } = pessoa
console.log(ag, num); //    Dará erro pois a propriedade conta por não existir no objeto pessoa, resultará em um undefined. Por isso, é necessário que ao usar o destructuring, o caminho para os atributos seja limpo.