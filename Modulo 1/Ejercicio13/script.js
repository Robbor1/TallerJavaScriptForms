/* 
Sintaxis:
if (condicion) {
    Bloque de condigo a ejecutar 
}

*/


//1.1 IF-ELSE
console.log("\n--------------- IF-ELSE ---------------\n");
var x = 25;
if (x < 18) {
    console.log("El número es menor a 18");
} else {
    console.log("El número es mayor a 18");
}

// if (x > 18) {
//     console.log("El número es mayor a 18");
// }

//1.2 IF-ELSE, ElSE-IF
console.log("\n--------------- IF-ELSE, ELSE IF ---------------\n");
const hora = new Date().getHours();

console.log(hora);

if (hora >= 5 && hora < 12) {
    console.log("Buenos días");
} else if (hora >= 13 && hora < 17) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

//1.3 SWITCH

console.log("\n--------------- SWITCH ---------------\n");

let day;

console.log(new Date().getDay());

switch (new Date().getDay()) {
    case 0:
        day = "Domingo";
        break;
    case 1:
        day = "Lunes";
        break;
    case 2:
        day = "Martes";
        break;
    case 3:
        day = "Miércoles";
        break;
    case 4:
        day = "Jueves";
        break;
    case 5:
        day = "Viernes";
        break;
    case 6:
        day = "Sábado";
    default:
        break;
}

console.log("El día de hoy es: " + day);