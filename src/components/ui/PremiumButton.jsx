import { motion } from 'framer-motion';

const variants = {
  primary:
    'relative overflow-hidden border border-[#333] bg-[#27272a] text-white hover:border-blue-500/40',
  ghost: 'relative overflow-hidden border border-transparent bg-transparent text-white hover:border-[#444]',
  accent:
    'relative overflow-hidden border border-blue-500/30 bg-blue-600/10 text-white hover:bg-blue-600/20 hover:border-blue-500/60',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-sm',
};

function PremiumButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  href,
  download,
  onClick,
  type = 'button',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg font-sans font-medium transition-all duration-300 select-none';
  const focus = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50';
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${focus} ${className}`;

  const content = (
    <>
      <span className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_center, rgba(59,130,246,0.12),transparent_70%)] group-hover:opacity-100" />
      <span className="relative z-[1] flex items-center gap-2">
        {icon && <span className="text-base">{icon}</span>}
        {children}
      </span>
    </>
  );

  const motionProps = {
    className: `group ${classes}`,
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 20 },
    ...props,
  };

  if (href) {
    return (
      <motion.a href={href} download={download} {...motionProps}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} {...motionProps}>
      {content}
    </motion.button>
  );
}

export default PremiumButton;
