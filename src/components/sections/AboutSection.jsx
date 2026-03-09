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
        <div className="border">
          <div className="contenido m-auto mt-12 max-w-[600px] rounded-[19px] bg-[#27272a] p-[10px] shadow-[0_0_40px_0_#0008]">
            <img
              src={about.photo}
              alt={about.photoAlt}
              className="mx-auto my-10 max-h-[200px] max-w-[200px] rounded-full object-cover object-top shadow-[0_0_40px_0_#9998]"
            />
            {about.paragraphs.map((paragraph) => (
              <p className="m-[10px] p-5 text-center text-[25px] leading-[1.5] text-[#ccc]" key={paragraph}>
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
