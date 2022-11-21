// Função em JS é um First-Class Object (Citizens)
// High-order function

// Criar função de forma literal
function fun1() { }

// Armazenar em uma variavel
const fun2 = function () { }

// Armazenar dentro de um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3));

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar uma função como parâmetro de outra função
function run(func) {
	func()
}

run(function () { console.log('Executando...') });


// Uma função pode retornar/conter uma outra função
function soma(a, b) {
	return function (c) {
		console.log(a + b + c)
	}
}
soma(2, 3)(5);

// OU

const cincoSomado = soma(3, 2);
cincoSomado(5) // 10
