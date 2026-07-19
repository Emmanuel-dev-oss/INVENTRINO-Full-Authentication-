import { createTheme } from '@mui/material/styles';

/**
 * Inventrino Design Tokens
 * ------------------------
 * Palette   : Deep ink text on a soft mint-white canvas, with an emerald
 *             gradient as the single "success" accent and a warm amber
 *             used sparingly for the sparkle/decoration layer.
 * Type      : "Plus Jakarta Sans" for display (a rounder, more confident
 *             geometric face than the default Inter-everywhere look),
 *             "Inter" for body copy, and "JetBrains Mono" for small
 *             utility/status labels (plan badges, system status rows).
 */

export const tokens = {
  color: {
    canvas: '#F6FAF8',
    canvasElevated: '#FFFFFF',
    ink: '#0E1613',
    inkMuted: '#5B6B66',
    inkFaint: '#8FA39D',
    border: 'rgba(14, 22, 19, 0.08)',
    emerald50: '#ECFBF4',
    emerald100: '#D3F4E4',
    emerald400: '#22B478',
    emerald500: '#0E9F68',
    emerald600: '#08825A',
    emerald700: '#066B4A',
    amber: '#F2A93B',
    glass: 'rgba(255, 255, 255, 0.72)',
  },
  gradient: {
    success: 'linear-gradient(135deg, #0E9F68 0%, #22B478 55%, #4ED9A0 100%)',
    successText: 'linear-gradient(120deg, #066B4A 0%, #0E9F68 45%, #22B478 100%)',
    canvasGlow:
      'radial-gradient(60% 50% at 50% 0%, rgba(14,159,104,0.10) 0%, rgba(14,159,104,0) 70%)',
  },
};

export const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: tokens.color.canvas,
      paper: tokens.color.canvasElevated,
    },
    primary: {
      main: tokens.color.emerald500,
      dark: tokens.color.emerald700,
      light: tokens.color.emerald400,
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: tokens.color.amber,
    },
    text: {
      primary: tokens.color.ink,
      secondary: tokens.color.inkMuted,
    },
    divider: tokens.color.border,
  },
  shape: {
    borderRadius: 20,
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 500,
      color: tokens.color.inkMuted,
    },
    button: {
      fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
      fontWeight: 700,
      textTransform: 'none',
      letterSpacing: 0,
    },
    overline: {
      fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
      letterSpacing: '0.08em',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          paddingTop: 12,
          paddingBottom: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;