
/* Estructura de una función

function myFunction() {
    // Código a ejecutar
}

function myFunction(param1, param2, ...) {
    // Código ejecutable
}
*/

function saludar() {
    console.log("Hola soy una función - impresión por consola");
}

// Llamada a la función
saludar(); // Llamada a la función sin parámetros

// Declaración de función con parámetros
function suma(a, b) {
    return a + b; // Retorna la suma de a y b
}

let sumas = suma(5, 6); 
console.log(suma);

console.log("La suma es: ", suma(15, 30));

// Declaramos funciones con parametros opcionales
function saludarDos(nombre = "Invitado") {
    return `Hola ${nombre}, bienvenido!`;
}

console.log(saludarDos("Roberto"));

// Vamos a convertir grados F a Celsius
function toCelsius(f) {
    return (5/9) * (f - 32);
}

let celsius = toCelsius(100);
console.log("Centigrados: ", celsius)

celsius = toCelsius(60);
console.log("60F a Celsius: ", celsius)