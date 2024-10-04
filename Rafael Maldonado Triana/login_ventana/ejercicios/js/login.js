"use strict"

// Definir las credenciales correctas
const usuarioCorrecto = "jota";
const contrasenaCorrecta = "dejame";




// Variable para almacenar el usuario ingresado
let usuarioIngresado = "";

// Bucle que se repite hasta que el usuario ingrese el nombre correcto
while (usuarioIngresado !== usuarioCorrecto) {
  usuarioIngresado = prompt("Ingrese su nombre de usuario:");
  document.body.style.display = "none";

  if (usuarioIngresado !== usuarioCorrecto) {
    alert("Usuario incorrecto. Inténtelo de nuevo.");
  }
}

// Variable para almacenar la contraseña ingresada
let contrasenaIngresada = "";

// Bucle que se repite hasta que la contraseña ingresada sea correcta
while (contrasenaIngresada !== contrasenaCorrecta) {
  contrasenaIngresada = prompt("Ingrese su contraseña:");
  document.body.style.display = "none";

  if (contrasenaIngresada !== contrasenaCorrecta) {
    alert("Contraseña incorrecta. Inténtelo de nuevo.");
  }
}

// Si llega aquí, tanto el usuario como la contraseña son correctos
alert("Bienvenido, !");


document.body.style.display = "block";