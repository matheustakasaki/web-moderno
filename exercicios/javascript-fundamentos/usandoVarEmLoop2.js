const funcs = []

for( var i = 0; i < 10 ; i++){
    funcs.push(function () {
    console.log(i);
    })
}
funcs[1]() //   o Valor da variavel não será respeitado devido ao fato de que variáveis com VAR não possuem escopo de função. Então, nos será retornado o valor final(após o loop) da variável.