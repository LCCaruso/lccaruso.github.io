let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch(error) {
    display.value = 'Error';
  }
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento de audio
    const clickSound = document.getElementById('clickSound');
  
    // Función para reproducir el sonido
    function playClickSound() {
      clickSound.currentTime = 0; // Reinicia el sonido si ya está reproduciendo
      clickSound.play();
    }
  
    // Asignar la función playClickSound() a todos los botones
    const buttons = document.querySelectorAll('.calculator button');
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        if (button.classList.contains('igual')) {
          // Reproducir solo el sonido igual.mp3 si el botón es "="
          const igualSound = new Audio('./igual.mp3');
          igualSound.play();
        } else {
          // Reproducir el sonido genérico de tecla.mp3 para los demás botones
          playClickSound();
        }
      });
    });
  });