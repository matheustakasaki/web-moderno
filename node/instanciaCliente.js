const contadorA = require("./instanciaUnica");
const contadorB = require("./instanciaUnica");
const contadorC = require("./instanciaNova")();
const contadorD = require("./instanciaNova")();


contadorA.inc()
contadorB.inc()
