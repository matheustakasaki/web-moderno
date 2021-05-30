var numero = 1

{
    // Ao definirmos variáveis com let, será considerado o escopo de bloco
    let numero = 2 
    console.log('dentro = ', numero);
}

//  As duas variáveis não conflitarão devido à divisão de escopo
//  Variáveis definidas com let tem escopo global, de função e de bloco.
console.log('fora = ', numero);
