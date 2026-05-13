import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function EducationCard({ item, index }) {
  const [ref, isInView] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="group relative flex w-full max-w-[280px] flex-col items-center rounded-xl border border-[#222] bg-[#27272a] p-6 transition-all duration-500 hover:border-blue-500/20"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <motion.div
        className="relative mb-4 overflow-hidden rounded-lg"
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        <img
          src={item.image}
          alt={item.imageAlt}
          className="h-[160px] w-[160px] object-cover"
        />
      </motion.div>

      <p className="relative z-[1] text-center text-sm leading-relaxed text-[#bbb]">
        {item.text}
      </p>
    </motion.div>
  );
}

function EducationSection({ items }) {
  return (
    <section className="relative overflow-hidden px-8 py-24" id="educacion">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/3 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <SectionTitle text="EDUCACION" iconClass="ri-graduation-cap-line" />

        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <EducationCard key={item.imageAlt} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
