const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    })
}
funcs[1]() //   retorna 1
funcs[8]() // retorna 8 

//  Como as variáveis declaradas com LET, possuem escopo de função, os valores retornados pelos índices, são aqueles que foram guardados durante o loop da função. E não o valor final, como seria o comportamento padrão com VAR