"use strict"

class Cola extends Lista {
    constructor() {
        super();
    }

    encolar(elemento) {
        return super.enlistar(elemento, super.tamano());
    }

    desencolar() {
        return super.desenlistar(0);
    }

    vacio() {
        return super.vacio();
    }

    tamano() {
        return super.tamano();
    }

    ojear() {
        return super.ojear(0);
    }
}
