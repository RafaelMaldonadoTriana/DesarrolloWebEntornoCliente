'use strict';

function borrarDato(index) {
    console.log("Borrando datos...");

    let registros = JSON.parse(localStorage.getItem('datos')) || []; // Obtener los registros de localStorage
    registros.splice(index, 1); // Eliminar el registro en la posición indicada por el índice

    localStorage.setItem('datos', JSON.stringify(registros)); // Guardar los datos actualizados en localStorage

    mostrarDatos(); // Actualizar la vista con los datos restantes
}
