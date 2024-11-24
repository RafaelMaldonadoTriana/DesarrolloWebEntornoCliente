"use strict"

// OBJETOS
// ***** PILA *****
let colada = new Pila();
const PRENDAS = ['CAMISA', 'PANTALÓN', 'CAMISETA', 'CANZONCILLO', 'CALCETINES', 'CHAQUETA', 'BUFANDA', 'SUDADERA', 'CHALECO', 'ABRIGO'];
const CESTA_COLADA = 10; // ¿Cuánta ropa admite la cesta de la colada?    
let ultPrenda = "";
// ***** COLA *****
let taller = new Cola();
const MATRICULAS = ['12345-ABC', '23456-BCD', '34567-CDE', '45678-DEF', '56789-EFG', '67890-FGH', '78901-GHI', '89012-HIJ', '90123-IJK', '98765-JKL'];
const AFORO_TALLER = 10; // ¿Cuántos coches puedo tener esperando en el taller?
let ultCoche = "";
// ***** LISTA *****
let toDo = new Lista();
const TAREAS = ['LLAMAR', 'RECOGER', 'ENTRENAR', 'ORDENAR', 'FREGAR', 'COMPRAR', 'LIMPIAR', 'ESTUDIAR', 'LAVARSE', 'COMIDA'];
const MAX_TAREAS = 10; // ¿Cuántos coches puedo tener esperando en el taller?
let ultTarea = "";

let toDoO = new Lista();
const TAREASO = ['0-LLAMAR', '1-RECOGER', '2-ENTRENAR', '3-ORDENAR', '4-FREGAR', '5-COMPRAR', '6-LIMPIAR', '7-ESTUDIAR', '8-LAVARSE', '9-COMIDA'];
const MAX_TAREASO = 10; // ¿Cuántos coches puedo tener esperando en el taller?
let ultTarea0 = "";

// ACCIONES
// ***** PILA *****
//document.getElementById("introducir").addEventListener("click", introduzco);
//document.getElementById("obtener").addEventListener("click", obtengo);
// ***** COLA *****
document.getElementById("llegada").addEventListener("click", llega);
document.getElementById("atender").addEventListener("click", atiendo);
// ***** LISTA *****
//document.getElementById("anadir").addEventListener("click", anado);
//document.getElementById("eliminar").addEventListener("click", elimino);
// ***** LISTA PRIORIDAD *****
document.getElementById("anadirPrior").addEventListener("click", anadoPrior);
document.getElementById("eliminarPrior").addEventListener("click", eliminoPrior);

// ***** PILA *****
function introduzco() {
    let prenda = generaAleatorioEnteros(0, 9); // + generaAleatorioLetras();

    if (colada.tamano() == CESTA_COLADA) {
        document.getElementById("resPila").innerHTML = "DEBERÍAS EMPEZAR A LAVAR LA ROPA";
    } else {
        colada.apilar(PRENDAS[prenda]);
        document.getElementById("resPila").innerHTML = "QUEDAN POR LAVAR " + colada.tamano() + ":<br />" + colada.devolver() + ":<br />";
        if (!colada.vacio()) {
            document.getElementById("resPila").innerHTML += "LA SIGUIENTE PRENDA A LAVAR ES :<br />" + colada.ojear();
        }
    }
}

function obtengo() {
    if (colada.vacio()) {
        document.getElementById("resPila").innerHTML = "NO HAY MÁS ROPA QUE LAVAR";
    } else {
        if (colada.tamano() == 1) {
            colada.desapilar();
            document.getElementById("resPila").innerHTML = "NO HAY MÁS ROPA QUE LAVAR";
        } else {
            colada.desapilar();
            document.getElementById("resPila").innerHTML = "QUEDAN POR LAVAR " + colada.tamano() + ":<br />" + colada.devolver() + ":<br />";
            document.getElementById("resPila").innerHTML += "LA SIGUIENTE PRENDA A LAVAR ES :<br />" + colada.ojear();
        }
    }
}

// ***** COLA *****
function llega() {
    let matricula = generaAleatorioEnteros(0, 9); // + generaAleatorioLetras();

    if (taller.tamano() == AFORO_TALLER) {
        document.getElementById("resCola").innerHTML = "DEBERÍAS EMPEZAR A REPARAR LOS COCHES";
    } else {
        taller.encolar(MATRICULAS[matricula]);
        document.getElementById("resCola").innerHTML = "QUEDAN POR REPARAR " + taller.tamano() + ":<br />" + taller.devolver() + ":<br />";
        if (!taller.vacio()) {
            document.getElementById("resCola").innerHTML += "EL SIGUIENTE COCHE A REPARAR ES :<br />" + taller.ojear();
        }
    }
}

function atiendo() {
    if (taller.vacio()) {
        document.getElementById("resCola").innerHTML = "NO HAY MÁS COCHES QUE REPARAR";
    } else {
        if (taller.tamano() == 1) {
            taller.desencolar();
            document.getElementById("resCola").innerHTML = "NO HAY MÁS COCHES QUE REPARAR";
        } else {
            taller.desencolar();
            document.getElementById("resCola").innerHTML = "QUEDAN POR REPARAR " + taller.tamano() + ":<br />" + taller.devolver() + ":<br />";
            document.getElementById("resCola").innerHTML += "EL SIGUIENTE COCHE A REPARAR ES :<br />" + taller.ojear();
        }
    }
}

// ***** LISTA *****
function anado() {
    let tarea = generaAleatorioEnteros(0, 9);
    let posicion = generaAleatorioEnteros(0, toDo.tamano());

    if (toDo.tamano() == MAX_TAREAS) {
        document.getElementById("resLista").innerHTML = "DEBERÍAS EMPEZAR A HACER LAS TAREAS";;
    } else {
        toDo.enlistar(TAREAS[tarea], posicion);
        document.getElementById("resLista").innerHTML = "QUEDA POR HACER: <br />" + toDo.devolver();
    }
}

function elimino() {
    let posicion = generaAleatorioEnteros(0, toDo.tamano());

    if (toDo.vacio()) {
        document.getElementById("resLista").innerHTML = "NO HAY MÁS TAREAS QUE HACER";
    } else {
        toDo.desenlistar(posicion);
        document.getElementById("resLista").innerHTML = "QUEDA POR HACER: <br />" + toDo.devolver();
        //document.getElementById("resLista").innerHTML += "LA SIGUIENTE TAREA ES :<br />" + toDo.ojear();
    }
}

// ***** LISTA CON PRIORIDAD *****
function anadoPrior() {
    let tarea = generaAleatorioEnteros(0, 9);
    let posicion = generaAleatorioEnteros(0, toDoO.tamano());

    if (toDoO.tamano() == MAX_TAREASO) {
        document.getElementById("resListaPrior").innerHTML = "DEBERÍAS EMPEZAR A HACER LAS TAREAS";;
    } else {
        toDoO.enlistar(TAREASO[tarea], posicion);
        document.getElementById("resListaPrior").innerHTML = "QUEDA POR HACER: <br />" + toDoO.devolver();
    }
}

function eliminoPrior() {
    if (toDoO.vacio()) {
        document.getElementById("resListaPrior").innerHTML = "NO HAY MÁS TAREAS QUE HACER";
    } else {
        toDoO.desenlistar(toDoO.posicionMayor().posicion);
        document.getElementById("resListaPrior").innerHTML = "QUEDA POR HACER: <br />" + toDoO.devolver() + ":<br />";
        document.getElementById("resListaPrior").innerHTML += "LA SIGUIENTE TAREA ES :<br />" + toDoO.ojear(toDoO.posicionMayor().posicion);
    }
}

