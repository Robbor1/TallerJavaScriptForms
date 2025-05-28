const textarea = document.getElementById("mensaje");
const contador = document.getElementById("contador");

textarea.addEventListener("input", function () {
    const longitud = textarea.value.length;

    contador.textContent = longitud;
});