'use strict';

function mostrarDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = ""; // Limpiar la tabla antes de volver a llenarla

    let registros = JSON.parse(localStorage.getItem('datos')) || []; // Obtener los registros de localStorage

    registros.forEach((registro, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${registro.nombre}</td>
            <td>${registro.valor}</td>
            <td><button onclick="borrarDato(${index})">Borrar</button></td>
            <td><button onclick="editarDato(${index})">Editar</button></td>
        `;
        cuerpo.appendChild(fila);
    });
}

function editarDato(index) {
    let registros = JSON.parse(localStorage.getItem('datos')) || []; // Obtener los registros de localStorage
    const registro = registros[index];

    // Rellenar los campos con los datos a editar
    const nombre = document.getElementById("nombre");
    const valor = document.getElementById("valor");

    nombre.value = registro.nombre;
    valor.value = registro.valor;

    // Establecer el índice del registro a editar
    indexToEdit = index;

    // Cambiar la interfaz para permitir actualización
    const guardar = document.getElementById("guardar");
    const actualizar = document.getElementById("actualizar");

    guardar.style.display = "none"; // Ocultar el botón de guardar
    actualizar.style.display = "inline"; // Mostrar el botón de actualizar

    // Cambiar la acción del botón de actualizar
    actualizar.onclick = function () {
        // Actualizar el dato en la posición indicada por el índice
        registros[indexToEdit] = { nombre: nombre.value, valor: valor.value };

        localStorage.setItem('datos', JSON.stringify(registros)); // Guardar los datos actualizados en localStorage
        mostrarDatos(); // Actualizar la vista con los datos nuevos

        // Limpiar los campos
        nombre.value = "";
        valor.value = "";

        // Volver a mostrar el botón de guardar y ocultar el de actualizar
        guardar.style.display = "inline";
        actualizar.style.display = "none";

        // Restablecer el índice de edición
        indexToEdit = null;
    };
}
