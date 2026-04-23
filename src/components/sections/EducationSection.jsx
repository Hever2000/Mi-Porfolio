import SectionTitle from '../ui/SectionTitle';

function EducationSection({ items }) {
  return (
    <section className="section-educacion m-auto max-w-[1200px] px-8 py-20" id="educacion">
      <SectionTitle text="EDUCACION" iconClass="ri-graduation-cap-line" />
      <div className="container-educacion mt-16 flex flex-row flex-wrap justify-center gap-6">
        {items.map((education) => (
          <div
            className="div-educacion flex flex-col items-center p-6 rounded-[12px] bg-[#27272a] border-2 border-transparent transition-all duration-300 hover:scale-[1.02] hover:border-blue-500 cursor-default"
            key={education.imageAlt}
          >
            <img
              src={education.image}
              alt={education.imageAlt}
              className="h-[180px] w-[180px] rounded-[10px] object-cover mb-4"
            />
            <p className="text-center text-base text-[#ccc] max-w-[220px]">{education.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EducationSection;