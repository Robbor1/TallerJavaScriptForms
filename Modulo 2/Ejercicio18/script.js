// Obtener una referencia al formulario
const formulario = document.getElementById("formulario");

// Estar a la escucha del submit
formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener valores del input de tipo texto
    const nombre = document.getElementById("nombre").value;

    // console.log(nombre);

    // Mostrar el valor de el campo de texto
    alert("Hola, " + nombre + " gracias por enviar el formulario.");
});