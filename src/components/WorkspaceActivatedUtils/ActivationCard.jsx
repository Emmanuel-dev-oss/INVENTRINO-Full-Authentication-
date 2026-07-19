import { Box, Paper, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { tokens } from './theme.js';

/**
 * A single premium "status" card: an icon composition on the left
 * (a package mark with a small emerald "ready" badge overlapping it,
 * echoing the badge-on-avatar pattern used across Stripe/Linear),
 * and confirmation copy on the right.
 */
const ActivationCard = () => {
  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay: 0.1 }}
      elevation={0}
      sx={{
        position: 'relative',
        zIndex: 1,
        p: { xs: 3, sm: 4 },
        borderRadius: 5,
        border: `1px solid ${tokens.color.border}`,
        background: tokens.color.glass,
        backdropFilter: 'blur(16px)',
        boxShadow: '0 20px 45px rgba(14, 22, 19, 0.06)',
      }}
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems={{ xs: 'flex-start', sm: 'center' }}>
        <Box sx={{ position: 'relative', flexShrink: 0 }}>
          <Box
            sx={{
              width: 76,
              height: 76,
              borderRadius: '22px',
              background: tokens.color.emerald50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 8l-9-5-9 5 9 5 9-5z"
                stroke={tokens.color.emerald600}
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path d="M3 8v8l9 5 9-5V8" stroke={tokens.color.emerald600} strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M12 13v8" stroke={tokens.color.emerald600} strokeWidth="1.6" />
            </svg>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: -6,
              right: -6,
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: tokens.gradient.success,
              border: `3px solid ${tokens.color.canvasElevated}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(14,159,104,0.35)',
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Box>
        </Box>

        <Stack spacing={0.75}>
          <Typography variant="h6" sx={{ color: tokens.color.ink, fontWeight: 700 }}>
            Workspace Ready
          </Typography>
          <Typography variant="body2" sx={{ color: tokens.color.inkMuted, fontWeight: 600 }}>
            Everything has been configured successfully.
          </Typography>
          <Typography variant="body2" sx={{ color: tokens.color.inkMuted, lineHeight: 1.7 }}>
            Start adding products, organizing inventory, tracking sales, managing staff and
            growing your business with confidence.
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ActivationCard;