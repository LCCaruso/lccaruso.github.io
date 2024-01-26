document.addEventListener('DOMContentLoaded', function () {
    const backgroundContainer = document.getElementById('background-container');
  
    function createRandomDot() {
      const dot = document.createElement('div');
      dot.className = 'dot';
      dot.style.width = Math.random() * 10 + 'px'; // Tamaño aleatorio entre 1px y 10px
      dot.style.height = dot.style.width;
      dot.style.opacity = Math.random() * 0.7 + 0.3; // Opacidad aleatoria entre 0.3 y 1
      dot.style.backgroundColor = '#000'; // Color negro
      dot.style.position = 'absolute';
      dot.style.top = Math.random() * 100 + 'vh'; // Posición vertical aleatoria
      dot.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
  
      backgroundContainer.appendChild(dot);
  
      setTimeout(() => {
        dot.remove();
      }, 1000); // Elimina el punto después de 1 segundos
    }
  
    function generateRandomDots() {
      setInterval(createRandomDot, 100); // Genera un nuevo punto cada 0,1 segundo
    }
  
    generateRandomDots();
  });