'use strict';

function grabarDato(name, value) {
    console.log("Grabando dato...");
    datosAcceso.push({
        nombre: name,
        valor: value
    }); // introduzco los datos: nombre y valor, en el 'array'

    // guardo los datos del 'array' convirtiéndolos en JSON en una variable sessionStorage llamada 'sessionAcceso'
    sessionStorage.setItem("sessionAcceso", JSON.stringify(datosAcceso)); 

    //mostrarDatos(); // ¿POR QUÉ ESTÁ COMENTADA ESTA LÍNEA? es más ¿POR QUÉ SE MUESTRAN LOS DATOS DESPUÉS DE QUE SE PRODUCE EL BORRADO?
}
