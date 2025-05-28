const textarea = document.getElementById("mensaje");
const restante = document.getElementById("restantes");

const limite = 100; // Límite máximo de caracteres

textarea.addEventListener("input", function () {
    const usados = textarea.value.length;

    const disponible = limite - usados;

    restantes.textContent = disponible;

    if (usados > limite) {
        alert("Has excedido el límite de caracteres permitidos.");
        textarea.value = textarea.value.substring(0, limite); // Recortar el texto
        restante.textContent = 0;
    }
});