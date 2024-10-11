// Funciones para manejar cookies
function setCookie(nombre, valor, dias) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    const expires = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expires + ";path=/";
}

function getCookie(nombre) {
    const nombreEQ = nombre + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nombreEQ) == 0) return c.substring(nombreEQ.length, c.length);
    }
    return null; // Si no se encuentra la cookie
}

function deleteCookie(nombre) {
    document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// Se ejecutará cuando la ventana se haya cargado completamente
window.onload = function() {
    // Asignamos el evento de submit al formulario de login
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que la página se recargue al enviar el formulario
        login(); // Llamamos a la función de login
    });

    // Asignamos el evento al botón de cerrar sesión
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', logout); // Llamar a la función logout al hacer clic

    // Asignamos eventos para manejar cookies
    document.getElementById("guardar").addEventListener("click", function () {
        const nombre = document.getElementById("cookieName").value;
        const valor = document.getElementById("cookieValue").value;
        setCookie(nombre, valor, 1); // Guardar cookie por 1 día
        alert(`Cookie ${nombre} guardada con valor: ${valor}`);
    });

    document.getElementById("mostrar").addEventListener("click", function () {
        const nombre = document.getElementById("cookieName").value;
        const valor = getCookie(nombre);
        const cookieMsg = document.getElementById("cookie-msg");
        cookieMsg.textContent = valor ? `Valor de la cookie '${nombre}': ${valor}` : `Cookie '${nombre}' no encontrada`;
    });

    document.getElementById("borrar").addEventListener("click", function () {
        const nombre = document.getElementById("cookieName").value;
        deleteCookie(nombre);
        document.getElementById("cookie-msg").textContent = `Cookie '${nombre}' eliminada`;
    });
};

// Función de login
function login() {
    // Obtener los valores de los campos de usuario y contraseña
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('main-content');

    // Guardar el usuario en una cookie al iniciar sesión
    setCookie('usuario', username, 1); // 1 día de caducidad
    alert('Inicio de sesión exitoso');
    errorMsg.textContent = ''; // Limpiar cualquier mensaje de error
    overlay.style.display = 'none'; // Ocultar el overlay
    mainContent.style.display = 'block'; // Mostrar el contenido principal
}

// Función de logout
function logout() {
    const overlay = document.getElementById('overlay');
    const mainContent = document.getElementById('main-content');

    overlay.style.display = 'block'; // Mostrar el overlay
    mainContent.style.display = 'none'; // Ocultar el contenido principal
    document.getElementById('username').value = ''; // Limpiar el campo de usuario
    document.getElementById('password').value = ''; // Limpiar el campo de contraseña
    document.getElementById('error-msg').textContent = ''; // Limpiar cualquier mensaje de error
    deleteCookie('usuario'); // Borrar la cookie del usuario al cerrar sesión
}
