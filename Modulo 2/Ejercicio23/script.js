const checkbox = document.getElementById("recibirNoticias");
const campoCorreo = document.getElementById("campoCorreo");

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        campoCorreo.classList.remove("oculto"); // Mostrar el input correo
    } else {
        campoCorreo.classList.add("oculto")
    }
});