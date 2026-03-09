import SectionTitle from '../ui/SectionTitle';

function EducationSection({ items }) {
  return (
    <section className="section-educacion m-auto max-w-[1200px] px-8 py-20" id="educacion">
      <SectionTitle text="EDUCACION" iconClass="ri-graduation-cap-line" />
      <div className="container-educacion mt-16 flex flex-row flex-wrap justify-center gap-4">
        {items.map((education) => (
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
  );
}

export default EducationSection;
