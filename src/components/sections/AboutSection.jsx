import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function AboutSection({ about }) {
  const [ref, isInView] = useScrollAnimation();

  return (
    <section
      className="relative bg-cover bg-fixed "
      id="sobre-mi"
      style={{ backgroundImage: `url(${about.backgroundImage})` }}
    >
      <div className="relative backdrop-blur-[2px]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#18181b]/80 via-[#18181b]/60 to-[#18181b]/80" />

        <div className="relative z-10 px-8 py-24">
          <SectionTitle text="SOBRE MI" iconClass="ri-user-line" />

          <motion.div
            ref={ref}
            className="mx-auto flex max-w-[900px] items-start gap-8 rounded-xl border border-[#222] bg-[#27272a] p-8 backdrop-blur-sm max-[768px]:flex-col max-[768px]:items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              className="shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <img
                  src={about.photo}
                  alt={about.photoAlt}
                  className="relative h-[220px] w-[220px] rounded-full border border-[#333] object-cover"
                />
              </div>
            </motion.div>

            <div className="flex-1 space-y-4">
              {about.paragraphs.map((paragraph) => (
                <motion.p
                  key={paragraph}
                  className="text-base font-normal leading-relaxed text-[#bbb]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
