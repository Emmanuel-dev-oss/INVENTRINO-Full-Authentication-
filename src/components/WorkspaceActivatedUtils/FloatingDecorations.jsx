import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { tokens } from './theme.js';

/**
 * Ambient, decorative-only layer: a soft radial glow behind the hero,
 * two faint dot-grids anchored to opposite corners, and a couple of
 * slow-drifting blurred orbs. Everything here is aria-hidden and never
 * carries content, so it never competes with the real hierarchy.
 */

const DotGrid = ({ sx }) => (
  <Box
    aria-hidden
    sx={{
      position: 'absolute',
      width: 132,
      height: 92,
      backgroundImage: `radial-gradient(${tokens.color.emerald400} 1px, transparent 1.5px)`,
      backgroundSize: '18px 18px',
      opacity: 0.18,
      display: { xs: 'none', md: 'block' },
      ...sx,
    }}
  />
);

const Orb = ({ size, sx, delay = 0 }) => (
  <Box
    component={motion.div}
    aria-hidden
    animate={{ y: [0, -14, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay }}
    sx={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      background: tokens.gradient.success,
      opacity: 0.08,
      filter: 'blur(40px)',
      ...sx,
    }}
  />
);

const FloatingDecorations = () => {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {/* Top canvas glow */}
      <Box
        sx={{
          position: 'absolute',
          top: -120,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 900,
          height: 500,
          background: tokens.gradient.canvasGlow,
        }}
      />

      <DotGrid sx={{ top: 48, left: 40 }} />
      <DotGrid sx={{ bottom: 48, right: 40 }} />

      <Orb size={220} sx={{ top: -60, left: -60 }} delay={0} />
      <Orb size={260} sx={{ bottom: -100, right: -80 }} delay={1.2} />
    </Box>
  );
};

export default FloatingDecorations;