import {Cliente} from "./clientes.js";
import {Impuestos} from "./impuestos.js";


const impuesto1 = new Impuestos(53000, 20000);
const cliente1 = new Cliente('Luis Hermosilla', impuesto1);

const impuesto2 = new Impuestos(89000, 3000);
const cliente2 = new Cliente('Rafael garay', impuesto2);

const impuesto3 = new Impuestos(67000, 5800);
const cliente3 = new Cliente('Alberto Chang', impuesto3);



console.log(`Nombre del cliente: ${cliente1.nombre}`);
console.log(`Impuesto calculado: ${cliente1.calcularImpuesto()}`);
console.log(`Nombre del cliente: ${cliente2.nombre}`);
console.log(`Impuesto calculado: ${cliente2.calcularImpuesto()}`);
console.log(`Nombre del cliente: ${cliente3.nombre}`);
console.log(`Impuesto calculado: ${cliente3.calcularImpuesto()}`);

console.log(impuesto3.deducciones)

