import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import PremiumButton from '../ui/PremiumButton';

const roles = ['FullStack Developer', 'AI Automation', 'Ingeniero Informático'];
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function ScrambleText({ texts }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(texts[0]);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const scramble = () => {
      const target = texts[currentIndex];
      const nextIndex = (currentIndex + 1) % texts.length;
      let step = 0;
      const maxSteps = 12;

      intervalRef.current = setInterval(() => {
        step++;
        if (step >= maxSteps) {
          clearInterval(intervalRef.current);
          setDisplayText(target);
          timeoutRef.current = setTimeout(() => {
            setCurrentIndex(nextIndex);
          }, 2000);
          return;
        }

        setDisplayText(
          target
            .split('')
            .map((ch, i) => {
              if (i < Math.floor((step / maxSteps) * target.length)) return ch;
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );
      }, 60);
    };

    scramble();

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, texts]);

  return <span aria-live="polite">{displayText}</span>;
}

function FloatingLogo({ src, alt }) {
  return (
    <motion.div
      className="relative"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
    >
      <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl" />
      <motion.img
        src={src}
        alt={alt}
        className="relative w-full drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </motion.div>
  );
}

function HeroSection({ hero }) {
  return (
    <header className="relative min-h-screen overflow-hidden" id="inicio">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/3 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1200px] grid-cols-2 items-center gap-8 px-8 max-[900px]:grid-cols-1 max-[900px]:pt-28">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-xs font-medium text-blue-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            AI Automation Engineer
          </motion.div>

          <h1 className="mb-2 text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
            Hola, soy{' '}
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Santiago
            </span>
          </h1>

          <h2 className="mb-6 min-h-[3rem] text-[clamp(1.1rem,2vw,1.5rem)] font-medium leading-relaxed text-[#ccc]">
            <ScrambleText texts={roles} />
          </h2>

          <motion.p
            className="mb-8 max-w-lg text-sm leading-relaxed text-[#999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Diseño e implemento sistemas autónomos con IA, automatizaciones
            inteligentes y arquitecturas escalables.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <PremiumButton
              variant="accent"
              size="lg"
              href={hero.cvFile}
              download="CVSantiagoCoronel.pdf"
              icon={<i className="ri-file-download-line" />}
            >
              Descargar CV
            </PremiumButton>

            <PremiumButton
              variant="ghost"
              size="lg"
              href={hero.githubUrl}
              icon={<i className="ri-github-fill text-lg" />}
            />

            <PremiumButton
              variant="ghost"
              size="lg"
              href={hero.linkedinUrl}
              icon={<i className="ri-linkedin-fill text-lg text-blue-500" />}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md max-[900px]:hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <FloatingLogo src={hero.logo} alt="Logo principal" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-[#555]"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
        >
          <span className="text-xs font-medium tracking-widest uppercase">
            Scroll
          </span>
          <i className="ri-arrow-down-s-line text-xl" />
        </motion.div>
      </motion.div>
    </header>
  );
}

export default HeroSection;
