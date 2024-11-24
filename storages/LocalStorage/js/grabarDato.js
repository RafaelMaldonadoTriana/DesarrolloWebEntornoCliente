'use strict';

function grabarDato(nombre, valor) {
    console.log("Grabando datos...");

    let registros = JSON.parse(localStorage.getItem('datos')) || []; // Obtener los registros de localStorage
    registros.push({ nombre, valor }); // Agregar el nuevo registro

    localStorage.setItem('datos', JSON.stringify(registros)); // Guardar los datos en localStorage

    mostrarDatos(); // Actualizar la vista con los nuevos datos
}
