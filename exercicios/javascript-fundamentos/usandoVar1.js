{
    {
        {
            {   

                var sera = 'Será?'
                console.log(sera);
            }
        }
    }
}
//  a Variável criada dentro do bloco acima, fica visível fora deste bloco pois foi definifa com Var
console.log(sera);

function teste() {
    // A variável abaixo somente é visível dentro deste escopo
    var local = 123
}

// A variável abaixo é uma variável global
var local = 123
console.log(local);

/*
    Se tratando de var(variável), existem dois escopos possíveis:
    - Nível global : visível em toda a aplicação;
    - Nível de função : Ao criar  
*/