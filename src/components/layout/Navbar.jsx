import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PremiumButton from '../ui/PremiumButton';

function Navbar({ navItems, logo, isMenuOpen, onOpenMenu, onCloseMenu, onNavClick, onToggleContact }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? 'bg-[#18181b]/80 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.05)]'
          : 'bg-transparent'
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-4">
        <motion.a
          href="#inicio"
          className="max-w-[90px]"
          aria-label="Ir al inicio"
          onClick={(e) => onNavClick(e, 'inicio')}
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <img src={logo} alt="Logo" className="w-full" />
        </motion.a>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#333] text-white md:hidden"
          aria-label="Abrir menu"
          type="button"
          onClick={onOpenMenu}
        >
          <i className="ri-menu-fill text-lg" />
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <motion.a
                href={`#${item.id}`}
                className="relative pb-1 text-sm font-medium text-[#999] transition-colors duration-300 hover:text-white"
                onClick={(e) => onNavClick(e, item.id)}
                whileHover={{ y: -1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-[2px] bg-blue-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </li>
          ))}
        </ul>

        <PremiumButton
          variant="primary"
          size="sm"
          className="hidden md:inline-flex"
          onClick={onToggleContact}
        >
          Contacto
        </PremiumButton>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onCloseMenu}
            />
            <motion.div
              className="fixed right-0 top-0 z-[1000] flex h-full w-72 flex-col gap-6 bg-[#18181b] p-8 shadow-2xl md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <button
                className="self-end text-2xl text-white"
                aria-label="Cerrar menu"
                type="button"
                onClick={onCloseMenu}
              >
                <i className="ri-close-fill" />
              </button>

              {navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-lg font-medium text-[#999] transition-colors hover:text-white"
                  onClick={(e) => onNavClick(e, item.id)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {item.label}
                </motion.a>
              ))}

              <PremiumButton
                variant="accent"
                size="md"
                className="mt-4"
                onClick={onToggleContact}
              >
                Contacto
              </PremiumButton>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
