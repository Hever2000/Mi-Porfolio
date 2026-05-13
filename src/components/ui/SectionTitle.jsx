import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function SectionTitle({ text, iconClass }) {
  const [ref, isInView] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="mb-3 inline-flex items-center gap-3">
        {iconClass && (
          <span className="text-blue-400">
            <i className={iconClass} />
          </span>
        )}
      </div>
      <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-[-0.02em] text-white">
        {text}
      </h2>
      <div className="mx-auto mt-3 h-[2px] w-12 rounded-full bg-gradient-to-r from-blue-500/40 to-blue-500/10" />
    </motion.div>
  );
}

export default SectionTitle;
