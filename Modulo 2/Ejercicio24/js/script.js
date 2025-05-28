const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("errorMessage");

const USERS = [
    { username: "admin", password: "1234" },
    { username: "rob", password: "ues12345" },
];

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const user = USERS.find(
        (user) => user.username === username && user.password === password
    );

    console.log(user);

    if (user) {
        alert("Inicio de sesión exitoso");
        window.location.replace("index.html"); // Redirige la página
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
    }

});