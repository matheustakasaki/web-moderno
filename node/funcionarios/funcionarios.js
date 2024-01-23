const url = `http://files.cod3r.com.br/curso-js/funcionarios.json`;
const axios = require(`axios`);

const chinesa = (f) => f.pais === `China`;
const mulheres = (f) => f.genero === `F`;
const menorSalario = (pessoa, pessoaAtual) => {
	return pessoa.salario < pessoaAtual.salario ? pessoa : pessoaAtual;
};

axios.get(url).then((response) => {
	const funcionarios = response.data;

	// console.log(funcionarios);
	// Desafio : devolver a mulher chinesa com menor salario

	const func = funcionarios.filter(chinesa).filter(mulheres).reduce(menorSalario)
	console.log(func)
});
