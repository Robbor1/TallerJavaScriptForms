var x = 5;
var y = 9;

//1.1 Operadores lógicos
console.log("\n--------------- Operadores lógicos ---------------\n");

console.log(x==y); //False
console.log(x==5); //True
console.log(x=="5"); //True
console.log(x==="5"); //False
console.log(x!=y); //True
console.log(x!=="5"); //True
console.log(x!== 5); //False
console.log(x < 8); //True
console.log(x > 8); //False
console.log(x <= 8); //True
console.log(x >= 8); //False

//1.2 Comparaciones
console.log("\n--------------- Comparaciones ---------------\n");

console.log(x < 10 && y > 1); //True
console.log(x == 5 || y == 5); //True  ALT +124 para ||
console.log(!(x == y)); //True

// Operadores condicionales (ternarios)
console.log("\n--------------- Operadores condicionales (ternarios) ---------------\n");
/* Sintaxis:
   nombreVariable = condicion ? "Si es verdadero ejecuta este código" : "Si es falso ejecuta este código";
*/

let edad = 18;
let puedeVotar = edad < 18 ? "No puede votar" : "Sí puede votar";

console.log(puedeVotar);