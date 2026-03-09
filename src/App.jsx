import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

import logoHever from '../imagenes/Logo hever.png';
import cvFile from '../imagenes/CV-CoronelSantiago.pdf';
import portadaPortafolio from '../imagenes/portafolio.png';
import portadaAbm from '../imagenes/abm.png';
import portadaMovieApp from '../imagenes/MovieApp.png';
import fotoPersonal from '../imagenes/yo-lolla.jpeg';
import fondoSobreMi from '../imagenes/BannerHever.png';
import logoEuskal from '../imagenes/euskal echea.png';
import logoUsal from '../imagenes/USAL.jpg';
import logoProgramacion from '../imagenes/undraw_Programming_re_kg9v.png';

const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'skills', label: 'Skills' },
  { id: 'sobre-mi', label: 'Sobre Mi' },
  { id: 'educacion', label: 'Educacion' },
];

const projects = [
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

const skills = [
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

const educationItems = [
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

const baseButtonClass =
  'box-border h-[50px] min-w-[100px] max-w-fit cursor-default rounded-[15px] border border-[#404040] bg-[#1d1d1d] font-["Poppins",sans-serif] text-base text-white hover:border-2 hover:border-blue-600 hover:bg-[#2c2c2c] hover:font-medium hover:duration-100 hover:ease-in';

const navLinkClass =
  'relative pb-3 text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-500 after:content-[""] hover:after:w-full';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

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

  const handleNavClick = (event, targetId) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
      return;
    }

    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-[#18181b] font-['Poppins',sans-serif]">
      <nav className="sticky top-0 z-[1000] m-auto flex w-full flex-wrap items-center justify-around gap-8 bg-[#18181b] p-[15px] shadow-[0_0_20px_0_black]">
        <div className="max-w-[110px]">
          <a
            href="#inicio"
            aria-label="Ir al inicio"
            onClick={(event) => handleNavClick(event, 'inicio')}
          >
            <img src={logoHever} alt="Logo" className="flex w-full" />
          </a>
        </div>

        <button
          className={`${baseButtonClass} hidden min-w-[70px] max-[800px]:block max-[800px]:max-w-[100px] max-[800px]:border-none max-[800px]:text-[28px] max-[800px]:font-light`}
          id="abrir"
          aria-label="Abrir menu"
          type="button"
          onClick={() => setIsMenuOpen(true)}
        >
          <i className="ri-menu-fill" />
        </button>

        <ul
          className={`inicio list-none items-center gap-12 min-[801px]:relative min-[801px]:flex min-[801px]:opacity-100 min-[801px]:visible ${
            isMenuOpen
              ? 'max-[800px]:visible max-[800px]:fixed max-[800px]:right-0 max-[800px]:top-0 max-[800px]:z-[9999] max-[800px]:flex max-[800px]:min-h-full max-[800px]:flex-col max-[800px]:items-end max-[800px]:gap-8 max-[800px]:bg-[#18181b] max-[800px]:px-8 max-[800px]:pb-[100rem] max-[800px]:pt-8 max-[800px]:opacity-100 max-[800px]:shadow-[0_0_0_100vmax_#000a]'
              : 'max-[800px]:invisible max-[800px]:absolute max-[800px]:opacity-0'
          }`}
          id="lista"
        >
          {navItems.map((item) => (
            <li className="link" key={item.id}>
              <a
                href={`#${item.id}`}
                className={navLinkClass}
                onClick={(event) => handleNavClick(event, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}

          <button
            className={`${baseButtonClass} hidden max-[800px]:mt-10 max-[800px]:block max-[800px]:max-w-[200px] max-[800px]:border-none max-[800px]:text-[28px] max-[800px]:font-light`}
            id="cerrar"
            aria-label="Cerrar menu"
            type="button"
            onClick={() => setIsMenuOpen(false)}
          >
            <i className="ri-close-fill" />
          </button>
        </ul>

        <button
          className={`${baseButtonClass} h-[50px] w-[4rem] min-w-[4rem]`}
          id="contactame"
          type="button"
          onClick={() => setIsContactOpen((currentValue) => !currentValue)}
        >
          Contacto
        </button>
      </nav>

      <header
        className="container-inicio relative m-auto grid max-w-[1200px] grid-cols-2 items-center gap-8 px-8 pb-20 pt-28 max-[900px]:grid-cols-1"
        id="inicio"
      >
        <div className="content-inicio relative">
          <span className="blur pointer-events-none absolute left-0 top-0 z-[-100] shadow-[0_0_1000px_50px_blue]" />
          <span className="blur pointer-events-none absolute left-24 top-24 z-[-100] shadow-[0_0_1000px_50px_blue]" />
          <h4 className="mb-4 text-base font-semibold text-[#ccc]">
            MI PORTAFOLIO COMO DESARROLLADOR
          </h4>
          <h1 className="mb-4 text-5xl font-bold leading-[4rem] text-white max-[600px]:text-4xl max-[600px]:leading-[3.25rem]">
            Hola, soy{' '}
            <span className="typed [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_white]">
              Santiago
            </span>
            , FullStack Developer
          </h1>
          <br />
          <div className="btn-container flex max-w-[28rem] justify-around">
            <a href={cvFile} download="CVSantiagoCoronel.pdf">
              <button className={`${baseButtonClass} btn-cv`} type="button">
                CV <i className="ri-file-download-line" />
              </button>
            </a>
            <a href="https://github.com/Hever2000">
              <button className={`${baseButtonClass} btn-github`} type="button">
                <i className="ri-github-fill border-white text-2xl" />
              </button>
            </a>

            <a href="https://www.linkedin.com/in/santiago-coronel-8335422a7/">
              <button className={`${baseButtonClass} btn-linkedin`} type="button">
                <i className="ri-linkedin-fill bg-[#1d4ed8] text-2xl text-white" />
              </button>
            </a>
          </div>
        </div>
        <div className="img-logo relative block mx-auto my-[100px]">
          <img src={logoHever} alt="Logo principal" className="flex w-full" />
        </div>
      </header>

      <div
        className={`form-container fixed left-1/2 top-1/2 z-[9999] max-h-[50rem] max-w-[50rem] min-h-[50rem] min-w-[50rem] -translate-x-1/2 -translate-y-1/2 flex-col gap-5 rounded-2xl border-2 border-transparent text-white ${
          isContactOpen ? 'flex' : 'hidden'
        } max-[900px]:max-h-[90vh] max-[900px]:max-w-[92vw] max-[900px]:min-h-fit max-[900px]:min-w-[92vw]`}
        id="form"
        style={{
          background:
            'linear-gradient(#212121, #212121) padding-box, linear-gradient(145deg, transparent 35%, blue, #40c9ff) border-box',
        }}
      >
        <form
          className="form relative mx-[5%] my-[15%] flex flex-col justify-center max-[900px]:my-[8%]"
          action="https://formsubmit.co/santicoronellancellotti@gmail.com"
          method="POST"
        >
          <span className="mb-8 text-2xl font-semibold text-[#717171]">
            <i className="ri-phone-fill" /> : +54 1164671992
          </span>
          <div className="form-group flex min-h-max min-w-max flex-col gap-4">
            <label htmlFor="email" className="text-2xl font-semibold text-[#717171]">
              Tu email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mb-4 w-full rounded-lg border border-[#414141] bg-transparent px-4 py-3 text-white outline-none placeholder:opacity-50 focus:border-[#40c9ff]"
            />
          </div>
          <div className="form-group flex min-h-max min-w-max flex-col gap-4">
            <label htmlFor="textarea" className="text-2xl font-semibold text-[#717171]">
              Como podemos ayudarte?
            </label>
            <textarea
              name="textarea"
              id="textarea"
              rows="10"
              cols="50"
              required
              className="mb-8 h-1/2 max-w-full resize-none rounded-lg border border-[#414141] bg-transparent px-4 py-3 text-white outline-none focus:border-[#40c9ff]"
            />
          </div>
          <button
            className="form-submit-btn flex h-4 w-16 items-center justify-center self-start rounded-[15px] border-2 border-blue-600 bg-transparent p-6 text-base font-semibold text-white hover:bg-blue-600 hover:duration-[400ms] active:scale-95"
            type="submit"
          >
            ENVIAR
          </button>
          <span
            id="closeBtn"
            className="close absolute right-2 top-2 mx-4 cursor-pointer text-[2rem] text-white hover:text-red-600"
            onClick={() => setIsContactOpen(false)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                setIsContactOpen(false);
              }
            }}
          >
            <i className="ri-close-fill" />
          </span>
        </form>
      </div>

      {isContactOpen && (
        <span
          className="overlay fixed left-0 top-0 z-[1000] h-full w-full bg-[#000a]"
          id="overlay"
          onClick={() => setIsContactOpen(false)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setIsContactOpen(false);
            }
          }}
          role="button"
          tabIndex={0}
        />
      )}

      <section className="section-proyectos m-auto mt-40 max-w-[1200px] px-8 py-20" id="proyectos">
        <h2 className="header-skills text-center text-4xl font-semibold text-white">
          <span>
            <i className="ri-briefcase-line" />
          </span>{' '}
          PROYECTOS
        </h2>
        <div className="container-proyectos mt-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
          {projects.map((project) => (
            <div
              className="card-proyecto flex min-h-[420px] flex-col overflow-hidden rounded-[19px] border border-transparent bg-[#27272a] transition duration-300 ease-in hover:-translate-y-1 hover:border-[#3b82f6]"
              key={project.title}
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className="h-[200px] w-full object-cover"
              />
              <div className="container-card-text flex flex-1 flex-col gap-3 p-4">
                <div
                  className="project-stack mb-2 mt-1 flex flex-wrap items-center gap-2"
                  aria-label={project.stackLabel}
                >
                  {project.stackIcons.map((stackIcon) => (
                    <i
                      className={stackIcon.className}
                      title={stackIcon.title}
                      key={`${project.title}-${stackIcon.title}`}
                    />
                  ))}
                </div>
                <h4 className="text-2xl text-white">{project.title}</h4>
                <p className="leading-[1.4] text-[#ccc]">{project.description}</p>

                <div className="mt-auto flex items-center gap-2">
                  <a href={project.preview}>
                    <button className={baseButtonClass} type="button">
                      Preview
                    </button>
                  </a>
                  <a href={project.repo}>
                    <button className={baseButtonClass} type="button">
                      <i className="ri-github-fill text-2xl" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-skills m-auto max-w-[1200px] px-8 py-20" id="skills">
        <h2 className="header-skills text-center text-4xl font-semibold text-white">SKILLS</h2>
        <div className="features mb-16 mt-16 grid grid-cols-4 gap-8 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {skills.map((skill) => (
            <div
              className="card rounded-[15px] border-2 border-transparent bg-[#27272a] p-4 transition-all duration-300 ease-in hover:border-white hover:bg-[#323232]"
              key={skill.title}
            >
              <span className="mb-4 inline-block rounded-[5px] bg-[#1e40af] px-[9px] py-[2px] text-[1.75rem] text-white">
                <i className={skill.iconClass} />
              </span>
              <h4 className="mb-2 text-[1.2rem] font-semibold text-white">{skill.title}</h4>
              <p className="mb-4 text-[#ccc]">{skill.description}</p>
              <a href={skill.source} className="text-white transition-all duration-300 ease-in hover:text-[#1e40af]">
                Fuente <i className="ri-arrow-right-line" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section
        className="container-sobre-mi bg-cover bg-fixed bg-center"
        id="sobre-mi"
        style={{ backgroundImage: `url(${fondoSobreMi})` }}
      >
        <div className="fondo-negro-sobre-mi h-full w-full bg-[#000a] px-8 py-20">
          <h2 className="header-skills text-center text-4xl font-semibold text-white">
            <span>
              <i className="ri-user-line" />
            </span>{' '}
            SOBRE MI
          </h2>
          <div className="border">
            <div className="contenido m-auto mt-12 max-w-[600px] rounded-[19px] bg-[#27272a] p-[10px] shadow-[0_0_40px_0_#0008]">
              <img
                src={fotoPersonal}
                alt="Foto personal"
                className="mx-auto my-10 max-h-[200px] max-w-[200px] rounded-full object-cover object-top shadow-[0_0_40px_0_#9998]"
              />
              <p className="m-[10px] p-5 text-center text-[25px] leading-[1.5] text-[#ccc]">
                Me llamo Santiago Coronel y soy estudiante de tercer ano de ingenieria en
                informatica. Me atrae mucho la programacion y el pensamiento logico para crear
                soluciones.
              </p>
              <p className="m-[10px] p-5 text-center text-[25px] leading-[1.5] text-[#ccc]">
                Actualmente estoy aprendiendo mas a profundidad sobre tecnologias como React y Java
                (Spring Boot). Al mismo tiempo, estoy creando proyectos para demostrar mis
                habilidades y mejorar mi portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-educacion m-auto max-w-[1200px] px-8 py-20" id="educacion">
        <h2 className="header-skills text-center text-4xl font-semibold text-white">
          <span>
            <i className="ri-graduation-cap-line" />
          </span>{' '}
          EDUCACION
        </h2>
        <div className="container-educacion mt-16 flex flex-row flex-wrap justify-center gap-4">
          {educationItems.map((education) => (
            <div
              className="div-educacion m-8 min-h-[400px] w-[300px] rounded-[19px] bg-[#27272a]"
              key={education.imageAlt}
            >
              <img
                src={education.image}
                alt={education.imageAlt}
                className="mx-auto mt-5 h-[200px] w-[200px] rounded-[20px] object-cover"
              />
              <p className="m-5 text-center text-[x-large] text-[#ccc]">{education.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="section-footer relative m-auto grid max-w-[1200px] grid-cols-[400px_repeat(3,minmax(0,1fr))] gap-8 px-8 py-20 max-[900px]:grid-cols-[1fr_200px] max-[600px]:grid-cols-[1fr_150px]">
        <span className="blur pointer-events-none absolute left-0 top-0 z-[-100] shadow-[0_0_1000px_50px_blue]" />
        <span className="blur pointer-events-none absolute right-0 top-32 z-[-100] shadow-[0_0_1000px_50px_blue]" />

        <div className="column">
          <div className="logo mb-8 max-w-[100px]">
            <img src={logoHever} alt="Logo footer" className="flex w-full" />
          </div>
          <p className="mb-8 text-[#ccc]">Aca les dejo mis redes, por si quieren mirar o seguirme.</p>
          <div className="socials flex items-center gap-4">
            <a
              href="https://www.youtube.com/channel/UCOiPNOa8amvlQ6ynDN4FkKw"
              className="rounded-full border border-[#ccc] px-[10px] py-[5px] text-[1.25rem] text-[#ccc] transition-all duration-300 ease-in hover:border-[#1d4ed8] hover:bg-[#1d4ed8] hover:text-white"
            >
              <i className="ri-youtube-line" />
            </a>
            <a
              href="https://www.instagram.com/santicoro_/"
              className="rounded-full border border-[#ccc] px-[10px] py-[5px] text-[1.25rem] text-[#ccc] transition-all duration-300 ease-in hover:border-[#1d4ed8] hover:bg-[#1d4ed8] hover:text-white"
            >
              <i className="ri-instagram-line" />
            </a>
            <a
              href="https://www.linkedin.com/in/santiago-coronel-8335422a7/"
              className="rounded-full border border-[#ccc] px-[10px] py-[5px] text-[1.25rem] text-[#ccc] transition-all duration-300 ease-in hover:border-[#1d4ed8] hover:bg-[#1d4ed8] hover:text-white"
            >
              <i className="ri-linkedin-box-fill" />
            </a>
          </div>
        </div>

        <div className="column">
          <h4 className="mb-8 text-[1.2rem] font-medium text-white">Marketing</h4>
          <a
            href="#"
            className="mb-4 block text-[#ccc] transition-all duration-300 ease-in hover:text-[#1d4ed8]"
          >
            Business
          </a>
          <a
            href="#"
            className="mb-4 block text-[#ccc] transition-all duration-300 ease-in hover:text-[#1d4ed8]"
          >
            Partnership
          </a>
          <a
            href="#"
            className="mb-4 block text-[#ccc] transition-all duration-300 ease-in hover:text-[#1d4ed8]"
          >
            Network
          </a>
        </div>

        <div className="column">
          <h4 className="mb-8 text-[1.2rem] font-medium text-white">About Me</h4>
          <a
            href="#"
            className="mb-4 block text-[#ccc] transition-all duration-300 ease-in hover:text-[#1d4ed8]"
          >
            Blogs
          </a>
          <a
            href="#"
            className="mb-4 block text-[#ccc] transition-all duration-300 ease-in hover:text-[#1d4ed8]"
          >
            Channels
          </a>
          <a
            href="#"
            className="mb-4 block text-[#ccc] transition-all duration-300 ease-in hover:text-[#1d4ed8]"
          >
            Sponsors
          </a>
        </div>

        <div className="column">
          <h4 className="mb-8 text-[1.2rem] font-medium text-white">Contact</h4>
          <a
            href="#"
            className="mb-4 block text-[#ccc] transition-all duration-300 ease-in hover:text-[#1d4ed8]"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="mb-4 block text-[#ccc] transition-all duration-300 ease-in hover:text-[#1d4ed8]"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="mb-4 block text-[#ccc] transition-all duration-300 ease-in hover:text-[#1d4ed8]"
          >
            Terms & Conditions
          </a>
        </div>
      </footer>

      <div className="copyright m-auto max-w-[1200px] p-4 text-center text-[0.8rem] text-white">
        Copyright (c) 2024 Hever2000 Channel. All Rights Reserved.
      </div>
    </div>
  );
}

export default App;
