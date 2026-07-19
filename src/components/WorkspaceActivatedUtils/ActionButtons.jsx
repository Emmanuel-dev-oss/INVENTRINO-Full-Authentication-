import { Button, Stack, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { tokens } from './theme.js';

/**
 * Primary + secondary CTA pair. The primary button owns the page's
 * one moment of "delight" motion: the arrow glyph nudges rightward
 * on hover rather than the whole button jumping around.
 */
const ActionButtons = ({ onLaunch, onBackHome }) => {
  return (
    <Stack
      spacing={1.5}
      sx={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 440, mx: 'auto' }}
    >
      <Button
        component={motion.button}
        whileHover={{ scale: 1.015, y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={onLaunch}
        fullWidth
        size="large"
        sx={{
          py: 1.6,
          fontSize: '1rem',
          color: '#fff',
          background: tokens.gradient.success,
          boxShadow: '0 14px 30px rgba(14, 159, 104, 0.32)',
          '&:hover': {
            boxShadow: '0 18px 38px rgba(14, 159, 104, 0.4)',
          },
        }}
        endIcon={
          <Box
            component={motion.span}
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            sx={{ display: 'inline-flex' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h13" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              <path d="M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Box>
        }
      >
        Launch Workspace
      </Button>

      <Button
        component={motion.button}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        onClick={onBackHome}
        fullWidth
        size="large"
        variant="outlined"
        sx={{
          py: 1.5,
          fontSize: '0.98rem',
          color: tokens.color.ink,
          borderColor: tokens.color.border,
          '&:hover': {
            borderColor: tokens.color.emerald400,
            backgroundColor: tokens.color.emerald50,
          },
        }}
      >
        Back to Home
      </Button>
    </Stack>
  );
};

export default ActionButtons;