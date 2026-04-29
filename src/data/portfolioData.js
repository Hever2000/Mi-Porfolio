import {
  n8nLogo,
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
  rag,
  logoUdemy,
  leads,
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
    imageAlt: 'Portafolio',
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
    title: 'ABM Alumnos',
    description: 'Aplicacion web hecha con Java y Spring Boot, que maneja las altas, bajas y modificaciones de alumnos.',
    image: portadaAbm,
    imageAlt: 'ABM Alumnos',
    preview: 'https://hever2000.github.io/Proyecto-ABM-Alumnos/',
    repo: 'https://github.com/Hever2000/Proyecto-ABM-Alumnos',
    stackLabel: 'Stack ABM',
    stackIcons: [
    ],
  },
  {
    title: 'MovieApp',
    description: 'Aplicacion web hecha aplicando conceptos de integracion con web APIs y manejo de estados.',
    image: portadaMovieApp,
    imageAlt: 'MovieApp',
    preview: 'https://hever2000.github.io/Proyecto-Peliculas-React/',
    repo: 'https://github.com/Hever2000/Proyecto-Peliculas-React',
    stackLabel: 'Stack MovieApp',
    stackIcons: [
    ],
  },
  {
    title: 'Chatbot RAG Empresarial',
    description: "Chatbot interno para empleados que funciona como un cerebro de la empresa: a partir de una arquitectura RAG, y luego de procesar la información mediante la carga de documentos, el chatbot puede responder preguntas sobre la empresa, sus procesos, políticas, etc. puede ser integrada con calendarios, CRMs, ERP, etc.",
    image: rag,
    imageAlt: 'Chatbot RAG Empresarial',
    preview: '#',
    repo: '#',
    stackLabel: 'Stack Chatbot',
    stackIcons: [
    ],
  },
  {
    title: 'FacturaAI',
    description: 'API procesadora de comprobantes y recibos con IA automáticamente integrado con OCR + IA como parser (Python + FastAPI).',
    image: facturaAI,
    imageAlt: 'FacturaAI',
    preview: 'https://factura-ai-web.vercel.app/',
    repo: 'https://github.com/Hever2000/FacturaAI-web',
    stackLabel: 'Stack FacturaAI',
    stackIcons: [
    ],
  },
  {
    title: 'Generador de Leads',
    description: 'Sistema autónomo de generación de leads mediante la busqueda y scraping en sitios web, y luego la automatización del contacto inicial a través de email o LinkedIn, utilizando n8n para orquestar todo el proceso.',
    image: leads,
    imageAlt: 'Generador de Leads',
    preview: '#',
    repo: '#',
    stackLabel: 'Stack Generador de Leads',
    stackIcons: [
    ],
  },
  
];

export const skills = [
  {
    iconClass: 'ri-robot-line',
    title: 'AI & Automation',
    description: 'Diseño e implementación de sistemas autónomos basados en LLMs.',
    source: '#',
  },
  {
    iconClass: 'ri-flow-chart',
    title: 'n8n',
    description: 'Automatizaciones avanzadas de procesos de negocio e integración de APIs para procesos inteligentes.',
    source: '#',
  },
  {
    iconClass: 'ri-code-s-slash-line',
    title: 'Prompt Engineering',
    description: 'Few-Shot, Chain-of-Thought y Step-Back Prompting.',
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
    description: 'Funciones de automatización con IA, scripting y gestión de dependencias con pip y virtual environments.',
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
