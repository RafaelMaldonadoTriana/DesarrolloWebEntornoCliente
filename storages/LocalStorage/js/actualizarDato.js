'use strict';

function actualizarDato(index, nombre, valor) {
    console.log("Actualizando datos...");
    
    let registros = JSON.parse(localStorage.getItem('datos')) || []; // Obtener los registros de localStorage
    registros[index] = { nombre, valor }; // Actualizar el dato en el índice indicado
    
    localStorage.setItem('datos', JSON.stringify(registros)); // Guardar los datos actualizados en localStorage
    mostrarDatos(); // Llamar a la función para mostrar los datos actualizados
}
