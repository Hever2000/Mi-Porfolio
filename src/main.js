import './style.css';

const navLinksList = document.querySelectorAll('.inicio a[href^="#"]');

navLinksList.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href')?.slice(1);
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    event.preventDefault();
    const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  });
});

if (typeof ScrollReveal === 'function') {
  const sr = ScrollReveal({ reset: true });

  sr.reveal('.container-inicio', {
    duration: 2000,
    origin: 'bottom',
    distance: '100px',
    scale: 0.8,
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
}

const lista = document.getElementById('lista');
const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');

if (abrir && lista) {
  abrir.addEventListener('click', () => {
    lista.classList.add('visible');
  });
}

if (cerrar && lista) {
  cerrar.addEventListener('click', () => {
    lista.classList.remove('visible');
  });
}

const contactameButton = document.getElementById('contactame');
const closeButton = document.getElementById('closeBtn');
const formContainer = document.getElementById('form');
const overlay = document.getElementById('overlay');

const showContactForm = () => {
  if (!formContainer || !overlay) return;
  formContainer.style.display = 'block';
  overlay.style.display = 'block';
};

const hideContactForm = () => {
  if (!formContainer || !overlay) return;
  formContainer.style.display = 'none';
  overlay.style.display = 'none';
};

if (contactameButton) {
  contactameButton.addEventListener('click', () => {
    if (!formContainer) return;
    const isVisible = formContainer.style.display === 'block';
    if (isVisible) {
      hideContactForm();
    } else {
      showContactForm();
    }
  });
}

if (closeButton) {
  closeButton.addEventListener('click', hideContactForm);
}

if (overlay) {
  overlay.addEventListener('click', hideContactForm);
}
