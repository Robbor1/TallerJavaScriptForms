const checkbox = document.getElementById("terminos");
const boton = document.getElementById("btnRegistro");

checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
        boton.disabled = false;
    } else { 
        boton.disabled = true;
    }
});
