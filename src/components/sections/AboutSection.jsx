import SectionTitle from '../ui/SectionTitle';

function AboutSection({ about }) {
  return (
    <section
      className="container-sobre-mi bg-cover bg-fixed bg-center"
      id="sobre-mi"
      style={{ backgroundImage: `url(${about.backgroundImage})` }}
    >
      <div className="fondo-negro-sobre-mi h-full w-full bg-[#000a] px-8 py-20">
        <SectionTitle text="SOBRE MI" iconClass="ri-user-line" />
        
        <div className="contenido mt-12 m-auto max-w-[900px] rounded-[12px] bg-[#27272a] p-8 flex gap-8 items-start max-[768px]:flex-col max-[768px]:items-center">
          <img
            src={about.photo}
            alt={about.photoAlt}
            className="w-[220px] h-[220px] rounded-[12px] object-cover shrink-0 border-2 border-[#333]"
          />
          <div className="flex-1 text-center max-[768px]:text-center">
            {about.paragraphs.map((paragraph) => (
              <p className="text-lg leading-[1.6] text-[#ccc] mb-6 last:mb-0" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;