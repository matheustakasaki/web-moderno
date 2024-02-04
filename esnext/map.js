// Criando um Map
const tecnologias = new Map();

tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

console.log(tecnologias.react);
console.log(tecnologias.get(`react`).framework); // Acessa valor da chave

// Criando estrutura de um Map atribuindo elementos
const chavesVariadas = new Map([
	[function () {}, "Função"],
	[{}, "Objeto"],
	[123, "Número"],
]);

chavesVariadas.forEach((vl, ch) => {
	console.log(ch, vl);
});

console.log(chavesVariadas.has(123)); // Valida se um elemento está ou nao contido dentro do map
chavesVariadas.delete(123); // Exclui elemento dentro do map
console.log(chavesVariadas.has(123));
console.log("tamanho:", chavesVariadas.size); // 2

chavesVariadas.set(123, "a");
chavesVariadas.set(123, "a");
chavesVariadas.set(456, "a");
console.log(chavesVariadas);
