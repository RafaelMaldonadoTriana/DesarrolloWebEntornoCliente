let currentBase = 10; // Base inicial es 10

// Función para agregar números y operadores al display
function appendToDisplay(value) {
  const display = document.getElementById('display');
  display.value += value; // Añadir el valor al display
}

// Función para limpiar el display
function clearDisplay() {
  const display = document.getElementById('display');
  display.value = ''; // Limpiar el display
}

// Función para calcular el resultado
function calculateResult() {
  const display = document.getElementById('display');
  try {
    let result = eval(display.value); // Evaluar la expresión
    display.value = convertBase(result, currentBase); // Convertir a la base actual
  } catch (error) {
    display.value = 'Error'; // Mostrar error si la expresión es inválida
  }
}

// Función para establecer la base
function setBase(base) {
  currentBase = base; // Cambiar la base actual
  const display = document.getElementById('display');
  display.value = ''; // Limpiar el display al cambiar la base
  alert(`Base cambiada a ${base}`); // Mensaje de confirmación
}

// Función para convertir el resultado a la base seleccionada
function convertBase(num, base) {
  if (base === 2) return num.toString(2);
  if (base === 4) return num.toString(4);
  if (base === 8) return num.toString(8);
  if (base === 16) return num.toString(16);
  return num; // Devuelve el número original si no se especifica una base válida
}

// Añadir evento al botón de cerrar sesión
document.getElementById('logoutBtn').addEventListener('click', function() {
  // Redirigir a la página principal
  window.location.href = '../../index.html'; // Reemplaza con la ruta correcta a tu página principal
});
