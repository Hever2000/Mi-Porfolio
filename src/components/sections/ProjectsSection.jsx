import { baseButtonClass } from '../../constants/ui';
import SectionTitle from '../ui/SectionTitle';

function ProjectsSection({ projects }) {
  return (
    <section className="section-proyectos m-auto mt-40 max-w-[1200px] px-8 py-20" id="proyectos">
      <SectionTitle text="PROYECTOS" iconClass="ri-briefcase-line" />
      <div className="container-proyectos mt-12 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
        {projects.map((project) => (
          <div
            className="card-proyecto flex min-h-[420px] flex-col overflow-hidden rounded-[19px] border border-transparent bg-[#27272a] transition duration-300 ease-in hover:-translate-y-1 hover:border-[#3b82f6]"
            key={project.title}
          >
            <img src={project.image} alt={project.imageAlt} className="h-[200px] w-full object-cover" />
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
  );
}

export default ProjectsSection;
