function rand( [ min = 0 , max = 1000 ]) {
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor) 
}

console.log( rand([50, 40]) ); // Primeiro maximo depois minimo
console.log(rand([992])); // Intervalo entre o numero passado e 1000 que é o valor padrão do maximo
console.log( 'SOmente valor máximo: ', rand([, 10] ));
console.log('Assumirá os valores padrões entre 0 e 1000: ', rand( [] ) );