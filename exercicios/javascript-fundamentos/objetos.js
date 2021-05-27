
{
    // Um objeto em Javascript não é um json, é uma coleção chave/valor

    const produto = {}
    produto.nome = "Celular ultramega" // atributo adicinado dinamicamente
    produto.preco = 300.50 // atributo adicinado dinamicamente
    produto.descontoLegal = 0.4  // evitar atributos com espaço

    console.log(produto);

    // Criando objeto com atributos chave : valor
    const produto2 = {
        nome: 'Camisa Polo',
        id: 4,
        valor: 80,
        dimensoes: {
            altura: 100,
            largura: 50
        }
    }

    
    console.log(produto2);
    let json = '{"nome":"Matheus","numero":"41997957911"}' // exemplo de Json

    console.log('JSON Teste', json);
}

