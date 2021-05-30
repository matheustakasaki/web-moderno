function rand( {min = 0, max = 1000} ) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

const objeto = {}
console.log( rand({ max:10, min:0}));
// ou
console.log('Usando Objeto vazio: ', rand(objeto)); //Usando objeto vazio