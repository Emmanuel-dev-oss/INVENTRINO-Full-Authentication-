import { Box, Paper, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { tokens } from './theme';

/**
 * A single feature tile used by FeaturesGrid. Kept generic and
 * data-driven so the grid can map over an array without repetition.
 */
const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, delay }}
      elevation={0}
      sx={{
        height: '100%',
        p: 3,
        borderRadius: 4,
        textAlign: 'center',
        border: `1px solid ${tokens.color.border}`,
        background: tokens.color.canvasElevated,
        boxShadow: '0 10px 24px rgba(14, 22, 19, 0.05)',
        transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
        '&:hover': {
          boxShadow: '0 22px 40px rgba(14, 159, 104, 0.14)',
          borderColor: tokens.color.emerald100,
        },
      }}
    >
      <Stack spacing={1.5} alignItems="center">
        <Box
          sx={{
            width: 52,
            height: 52,
            borderRadius: '16px',
            background: tokens.color.emerald50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: tokens.color.emerald600,
          }}
        >
          {icon}
        </Box>
        <Typography variant="subtitle1" sx={{ color: tokens.color.ink, fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: tokens.color.inkMuted, lineHeight: 1.6 }}>
          {description}
        </Typography>
      </Stack>
    </Paper>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

export default FeatureCard;