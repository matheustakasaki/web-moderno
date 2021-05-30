const resultado = nota => nota >= 7 ? 
    'Aprovado' /* retorna este valor se a condição false for retornada na condição*/
    : 
    'Reprovado' //retorna este valor se a condição false for retornada na condição

    console.log(resultado(7.1));
    console.log(resultado(5));

    /*
        Operador Ternário é composto por tres partes
        1. Expressão que vai retornar sempre true or false 
        2. O que retornará se verdadeiro 
        3. O que retornará se false 

        Expressão ? retorno true : retorno false
    */
