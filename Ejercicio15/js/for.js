/* 

   - for(){}
   - for in(){}
   - for of(){}
   - while(){}
   - do while(){}


*/

//1.1 FOR
console.log("\n--------------- FOR ---------------\n");
let texto = "";

for (let i = 0; i <= 5; i++) {
    texto += "El numero es: " + i + "\n";
}
console.log(texto);

const array = [];
for (let i = 0; i <= 10; i++) {
    array[i] = "Numero de posición del array: " + i;
}
console.log(array[2]);

