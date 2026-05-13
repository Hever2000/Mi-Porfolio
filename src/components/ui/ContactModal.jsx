import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ContactModal({ isOpen, contactData, onClose }) {
  const handleCloseOnKeyboard = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClose();
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const onEscape = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            onKeyDown={handleCloseOnKeyboard}
            role="button"
            tabIndex={0}
          />

          <motion.div
            className="fixed left-1/2 top-2/3 z-[1001] w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[#222] bg-[#212121] p-8 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: '-40%' }}
            animate={{ opacity: 1, scale: 1, y: '-50%' }}
            exit={{ opacity: 0, scale: 0.95, y: '-40%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button
              className="absolute right-4 top-4 text-[#666] transition-colors hover:text-red-400"
              onClick={onClose}
              aria-label="Cerrar"
              type="button"
            >
              <i className="ri-close-fill text-2xl" />
            </button>

            <div className="mb-6 flex items-center gap-2 text-sm text-[#666]">
              <i className="ri-phone-fill" />
              <span>: +54 1164671992</span>
            </div>

            <form
              className="flex flex-col gap-5"
              action={contactData.formAction}
              method="POST"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-[#888]">
                  Tu email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-[#333] bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[#555] focus:border-blue-500/50"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="textarea" className="text-sm font-medium text-[#888]">
                  ¿Cómo podemos ayudarte?
                </label>
                <textarea
                  name="textarea"
                  id="textarea"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-[#333] bg-transparent px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[#555] focus:border-blue-500/50"
                  placeholder="Escribí tu mensaje..."
                />
              </div>

              <motion.button
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-500/30 bg-blue-600/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-600/20 hover:border-blue-500/60"
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                ENVIAR
                <i className="ri-send-plane-line text-xs" />
              </motion.button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ContactModal;
