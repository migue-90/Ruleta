// Aleatoriamente, dibuja 3 números entre el 0 y el 9.


// Variables
let contadorCreditos = 0;
const numero1DOM = document.querySelector ("#numero-1");
const numero2DOM = document.querySelector ("#numero-2");
const numero3DOM = document.querySelector ("#numero-3");
const jugar = document.querySelector ("#jugar");
const creditos = document.querySelector ("#creditos");
const comprarCreditos = document.querySelector ("#anyadir-credito");

// funcion

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
function busquedaAleatoria (){
    let numero1 = getRandomIntInclusive(1, 9);
    let numero2 = getRandomIntInclusive(1, 9);
    let numero3 = getRandomIntInclusive(1, 9);

numero1DOM.textContent = numero1;
numero2DOM.textContent = numero2;
numero3DOM.textContent = numero3;

if (numero1 === numero2 && numero2 === numero3) {
    contadorCreditos += 10;
} else {
    contadorCreditos -= 1;
}

actualizarCreditos();
}


// Función para actualizar la visualización de créditos
function actualizarCreditos() {
creditos.textContent = `💲 ${contadorCreditos}`;
}

// Evento de clic en el botón de jugar
jugar.addEventListener("click", busquedaAleatoria);


// Evento de clic en el botón de comprar créditos
comprarCreditos.addEventListener("click", function() {
    // Aquí puedes definir cuántos créditos se agregarán al comprar
    contadorCreditos += 50; // Por ejemplo, se agregan 50 créditos al comprar
    actualizarCreditos();
});


// Inicialización de la visualización de créditos
actualizarCreditos();