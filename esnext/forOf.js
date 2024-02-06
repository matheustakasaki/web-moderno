for (let letra of "Cod3r") {
	console.log(letra);
}

const assuntosEcma = ["Map", "Set", "Promise"];

for (let i in assuntosEcma) {
	console.log(i);
}

for (let assunto of assuntosEcma) {
	console.log(assunto);
}

const assuntoMap = new Map([
	["Map", { abordado: true }],
	["Set", { abordado: true }],
	["Promise", { abordado: false }],
]);

for (let assunto of assuntoMap) {
	console.log(`-->`, assunto);
}
for (let chave of assuntoMap.keys()) {
	console.log(`Chaves -->`, chave);
}

for (let valor of assuntoMap.values()) {
	console.log(`Valores -->`, valor);
}
for (let entrada of assuntoMap.entries()) {
	console.log(`Entrada -->`, entrada);
}

// desestruturando chave,valor
for (let [c, v] of assuntoMap.entries()) {
	console.log(`C,v -->`, c, v);
}


const s = new Set(['a', 'b','x'])
for (let letra of s){
	console.log(`SET -->`,letra)
}
