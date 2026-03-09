import SectionTitle from '../ui/SectionTitle';

function SkillsSection({ skills }) {
  return (
    <section className="container-skills m-auto max-w-[1200px] px-8 py-20" id="skills">
      <SectionTitle text="SKILLS" />
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
  );
}

export default SkillsSection;
