'use strict';

function mostrarDatos() {
    console.log("Mostrando datos...");
    const cuerpo = document.getElementById("cuerpo"); // referencia al objeto HTML donde se mostrarán los datos

    if (sessionStorage.getItem("sessionAcceso") && JSON.parse(sessionStorage.getItem("sessionAcceso")).length > 0) {
        datosAcceso = JSON.parse(sessionStorage.getItem("sessionAcceso")); // obtengo los datos guardados en sessionStorage
        cuerpo.innerHTML = "Los datos almacenados son: <br />";

        // Limpiar la tabla antes de mostrar los datos
        cuerpo.innerHTML = ""; 

        // Mostrar todos los datos almacenados
        datosAcceso.forEach(function (datoAcceso) {
            let linea = document.createElement("tr"), // creo una fila
                campoNombre = document.createElement("td"), // creo una celda para el nombre
                campoValor = document.createElement("td"), // creo una celda para el valor
                campoBorrar = document.createElement("td"), // creo una celda para el botón borrar
                campoActualizar = document.createElement("td"), // creo una celda para el botón actualizar
                botonBorrar = document.createElement("button"), // creo un botón de borrar
                botonActualizar = document.createElement("button"), // creo un botón de actualizar
                imagenBorrar = document.createElement("img"); // creo una imagen para el botón borrar

            // Añadir datos a las celdas
            campoNombre.innerHTML = datoAcceso.nombre; 
            campoValor.innerHTML = datoAcceso.valor;

            // Botón "Borrar"
            botonBorrar.textContent = "Borrar";
            botonBorrar.className = "borrar";
            botonBorrar.addEventListener('click', function () {
                borrarDato(datoAcceso.nombre); 
            });

            imagenBorrar.src = "./img/delete.svg"; // añadir icono
            imagenBorrar.width = "22";
            imagenBorrar.height = "22";
            imagenBorrar.style = "vertical-align: middle";
            botonBorrar.appendChild(imagenBorrar); 
            campoBorrar.appendChild(botonBorrar); // añadir el botón borrar a la fila

            // Botón "Actualizar"
            botonActualizar.textContent = "Actualizar";
            botonActualizar.className = "actualizar";
            botonActualizar.addEventListener('click', function () {
                // Al hacer clic en actualizar, cargar los datos de ese registro en el formulario
                actualizarDatos(datoAcceso);
            });

            campoActualizar.appendChild(botonActualizar); // añadir el botón actualizar a la fila

            // Añadir las celdas a la fila
            linea.appendChild(campoNombre);
            linea.appendChild(campoValor);
            linea.appendChild(campoBorrar);
            linea.appendChild(campoActualizar); // añadir el campo de actualizar

            cuerpo.appendChild(linea); // añadir la fila al cuerpo de la tabla
        });
    } else {
        cuerpo.innerHTML = 'No existen datos almacenados';
    }
    console.table(datosAcceso);
}
