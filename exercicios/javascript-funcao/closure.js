const x = 'Global';

function fora() {
	const x = 'Dentro da function';

	function dentro() {
		return x;
	}

	return dentro
}

const minhaFuncao = fora();

console.log(minhaFuncao());
