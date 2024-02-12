function applyParallaxEffect(elementId, factor) {
    const parallaxElement = document.getElementById(elementId);
    if (parallaxElement) {
      const scrollValue = window.scrollY;
      parallaxElement.style.backgroundPosition = `center ${-scrollValue * factor}px`;
    }
  }
  
  document.addEventListener('scroll', function() {
    // Aplicar parallax al elemento con id 'inicio' y factor 0.5
    applyParallaxEffect('inicio', 0.25);
  
    // Aplicar parallax al elemento con id 'contact' y factor 0.3 (ajusta según sea necesario)
    applyParallaxEffect('contact', 0.8);

    // Aplicar parallax al elemento con id 'contact' y factor 0.3 (ajusta según sea necesario)
    // applyParallaxEffect('sobre_mi', 0.55);
  });