'use strict';

function grabarDato(nombre, edad) {
    console.log("Grabando datos...");
    solicitudDB = indexedDB.open(nombreBD, versionBD);

    solicitudDB.onerror = function (event) {
        console.error(`IndexedDB error: ${event.target.errorCode}`);
    };

    solicitudDB.onsuccess = function (event) {
        bd = event.target.result;
        canalBD = bd.transaction(tablaBD, "readwrite").objectStore(tablaBD);
        canalBD.add({ nombre, edad });
    };

    mostrarDatos();
}
