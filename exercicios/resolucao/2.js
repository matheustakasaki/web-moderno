
/*
	Função quer receba a idade em anos e retorne a mesma idade em dias
	- Considerar 1 ano = 365 dias.
	- Desconsiderar anos bissextos e desconsiderar dias decorridos desde o último aniversário
*/

function idadeEmDias(num) {

	// 1 ano = 365 dias

	return num * 365
}

console.log(idadeEmDias(25))
console.log(idadeEmDias(70))
