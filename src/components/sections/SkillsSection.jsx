import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const iconMap = {
  'ri-robot-line': <i className="ri-robot-line" />,
  'ri-flow-chart': <i className="ri-flow-chart" />,
  'ri-code-s-slash-line': <i className="ri-code-s-slash-line" />,
  'ri-html5-fill': <i className="ri-html5-fill" />,
  'ri-javascript-fill': <i className="ri-javascript-fill" />,
  'devicon-python-plain tech-icon': <i className="devicon-python-plain tech-icon" />,
  'devicon-java-plain tech-icon': <i className="devicon-java-plain tech-icon" />,
  'ri-reactjs-line': <i className="ri-reactjs-line" />,
};

function SkillCard({ skill, index }) {
  const [ref, isInView] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-xl border border-[#222] bg-[#27272a] p-5 transition-all duration-500 hover:border-blue-500/20"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-[1]">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-lg text-blue-400 transition-all duration-300 group-hover:bg-blue-500/20 group-hover:text-blue-300">
          {iconMap[skill.iconClass] || <i className={skill.iconClass} />}
        </div>

        <h4 className="mb-2 text-base font-semibold text-white transition-colors duration-300 group-hover:text-blue-200">
          {skill.title}
        </h4>

        <p className="text-sm leading-relaxed text-[#999]">{skill.description}</p>

        {skill.source && skill.source !== '#' && (
          <motion.a
            href={skill.source}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
            whileHover={{ x: 3 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            Fuente <i className="ri-arrow-right-line text-xs" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

function SkillsSection({ skills }) {
  return (
    <section className="relative overflow-hidden px-8 py-24" id="skills">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-32 top-1/2 h-[400px] w-[400px] rounded-full bg-blue-500/3 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <SectionTitle text="SKILLS" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.title} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
