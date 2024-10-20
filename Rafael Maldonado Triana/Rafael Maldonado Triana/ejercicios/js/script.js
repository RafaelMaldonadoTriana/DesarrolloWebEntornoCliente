"use strict";

// Verificar si el botón de logout existe en la página actual
const logoutButton = document.getElementById("logoutButton");

if (logoutButton) {
    // Manejar el logout
    logoutButton.addEventListener("click", function (event) {
        localStorage.setItem("loggedIn", "false"); // Cambiar el estado de login en localStorage
        window.location.href = "../index.html"; // Cargamos el index.html principal
    });
}

// Manejar la selección de los ejercicios del menú "NUMBER"
document.getElementById("ejer01").addEventListener("click", function () {
    loadExercise('ejer01');
});

document.getElementById("ejer02").addEventListener("click", function () {
    loadExercise('ejer02');
});
