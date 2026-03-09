import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function useScrollReveal() {
  useEffect(() => {
    const sr = ScrollReveal({ reset: true });

    sr.reveal('.container-inicio', {
      duration: 2000,
      origin: 'bottom',
      distance: '100px',
      scale: 0.8,
    });

    sr.reveal('.section-proyectos', {
      duration: 1800,
      origin: 'bottom',
      distance: '80px',
      scale: 0.95,
    });

    sr.reveal('.section-proyectos .card-proyecto', {
      duration: 1400,
      origin: 'bottom',
      distance: '60px',
      interval: 150,
      scale: 0.98,
    });

    sr.reveal('.container-skills', {
      duration: 2000,
      origin: 'bottom',
      distance: '100px',
      scale: 0.8,
    });

    sr.reveal('.section-educacion', {
      duration: 2000,
      origin: 'top',
      distance: '100px',
      scale: 0.8,
    });

    return () => {
      if (typeof sr.destroy === 'function') {
        sr.destroy();
      }
    };
  }, []);
}

export default useScrollReveal;
