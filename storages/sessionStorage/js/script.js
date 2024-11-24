'use strict';

let datosAcceso = []; // 'array' donde almaceno los valores de nombre y valor

if (window.sessionStorage) {
    const nombre = document.getElementById("nombre"); // acceso al campo de nombre
    const valor = document.getElementById("valor"); // acceso al campo de valor
    const grabar = document.getElementById("guardar"); // botón guardar

    mostrarDatos(); // mostrar los datos almacenados en sessionStorage

    grabar.addEventListener("click", function (evento) {
        grabarDato(nombre.value, valor.value);
    });
} else {
    alert("El navegador no soporta sessionStorage");
}

function grabarDato(name, value) {
    console.log("Grabando dato...");
    datosAcceso.push({
        nombre: name,
        valor: value
    }); // introduzco los datos: nombre y clave, en el 'array'

    // guardo los datos del 'array' convirtiéndolos en JSON en una variable sessionStorage llamada 'sessionAcceso'
    sessionStorage.setItem("sessionAcceso", JSON.stringify(datosAcceso)); 

    mostrarDatos(); // mostrar los datos después de guardarlos
}

function actualizarDatos(datoExistente) {
    // Cargar los datos en los campos de entrada para edición
    const nombre = document.getElementById("nombre");
    const valor = document.getElementById("valor");
    nombre.value = datoExistente.nombre; // cargar el nombre en el input
    valor.value = datoExistente.valor; // cargar el valor en el input

    // Al hacer clic en "Guardar", actualizar el dato
    const grabar = document.getElementById("guardar");
    grabar.onclick = function() {
        // Buscar y actualizar el dato en datosAcceso
        datosAcceso = datosAcceso.map(function(dato) {
            if (dato.nombre === datoExistente.nombre) {
                dato.valor = valor.value; // Actualizar el valor
            }
            return dato;
        });

        // Guardar los datos actualizados en sessionStorage
        sessionStorage.setItem("sessionAcceso", JSON.stringify(datosAcceso));
        mostrarDatos(); // volver a mostrar los datos actualizados

        // Limpiar los campos después de actualizar
        nombre.value = "";
        valor.value = "";
    };
}

function borrarDato(name) {
    console.log("Borrando dato...");
    let newDatosAcceso = [];
    let cont = 0;

    datosAcceso = JSON.parse(sessionStorage.getItem("sessionAcceso")); // obtengo los datos de sessionStorage
    for (let i = 0; i < datosAcceso.length; i++) {
        if (!(datosAcceso[i].nombre == name)) { // recorro el 'array' hasta encontrar el dato que busco
            newDatosAcceso[cont] = datosAcceso[i];
            cont++;
        }
    }
    datosAcceso = [...newDatosAcceso]; // clonar el array
    // guardo los datos actualizados en sessionStorage
    sessionStorage.setItem("sessionAcceso", JSON.stringify(datosAcceso));
    mostrarDatos(); // actualizar la vista
}
