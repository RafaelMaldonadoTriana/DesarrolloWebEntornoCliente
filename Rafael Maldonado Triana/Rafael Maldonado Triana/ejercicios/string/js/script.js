// Referencia al textarea
const textArea = document.getElementById('inputText');

// Funciones para manipular el texto
function toUppercase() {
    const text = textArea.value;
    textArea.value = text.toUpperCase(); // Convierte el texto a mayúsculas
}

function toLowercase() {
    const text = textArea.value;
    textArea.value = text.toLowerCase(); // Convierte el texto a minúsculas
}

function capitalizeFirstLetter() {
    const text = textArea.value;
    const capitalizedText = text.replace(/\b\w/g, char => char.toUpperCase());
    textArea.value = capitalizedText; // Convierte la primera letra de cada palabra a mayúsculas
}

function capitalizeLastLetter() {
    const text = textArea.value;
    const capitalizedText = text.replace(/\b\w+(?=\s|$)/g, word => {
        return word.slice(0, -1) + word.slice(-1).toUpperCase();
    });
    textArea.value = capitalizedText; // Convierte la última letra de cada palabra a mayúsculas
}

function lowercaseFirstLetter() {
    const text = textArea.value;
    const lowercasedText = text.replace(/\b\w/g, char => char.toLowerCase());
    textArea.value = lowercasedText; // Convierte la primera letra de cada palabra a minúsculas
}

function lowercaseLastLetter() {
    const text = textArea.value;
    const lowercasedText = text.replace(/\b\w+(?=\s|$)/g, word => {
        return word.slice(0, -1) + word.slice(-1).toLowerCase();
    });
    textArea.value = lowercasedText; // Convierte la última letra de cada palabra a minúsculas
}

function replaceVowels(type) {
    let text = textArea.value;
    if (type === 'uppercase') {
        text = text.replace(/[aeiouáéíóú]/gi, char => char.toUpperCase()); // Convierte vocales a mayúsculas
    } else {
        text = text.replace(/[AEIOUÁÉÍÓÚ]/gi, char => char.toLowerCase()); // Convierte vocales a minúsculas
    }
    textArea.value = text;
}

function replaceConsonants(type) {
    let text = textArea.value;
    if (type === 'uppercase') {
        text = text.replace(/[^aeiouáéíóú\s\d\W]/gi, char => char.toUpperCase()); // Convierte consonantes a mayúsculas
    } else {
        text = text.replace(/[^aeiouáéíóú\s\d\W]/gi, char => char.toLowerCase()); // Convierte consonantes a minúsculas
    }
    textArea.value = text;
}

// Funciones de animación aleatoria
function randomTransformation() {
    const functions = [
        toUppercase, 
        toLowercase, 
        capitalizeFirstLetter, 
        capitalizeLastLetter, 
        lowercaseFirstLetter, 
        lowercaseLastLetter,
        () => replaceVowels('uppercase'), 
        () => replaceVowels('lowercase'),
        () => replaceConsonants('uppercase'), 
        () => replaceConsonants('lowercase')
    ];

    const randomFunc = functions[Math.floor(Math.random() * functions.length)];
    randomFunc(); // Ejecuta una función aleatoria sobre el texto
}

let animationInterval;

function setSpeed(speed) {
    clearInterval(animationInterval);
    const interval = speed === 'fast' ? 200 : 800; // Rápido: 200ms, Lento: 800ms
    animationInterval = setInterval(randomTransformation, interval);
}

function stopAnimation() {
    clearInterval(animationInterval); // Detiene la animación
}

// Asignar eventos a los botones
document.getElementById('btn-uppercase').addEventListener('click', toUppercase);
document.getElementById('btn-lowercase').addEventListener('click', toLowercase);
document.getElementById('btn-capitalize-first').addEventListener('click', capitalizeFirstLetter);
document.getElementById('btn-capitalize-last').addEventListener('click', capitalizeLastLetter);
document.getElementById('btn-lowercase-first').addEventListener('click', lowercaseFirstLetter);
document.getElementById('btn-lowercase-last').addEventListener('click', lowercaseLastLetter);
document.getElementById('btn-vowels-uppercase').addEventListener('click', () => replaceVowels('uppercase'));
document.getElementById('btn-vowels-lowercase').addEventListener('click', () => replaceVowels('lowercase'));
document.getElementById('btn-consonants-uppercase').addEventListener('click', () => replaceConsonants('uppercase'));
document.getElementById('btn-consonants-lowercase').addEventListener('click', () => replaceConsonants('lowercase'));
document.getElementById('btn-random').addEventListener('click', () => setSpeed('fast')); // Iniciar aleatorio rápido
document.getElementById('btn-stop').addEventListener('click', stopAnimation); // Parar la animación
document.getElementById('btn-fast').addEventListener('click', () => setSpeed('fast')); // Aumentar velocidad
document.getElementById('btn-slow').addEventListener('click', () => setSpeed('slow')); // Disminuir velocidad
