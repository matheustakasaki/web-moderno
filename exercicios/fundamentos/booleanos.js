let estaAtivo = false;
console.log(estaAtivo);

estaAtivo = true;
console.log(estaAtivo);

// Operador de negação
estaAtivo != 1;
console.log(estaAtivo);

estaAtivo = 1;
console.log(!!estaAtivo); //duas negações, volta ao valor original

// Quando será verdadeiro?
console.log('os verdadeiros...');
console.log(!!13);
console.log(!!-1);
console.log(!!' '); // espaço em branco
console.log(!! []); // array
console.log(!! {}); // objeto
console.log(!! Infinity);
console.log(!!(estaAtivo = true));

// Quando é falso? 
console.log(!! 0); //false
console.log(!!''); //string vazia
console.log(!! null);
console.log(!! NaN);
console.log(!! undefined);
console.log(!!(estaAtivo = false));

console.log('pra finalizar...');
console.log(!!('' || null || 0 || ' '));

let nome = 'Matheus'
console.log(nome || 'Desconhecido'); // setar um valor padrão para variavel
// caso nome não seja válido, imprima 'Desconhecido
