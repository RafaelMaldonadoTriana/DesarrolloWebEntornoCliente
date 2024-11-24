'use strict';

function mostrarDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo");
    cuerpo.innerHTML = "";

    solicitudDB = indexedDB.open(nombreBD, versionBD);

    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };

    solicitudDB.onsuccess = function (event) {
        bd = event.target.result;
        canalBD = bd.transaction(tablaBD, "readonly").objectStore(tablaBD);

        canalBD.getAll().onsuccess = function (event) {
            const registros = event.target.result;

            registros.forEach(registro => {
                const fila = document.createElement("tr");
                fila.innerHTML = `
                    <td>${registro.nombre}</td>
                    <td>${registro.edad}</td>
                    <td>
                        <button onclick="borrarDato(${registro.id})">Borrar</button>
                    </td>
                    <td>
                        <button onclick="editarDato(${registro.id}, '${registro.nombre}', '${registro.edad}')">Editar</button>
                    </td>
                `;
                cuerpo.appendChild(fila);
            });
        };
    };
}

function editarDato(id, nombreValor, edadValor) {
    const nombre = document.getElementById("nombre");
    const edad = document.getElementById("edad");
    const guardar = document.getElementById("guardar");
    const actualizar = document.getElementById("actualizar");

    nombre.value = nombreValor;
    edad.value = edadValor;

    guardar.style.display = "none";
    actualizar.style.display = "inline";

    actualizar.onclick = function () {
        actualizarDato(id, nombre.value, edad.value);
        nombre.value = "";
        edad.value = "";
        guardar.style.display = "inline";
        actualizar.style.display = "none";
    };
}
