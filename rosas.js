document.addEventListener("DOMContentLoaded", () => {
  const flower = document.querySelector("#animation-flower");
  const word = document.querySelector("h1");
  
  // Mostrar las flores después de 2 segundos y ocultar el mensaje
  setTimeout(() => {
    flower.style.display = "block"; // Cambiado a "block" para mostrar correctamente
    word.style.display = "none"; // Asegúrate de que "h1" esté presente en tu HTML
  }, 2000);
});

function createRaindrop() {
  const body = document.querySelector("body");
  const xPosition = Math.random() * window.innerWidth;
  const delay = Math.random() * 5;
  const duration = Math.random() * 2 + 2;

  const rainDrop = document.createElement("div");
  rainDrop.className = "rain"; // Asegúrate de que el CSS tenga la clase "rain" definida
  rainDrop.style.left = `${xPosition}px`; // Uso correcto de template literals
  rainDrop.style.animationDelay = `${delay}s`; // Uso correcto de template literals
  rainDrop.style.animationDuration = `${duration}s`; // Uso correcto de template literals
  rainDrop.style.display = "block"; // Cambiado a "block" para que se muestre
  body.appendChild(rainDrop);

  // Se puede ajustar el tiempo según lo necesario
  setTimeout(() => {
    rainDrop.remove(); // Elimina la gota después de un tiempo
  }, (duration + 1) * 1000); // Ajuste de tiempo para la eliminación
}

// Ajustar la frecuencia de creación de gotas
setInterval(createRaindrop, 300); // Cambiado a 300 ms para un flujo más razonable
