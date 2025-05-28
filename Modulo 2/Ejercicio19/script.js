const inputNombre = document.getElementById("nombre");

const vistaPrevia = document.getElementById("vistaPrevia");

inputNombre.addEventListener("input", function () {
    vistaPrevia.textContent = inputNombre.value;
});