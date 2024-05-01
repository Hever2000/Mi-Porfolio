//const typed = new Typed(".typed", {
//strings : ["Santiago", "Coronel"],
//stringsElement: ".typed-element",
// typeSpeed: 75,
// backSpeed: 75,
// backDelay: 1000,
//startDelay: 300,
// loop: true,
// cursorChar: "|"
//});

//const navLinksList = document.querySelectorAll(".inicio a");

//navLinksList.forEach((link) => {
//    const targetElement = document.getElementById(targetId);
//    if (targetElement) {
//      const offsetTop =
//        targetElement.getBoundingClientRect().top + window.pageYOffset;
//      window.scrollTo({
//        top: offsetTop,
//        behavior: "smooth",
//      });
//    }
//  });
//});

ScrollReveal({ reset: true });

window.sr = ScrollReveal();

sr.reveal(".container-inicio", {
  duration: 2000,
  origin: "bottom",
  distance: "-100px",
  scale: 0.8,
});

sr.reveal(".container-skills", {
  duration: 2000,
  origin: "bottom",
  distance: "-100px",
  scale: 0.8,
});

sr.reveal(".section-educacion", {
  duration: 2000,
  origin: "top",
  distance: "-100px",
  scale: 0.8,
});

const lista = document.querySelector("#lista");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  lista.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  lista.classList.remove("visible");
});





/*function AlertaContactame(getElementById="contactame"){
  Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Esta función todavía no esta disponible",
      footer: '<a href="#">Why do I have this issue?</a>'
  });
}*/

document.getElementById('contactame').addEventListener('click', function() {
  var div = document.getElementById('form');
  var overlay = document.getElementById('overlay');
  if (div.style.display === 'none') {
    div.style.display = 'block'; // Mostrar el div
    overlay.style.display = 'block';
  } else {
    div.style.display = 'none'; // Ocultar el div
    overlay.style.display = 'none'; // Ocultar el fondo oscurecido
  }
});

document.getElementById('closeBtn').addEventListener('click', function() {
  var div = document.getElementById('form');
  var overlay = document.getElementById('overlay');
  div.style.display = 'none';
  overlay.style.display = 'none';
});