document.addEventListener("DOMContentLoaded", () => {
  const flower = document.querySelector("#animation-flower");
  const word = document.querySelector("h1");
  
  // Mostrar las flores después de 2 segundos y ocultar el mensaje
  setTimeout(() => {
    flower.style.display = "block"; // Mostrar las flores
    word.style.display = "none"; // Ocultar el mensaje
  }, 2000);
});

function createRaindrop() {
  const body = document.querySelector("body");
  const xPosition = Math.random() * window.innerWidth;
  const delay = Math.random() * 5;
  const duration = Math.random() * 2 + 2;

  const rainDrop = document.createElement("div");
  rainDrop.className = "rain"; // Clase definida en CSS
  rainDrop.style.left = `${xPosition}px`; // Posición aleatoria
  rainDrop.style.animationDelay = `${delay}s`; // Retraso aleatorio
  rainDrop.style.animationDuration = `${duration}s`; // Duración aleatoria
  rainDrop.style.display = "block"; // Mostrar gota
  body.appendChild(rainDrop);

  // Eliminar la gota después de un tiempo
  setTimeout(() => {
    rainDrop.remove();
  }, (duration + 1) * 1000); // Ajustar tiempo de eliminación
}

// Crear gotas a intervalos regulares
setInterval(createRaindrop, 300); // Cada 300 ms
