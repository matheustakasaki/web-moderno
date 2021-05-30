function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log( 'Os dois trabalhos deram certo: ',compras(true, true)) // Os dois trabalhos deram certo
console.log( 'Apenas trabalho1 deu certo ' , compras(true, false)) // Apenas trabalho1 deu certo
console.log( 'Apenas trabalho2 deu certo ' , compras(false, true))   // Apenas trabalho2 deu certo
console.log( 'Nenhum dos dois deu certo ' , compras(false, false))  // Nenhum dos dois deu certo