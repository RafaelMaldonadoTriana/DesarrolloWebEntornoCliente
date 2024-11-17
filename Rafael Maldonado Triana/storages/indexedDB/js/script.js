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
    registros.createIndex("edad", "edad", { unique: false });
};

mostrarDatos();

const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");

const guardar = document.getElementById("guardar");
guardar.addEventListener("click", function () {
    grabarDato(nombre.value, edad.value);
});

const actualizar = document.getElementById("actualizar");


const texto = document.getElementById("texto");

const ciudad = document.getElementById("ciudad");
document.getElementById("cargar").addEventListener("click", function (event) {
    const option = ciudad.options[ciudad.selectedIndex];
    if (!option.value) {
        texto.value = "Por favor, selecciona una ciudad.";
        return;
    }
    console.log(`Cargando datos... de ${ciudad.value}, en lat: ${option.dataset.lat} y lon: ${option.dataset.lon}`);
    solicitar(option.dataset.lat, option.dataset.lon);
});