"use strict";

// Credenciales almacenadas internamente
const storedUsername = "jota";
const storedPassword = "dejame";

const loginMessage = document.getElementById("loginMessage");
const loginButton = document.getElementById("loginButton");

// Verificar si el usuario ya ha iniciado sesión
if (localStorage.getItem("loggedIn") === "true") {
    // Si el usuario ya ha iniciado sesión, redirigir a la página de ejercicios
    window.location.href = "./ejercicios/index.html"; // Cargamos el index.html con el menú
}

// Manejar el envío del formulario de login
loginButton.addEventListener("click", function (event) {
    // Obtener valores ingresados por el usuario
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    // Validar credenciales
    if (usernameInput === storedUsername && passwordInput === storedPassword) {
        // Credenciales correctas
        localStorage.setItem("loggedIn", "true"); // Guardar estado de login en localStorage
        window.location.href = "./ejercicios/index.html"; // Cargamos el index.html con el menú
    } else {
        // Credenciales incorrectas
        loginMessage.style.color = "red";
        loginMessage.innerText = "Nombre de usuario o contraseña incorrectos.";
    }
});
