function tratarErroELancar(erro) {
    // throw new Error('Erro! ')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: 'Erro Parca',
        msg: 'deu ruim',
        date: new Date
    }

    // Podemos lançar diversas respostas com o throw
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!');
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        // AContecendo ou não um erro, ele executará abaixo
        console.log('final');
    }
}

const obj = {name : 'Roberto'}

imprimirNomeGritado(obj)