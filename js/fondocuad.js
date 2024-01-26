const container = document.querySelector('.container');

function createFallingSquare() {
  const square = document.createElement('div');
  square.classList.add('falling-squares');
  const colors = ['#f00', '#0f0', '#00f', '#ff0']; // Colores disponibles, puedes agregar más si lo deseas
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  square.style.backgroundColor = randomColor;

  const size = Math.random() * 200 + 100; // Tamaño aleatorio entre 10px y 30px
  square.style.width = `${size}px`;
  square.style.height = `${size}px`;

  const delay = Math.random() * 0; // Retraso aleatorio para que comience a caer
  square.style.animationDelay = `${delay}s`;

  container.appendChild(square);

  setTimeout(() => {
    square.remove();
  }, 5000); // Elimina el cuadrado después de 5 segundos
}

setInterval(createFallingSquare, 10000); // Crea nuevos cuadrados cada 2 segundos