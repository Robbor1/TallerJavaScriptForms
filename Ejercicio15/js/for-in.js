/* Sintaxis:
for (key in objeto) {
    //Codigo ejecutable
}

*/

//1.1 Ejemplo de FOR-IN con objetos
console.log("\n--------------- FOR-IN ---------------\n");
let person = {name:"Rob", edad: 40}

let texto2 = "";
for (let x in person) {
    texto2 += person[x] + "\n";
}

console.log(texto2);

//1.2 Ejemplo de bucle con FOR-EACH
console.log("\n--------------- FOR-EACH ---------------\n");

const numeros = [20, 15, 48, 30, 12];

let texto3 = "";
function miFuncion(value) {
    texto3 += "Valor: "+ value + "\n";
}

numeros.forEach(miFuncion);

console.log(texto3);