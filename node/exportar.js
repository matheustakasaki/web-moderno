console.log(module.export === this);
console.log(module.export === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;
console.log(module.exports);

// Forma correta de definir objeto no module.exports - Usamos sempre que precisamos definir um objeto a ser exportado
module.exports = { publico: true };
