let contador = 1;

// Estrutura de controle com while
while (contador <= 10) {
    console.log(`contador: ${contador}`);
    contador++
}


// FOR com estrutura: inicializador | condição | incremento
for (let i = 1; i<= 10; i++) {
    console.log(`contadorFOR: ${i}`)
    
}


// Utilizando FOR para percorrer array
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for (let i = 0; i < notas.length; i++) {
  console.log(`notas: ${notas[i]}`);
    
}