// Obtener el elemento del contador
const countElement = document.querySelector('.count');

// Función para incrementar el contador automáticamente
function autoIncrementCounter() {
    // Obtener el valor actual del contador
    let currentCount = parseInt(countElement.textContent);
    
    // Incrementar el contador automáticamente
    currentCount++;
    
    // Actualizar el contenido del contador
    countElement.textContent = currentCount;
}

// Iniciar el contador automáticamente cuando la página se carga
document.addEventListener('DOMContentLoaded', () => {
    // Espera un segundo (1000 ms) antes de iniciar el contador
    setTimeout(autoIncrementCounter, 1000);
});
