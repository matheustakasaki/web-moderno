function soBoaNoticia(nota) {
	if (nota >= 7) {
		console.log('Aprovado');
	} else {
		console.log('Reprovado');
	}
}

function seForVerdadeEuPrinto(valor) {
	if (valor) {
		console.log(`É verdade... ${valor}`);
	}
}

// Testando valores que serão convertidos para false pelo Javascript
seForVerdadeEuPrinto();
seForVerdadeEuPrinto(null);
seForVerdadeEuPrinto(undefined);
seForVerdadeEuPrinto(NaN);
seForVerdadeEuPrinto('');
seForVerdadeEuPrinto(0);

// Testando valores que serão convertidos para true pelo Javascript
seForVerdadeEuPrinto(-1);
seForVerdadeEuPrinto(' ');
seForVerdadeEuPrinto('?');
