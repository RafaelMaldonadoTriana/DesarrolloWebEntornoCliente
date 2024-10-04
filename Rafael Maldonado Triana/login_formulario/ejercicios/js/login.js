// Se ejecutará cuando la ventana se haya cargado completamente
window.onload = function () {
  // Asignamos el evento de submit al formulario de login
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Evitar que la página se recargue al enviar el formulario
      login(); // Llamamos a la función de login
  });
};

// Función de login
function login() {
  // Obtener los valores de los campos de usuario y contraseña
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-msg');

  // Simulación de verificación de credenciales
  if (username === 'jota' && password === 'dejame') {
      alert('Inicio de sesión exitoso');

      // Ocultar el formulario de login y mostrar el contenido
      document.querySelector('.login-container').style.display = 'none'; // Ocultar el formulario
      document.querySelector('.header').style.display = 'block'; // Mostrar la cabecera
      document.querySelector('.topnav').style.display = 'block'; // Mostrar el menú
      document.getElementById('mainContent').style.display = 'block'; // Mostrar el contenido
      document.querySelector('.footer').style.display = 'block'; // Mostrar el pie de página

  } else {
      // Mostrar mensaje de error si las credenciales no son correctas
      errorMsg.textContent = 'Usuario o contraseña incorrectos';
  }
}
