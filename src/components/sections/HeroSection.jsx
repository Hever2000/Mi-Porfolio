import { baseButtonClass } from '../../constants/ui';

function HeroSection({ hero }) {
  return (
    <header
      className="container-inicio relative m-auto grid max-w-[1200px] grid-cols-2 items-center gap-8 px-8 pb-20 pt-28 max-[900px]:grid-cols-1"
      id="inicio"
    >
      <div className="content-inicio relative">
        <span className="blur pointer-events-none absolute left-0 top-0 z-[-100] shadow-[0_0_1000px_50px_blue]" />
        <span className="blur pointer-events-none absolute left-24 top-24 z-[-100] shadow-[0_0_1000px_50px_blue]" />
        <h4 className="mb-4 text-base font-semibold text-[#ccc]">MI PORTAFOLIO COMO DESARROLLADOR</h4>
        <h1 className="mb-4 text-5xl font-bold leading-[4rem] text-white max-[600px]:text-4xl max-[600px]:leading-[3.25rem]">
          Hola, soy{' '}
          <span className="typed [-webkit-text-fill-color:transparent] [-webkit-text-stroke:1px_white]">
            Santiago
          </span>
          , FullStack Developer & AI Automation
        </h1>
        <br />
        <div className="btn-container flex max-w-[28rem] justify-around">
          <a href={hero.cvFile} download="CVSantiagoCoronel.pdf">
            <button className={`${baseButtonClass} btn-cv`} type="button">
              CV <i className="ri-file-download-line" />
            </button>
          </a>
          <a href={hero.githubUrl}>
            <button className={`${baseButtonClass} btn-github`} type="button">
              <i className="ri-github-fill border-white text-2xl" />
            </button>
          </a>
          <a href={hero.linkedinUrl}>
            <button className={`${baseButtonClass} btn-linkedin`} type="button">
              <i className="ri-linkedin-fill bg-[#1d4ed8] text-2xl text-white" />
            </button>
          </a>
        </div>
      </div>
      <div className="img-logo relative block mx-auto my-[100px]">
        <img src={hero.logo} alt="Logo principal" className="flex w-full" />
      </div>
    </header>
  );
}

export default HeroSection;
