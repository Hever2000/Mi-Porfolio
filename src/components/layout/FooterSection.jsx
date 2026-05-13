import { motion } from 'framer-motion';
import { socialLinkClass } from '../../constants/ui';
import useScrollAnimation from '../../hooks/useScrollAnimation';

function FooterSection({ footer }) {
  const [ref, isInView] = useScrollAnimation();

  return (
    <>
      <footer className="relative overflow-hidden border-t border-[#222] px-8 py-20">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute -left-32 -top-32 h-[300px] w-[300px] rounded-full bg-blue-500/3 blur-[100px]" />
          <div className="absolute -bottom-32 -right-32 h-[300px] w-[300px] rounded-full bg-blue-500/3 blur-[100px]" />
        </div>

        <motion.div
          ref={ref}
          className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-[400px_repeat(3,minmax(0,1fr))] gap-8 max-[900px]:grid-cols-[1fr_200px] max-[600px]:grid-cols-[1fr_150px]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex flex-col gap-6">
            <div className="max-w-[90px]">
              <img src={footer.logo} alt="Logo footer" className="w-full" />
            </div>
            <p className="text-sm leading-relaxed text-[#999]">{footer.message}</p>
            <div className="flex items-center gap-3">
              {footer.socialLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={socialLinkClass}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <i className={link.iconClass} />
                </motion.a>
              ))}
            </div>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-6 text-sm font-semibold tracking-wider uppercase text-white">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link}`}>
                    <motion.a
                      href="#"
                      className="text-sm text-[#666] transition-colors duration-300 hover:text-blue-400"
                      whileHover={{ x: 3 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </footer>

      <div className="border-t border-[#222] px-8 py-5 text-center">
        <p className="text-xs text-[#555]">{footer.copyright}</p>
      </div>
    </>
  );
}

export default FooterSection;
