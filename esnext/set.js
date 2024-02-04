// Nao aceita repetição/nao indexada

const times = new Set();
times.add(`vasco`);
times.add(`Flamengo`);
times.add(`Sao Paulo`).add("Coxa");
times.add("vasco"); // nao vai aceitar

console.log(times);

console.log(times.size); // Nos da o tamanho do set
console.log(times.has("vasco")); // true
console.log(times.has("Vasco"));
times.delete("Flamengo");
console.log(times.has("Flamengo"));

const nomes = ["Raquel", "Julia", "Lucas", "Lucas"];

const nomesSet = new Set(nomes); // Criando uma estrutura Set a partir de um array
console.log(nomesSet); // Só tem um valor pois nao aceita repeticoes
