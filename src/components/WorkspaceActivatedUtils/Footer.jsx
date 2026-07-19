import { Stack, Typography, Box } from '@mui/material';
import { tokens } from './theme.js';

const Footer = () => {
  return (
    <Stack alignItems="center" spacing={0.5} sx={{ position: 'relative', zIndex: 1 }}>
      <Stack direction="row" spacing={0.75} alignItems="center">
        <Box sx={{ color: tokens.color.emerald600, display: 'flex' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3l7 3v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
        <Typography variant="caption" sx={{ color: tokens.color.emerald700, fontWeight: 700 }}>
          Secure. Reliable. Built for Growth.
        </Typography>
      </Stack>
      <Typography variant="caption" sx={{ color: tokens.color.inkFaint }}>
        Thank you for choosing Inventrino.
      </Typography>
    </Stack>
  );
};

export default Footer;