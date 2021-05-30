console.log('a = ', a); //  a variavel a(não declarada anteriormente) será atribuida a um valor undefined
var a = 2;
console.log('a = ', a);


/*
    o código interpretado seria:

    var a ;
    console.log('a = ', a);
    var a = 2;
    console.log('a', a);
*/

console.log('b = ', b);
let b = 3; //   Com let o hoisting não acontece.
console.log('b = ', b);


//  Ou seja, é uma boa prática semrpe declarar as variáveis antes de utilizá-las