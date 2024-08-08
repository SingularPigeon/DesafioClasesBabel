"use strict";

var _clientes = require("./clientes.js");
var _impuestos = require("./impuestos.js");
var impuesto1 = new _impuestos.Impuestos(53000, 20000);
var cliente1 = new _clientes.Cliente('Luis Hermosilla', impuesto1);
var impuesto2 = new _impuestos.Impuestos(89000, 3000);
var cliente2 = new _clientes.Cliente('Rafael garay', impuesto2);
var impuesto3 = new _impuestos.Impuestos(67000, 5800);
var cliente3 = new _clientes.Cliente('Alberto Chang', impuesto3);
console.log("Nombre del cliente: ".concat(cliente1.nombre));
console.log("Impuesto calculado: ".concat(cliente1.calcularImpuesto()));
console.log("Nombre del cliente: ".concat(cliente2.nombre));
console.log("Impuesto calculado: ".concat(cliente2.calcularImpuesto()));
console.log("Nombre del cliente: ".concat(cliente3.nombre));
console.log("Impuesto calculado: ".concat(cliente3.calcularImpuesto()));
console.log(impuesto3.deducciones);