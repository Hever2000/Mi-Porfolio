import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import PremiumButton from '../ui/PremiumButton';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function ProjectCard({ project, index }) {
  const [ref, isInView] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-[#222] bg-[#27272a] transition-all duration-500 hover:border-blue-500/20"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#27272a]/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.imageAlt}
          className="h-[200px] w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#27272a] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="relative z-[1] flex flex-1 flex-col gap-3 p-5">
        {project.stackIcons.length > 0 && (
          <div className="mb-1 flex flex-wrap items-center gap-2" aria-label={project.stackLabel}>
            {project.stackIcons.map((icon) => (
              <i className={icon.className} title={icon.title} key={`${project.title}-${icon.title}`} />
            ))}
          </div>
        )}

        <h4 className="text-xl font-semibold tracking-[-0.01em] text-white transition-colors duration-300 group-hover:text-blue-300">
          {project.title}
        </h4>

        <p className="text-sm leading-relaxed text-[#999]">{project.description}</p>
      </div>

      <div className="mt-auto flex items-center gap-2 border-t border-[#222] px-5 py-3">
        {project.preview !== '#' && (
          <PremiumButton variant="accent" size="sm" href={project.preview} icon={<i className="ri-external-link-line" />}>
            Preview
          </PremiumButton>
        )}
        {project.repo !== '#' && (
          <PremiumButton variant="ghost" size="sm" href={project.repo} icon={<i className="ri-github-fill" />} />
        )}
      </div>
    </motion.div>
  );
}

function ProjectsSection({ projects }) {
  return (
    <section className="relative overflow-hidden px-8 py-24" id="proyectos">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/3 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <SectionTitle text="PROYECTOS" iconClass="ri-briefcase-line" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
