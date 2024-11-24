'use strict';

let solicitudDB, bd, canalBD;
let nombreBD = "DATOS";
let versionBD = 1;
let tablaBD = "datos";

// Abrir la base de datos
solicitudDB = indexedDB.open(nombreBD, versionBD);

solicitudDB.onerror = function (event) {
    console.error(`IndexedDB error: ${event.target.errorCode}`);
};

solicitudDB.onsuccess = function (event) {
    console.info('Conexión satisfactoria');
    bd = event.target.result;
};

solicitudDB.onupgradeneeded = function (event) {
    console.info('Base de datos creada');
    bd = event.target.result;
    let registros = bd.createObjectStore(tablaBD, { keyPath: "id", autoIncrement: true });
    registros.createIndex("nombre", "nombre", { unique: false });
    registros.createIndex("valor", "valor", { unique: false });
};

mostrarDatos();

const nombre = document.getElementById("nombre");
const valor = document.getElementById("valor");

const guardar = document.getElementById("guardar");
guardar.addEventListener("click", function () {
    grabarDato(nombre.value, valor.value);
});

const actualizar = document.getElementById("actualizar");

// La variable `indexToEdit` almacenará el índice del registro que estamos editando
let indexToEdit = null;
