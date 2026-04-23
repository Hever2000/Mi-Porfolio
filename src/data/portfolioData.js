import {
  chatBotLogo,
  cvFile,
  facturaAI,
  fondoSobreMi,
  fotoPersonal,
  logoEuskal,
  logoHever,
  logoUsal,
  portadaAbm,
  portadaMovieApp,
  portadaPortafolio,
  telegramLogo,
  logoUdemy,
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
    preview: 'https://portfolio-santiagocoronel.vercel.app/',
    repo: 'https://github.com/Hever2000/Mi-Porfolio',
    stackLabel: 'Stack Portafolio',
    stackIcons: [
      {
        className: 'devicon-javascript-plain colored text-[2rem]',
        title: 'JavaScript',
      },
      {
        className: 'devicon-react-original colored text-[2rem]',
        title: 'React',
      },
    ],
  },
  {
    title: 'FacturaAI',
    description: 'API procesadora de comprobantes y recibos con IA automáticamente.',
    image: facturaAI,
    imageAlt: 'FacturaAI',
    preview: 'https://factura-ai-web.vercel.app/',
    repo: 'https://github.com/Hever2000/FacturaAI-web',
    stackLabel: 'Stack FacturaAI',
    stackIcons: [
      {
        className: 'devicon-python-plain colored text-[2rem]',
        title: 'Python',
      },
      {
        className: 'devicon-fastapi-plain colored text-[2rem]',
        title: 'FastAPI',
      },
    ],
  },
  {
    title: 'AI Sales Agent',
    description: 'Sistema autónomo de generación y calificación de leads que reemplaza tareas de SDR y aumenta la tasa de conversión.',
    image: chatBotLogo,
    imageAlt: 'AI Sales Agent',
    preview: '#',
    repo: '#',
    stackLabel: 'Stack AI Sales Agent',
    stackIcons: [
      {
        className: 'devicon-n8n-colored text-[2rem]',
        title: 'n8n',
      },
      {
        className: 'devicon-openai colored text-[2rem]',
        title: 'OpenAI',
      },
    ],
  },
  {
    title: 'Chatbot Empresarial',
    description: 'Asistente interno para empleados que funciona como un "cerebro de la empresa": responde dudas, busca información en todos los sistemas y ejecuta tareas automáticamente.',
    image: telegramLogo,
    imageAlt: 'Chatbot Empresarial',
    preview: '#',
    repo: '#',
    stackLabel: 'Stack Chatbot',
    stackIcons: [
      {
        className: 'devicon-n8n-colored text-[2rem]',
        title: 'N8N',
      },
      {
        className: 'devicon-telegram colored text-[2rem]',
        title: 'Telegram',
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
    iconClass: 'ri-robot-line',
    title: 'AI & Automation',
    description: 'Diseño e implementación de sistemas autónomos basados en LLMs con n8n y LangChain.',
    source: '#',
  },
  {
    iconClass: 'ri-flow-chart',
    title: 'n8n',
    description: 'Automatizaciones workflow e integración de APIs para procesos inteligentes.',
    source: '#',
  },
  {
    iconClass: 'ri-code-s-slash-line',
    title: 'Prompt Engineering',
    description: 'Diseño de prompts avanzados y agentes de IA para automatización de tareas complejas.',
    source: '#',
  },
  {
    iconClass: 'ri-html5-fill',
    title: 'HTML-CSS',
    description: 'Maquetado semántico yresponsive con CSS Grid/Flexbox, accesibilidad y mejores prácticas de performance.',
    source: '#',
  },
  {
    iconClass: 'ri-javascript-fill',
    title: 'JavaScript',
    description: 'Manipulación del DOM, programación asíncrona con promises y async/await, closures, prototypes y ES6+ features.',
    source: '#',
  },
  {
    iconClass: 'devicon-python-plain tech-icon',
    title: 'Python',
    description: 'FastAPI, scripting, automatización con IA y gestión de dependencias con pip y virtual environments.',
    source: '#',
  },
  {
    iconClass: 'devicon-java-plain tech-icon',
    title: 'Java',
    description: 'POO con patrones de diseño, gestión de memoria,Collections Framework y programación concurrente.',
    source: '#',
  },
  {
    iconClass: 'ri-reactjs-line',
    title: 'React',
    description: 'Componentes funcionales con hooks, contexto, state management y ciclo de vida paraSPAs escalables.',
    source: '#',
  },
];

export const aboutData = {
  backgroundImage: fondoSobreMi,
  photo: fotoPersonal,
  photoAlt: 'Foto personal',
  paragraphs: [
    'Me llamo Santiago Coronel y soy estudiante de tercer año de ingeniería en informática. Me especializo en diseñar e implementar sistemas autónomos basados en LLMs.',
    'Construyo pipelines de automatización end-to-end que integran APIs, agentes de IA y bases de datos vectoriales para resolver problemas reales de negocio.',
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
    image: logoUdemy,
    imageAlt: 'Udemy',
    text: 'Curso de n8n - Master en Automatizaciones Inteligentes con IA',
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
