import {
  cvFile,
  fondoSobreMi,
  fotoPersonal,
  logoEuskal,
  logoHever,
  logoProgramacion,
  logoUsal,
  portadaAbm,
  portadaMovieApp,
  portadaPortafolio,
} from '../assets/portfolioAssets';

export const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'skills', label: 'Skills' },
  { id: 'sobre-mi', label: 'Sobre Mi' },
  { id: 'educacion', label: 'Educacion' },
];

export const heroData = {
  logo: logoHever,
  cvFile,
  githubUrl: 'https://github.com/Hever2000',
  linkedinUrl: 'https://www.linkedin.com/in/santiago-coronel-8335422a7/',
};

export const contactData = {
  formAction: 'https://formsubmit.co/santicoronellancellotti@gmail.com',
};

export const projects = [
  {
    title: 'Portafolio',
    description: 'Este es mi portafolio personal como desarrollador FullStack.',
    image: portadaPortafolio,
    imageAlt: 'Proyecto 1',
    preview: 'https://hever2000.github.io/Mi-Porfolio/',
    repo: 'https://github.com/Hever2000/Mi-Porfolio',
    stackLabel: 'Stack Portafolio',
    stackIcons: [
      {
        className: 'devicon-javascript-plain colored text-[2rem]',
        title: 'JavaScript',
      },
    ],
  },
  {
    title: 'ABM Alumnos',
    description: 'Aplicacion web para gestionar alumnos de una escuela.',
    image: portadaAbm,
    imageAlt: 'Proyecto 2',
    preview: 'https://hever2000.github.io/Proyecto-ABM-Alumnos/',
    repo: 'https://github.com/Hever2000/Proyecto-ABM-Alumnos',
    stackLabel: 'Stack ABM',
    stackIcons: [
      {
        className: 'devicon-javascript-plain colored text-[2rem]',
        title: 'JavaScript',
      },
      { className: 'devicon-java-plain colored text-[2rem]', title: 'Java' },
      {
        className: 'devicon-spring-original colored text-[2rem]',
        title: 'Spring Boot',
      },
    ],
  },
  {
    title: 'MovieApp',
    description: 'Aplicacion web para buscar y likear peliculas y series.',
    image: portadaMovieApp,
    imageAlt: 'Proyecto 3',
    preview: 'https://hever2000.github.io/Proyecto-Peliculas-React/',
    repo: 'https://github.com/Hever2000/Proyecto-Peliculas-React',
    stackLabel: 'Stack MovieApp',
    stackIcons: [
      { className: 'devicon-react-original colored text-[2rem]', title: 'React' },
    ],
  },
];

export const skills = [
  {
    iconClass: 'ri-html5-fill',
    title: 'HTML-CSS',
    description: 'Mi primer lenguaje de programacion web.',
    source: 'https://www.youtube.com/watch?v=kN1XP-Bef7w&ab_channel=SoyDalto',
  },
  {
    iconClass: 'ri-javascript-fill',
    title: 'JavaScript',
    description:
      'Lenguaje de programacion que me permitio dar el salto a la programacion web.',
    source:
      'https://www.freecodecamp.org/learn/javascript-v9/#lecture-introduction-to-javascript',
  },
  {
    iconClass: 'devicon-java-plain tech-icon',
    title: 'Java',
    description: 'Aprendiendo a profundidad sobre el manejo de Spring Boot.',
    source: 'https://www.youtube.com/watch?v=z95mZVUcJ-E&t=2025s&ab_channel=SoyDalto',
  },
  {
    iconClass: 'ri-reactjs-line',
    title: 'React',
    description: 'Framework de JavaScript muy popular para construir interfaces de usuario.',
    source: '#',
  },
];

export const aboutData = {
  backgroundImage: fondoSobreMi,
  photo: fotoPersonal,
  photoAlt: 'Foto personal',
  paragraphs: [
    'Me llamo Santiago Coronel y soy estudiante de tercer ano de ingenieria en informatica. Me atrae mucho la programacion y el pensamiento logico para crear soluciones.',
    'Actualmente estoy aprendiendo mas a profundidad sobre tecnologias como React y Java (Spring Boot). Al mismo tiempo, estoy creando proyectos para demostrar mis habilidades y mejorar mi portfolio.',
  ],
};

export const educationItems = [
  {
    image: logoEuskal,
    imageAlt: 'Euskal Echea',
    text: 'Nivel primario y secundario (Bachiller en economia y administracion)',
  },
  {
    image: logoUsal,
    imageAlt: 'USAL',
    text: 'Nivel universitario (Ingenieria en informatica)',
  },
  {
    image: logoProgramacion,
    imageAlt: 'Programacion',
    text: 'Autodidacta',
  },
];

export const footerData = {
  logo: logoHever,
  message: 'Aca les dejo mis redes, por si quieren mirar o seguirme.',
  socialLinks: [
    {
      href: 'https://www.youtube.com/channel/UCOiPNOa8amvlQ6ynDN4FkKw',
      iconClass: 'ri-youtube-line',
    },
    {
      href: 'https://www.instagram.com/santicoro_/',
      iconClass: 'ri-instagram-line',
    },
    {
      href: 'https://www.linkedin.com/in/santiago-coronel-8335422a7/',
      iconClass: 'ri-linkedin-box-fill',
    },
  ],
  columns: [
    {
      title: 'Marketing',
      links: ['Business', 'Partnership', 'Network'],
    },
    {
      title: 'About Me',
      links: ['Blogs', 'Channels', 'Sponsors'],
    },
    {
      title: 'Contact',
      links: ['Contact Us', 'Privacy Policy', 'Terms & Conditions'],
    },
  ],
  copyright: 'Copyright (c) 2024 Hever2000 Channel. All Rights Reserved.',
};
