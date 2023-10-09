// Obtener el elemento del contador y el botón
const countElement = document.querySelector('.count');
const incrementButton = document.getElementById('increment');

// Función para incrementar el contador
function incrementCounter() {
    // Obtener el valor actual del contador
    let currentCount = parseInt(countElement.textContent);
    
    // Incrementar el contador
    currentCount++;
    
    // Actualizar el contenido del contador
    countElement.textContent = currentCount;
}

// Agregar un evento click al botón para llamar a la función de incremento
incrementButton.addEventListener('click', incrementCounter);
