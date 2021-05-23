const nome = 'Matheus' //não posso quebrar a linha em strings, mas com template strings...

const template = `
    Olá ${nome} !
`

console.log(template);


// podemos inserir expressões dentro das template strings

console.log(`1+1 ${1+1}`);

// função com template string
const exemploFuncao = texto => texto.toUpperCase()
console.log(`Ei.. ${exemploFuncao('isso é um texto')}`);