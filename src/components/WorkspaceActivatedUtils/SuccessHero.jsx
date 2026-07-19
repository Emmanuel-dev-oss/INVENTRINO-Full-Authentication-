// import { Box, Typography, Stack } from '@mui/material';
// import { motion } from 'framer-motion';
// import { tokens } from './theme';

// /**
//  * Signature moment of the page. Rather than a flat green circle, this
//  * builds a small "activation" system: two translucent rings breathing
//  * outward, a soft core glow, an orbiting ring of sparkles at staggered
//  * distances, and a hand-drawn checkmark that draws itself in on load.
//  */

// const sparkles = [
//   { top: '6%', left: '18%', size: 10, delay: 0.2 },
//   { top: '14%', left: '82%', size: 7, delay: 0.5 },
//   { top: '78%', left: '86%', size: 9, delay: 0.8 },
//   { top: '86%', left: '14%', size: 6, delay: 0.35 },
//   { top: '48%', left: '4%', size: 8, delay: 0.65 },
//   { top: '40%', left: '96%', size: 6, delay: 1.0 },
// ];

// const Sparkle = ({ top, left, size, delay }) => (
//   <Box
//     component={motion.svg}
//     viewBox="0 0 24 24"
//     fill={tokens.color.amber}
//     initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
//     animate={{ opacity: [0, 1, 0.7, 1], scale: [0.4, 1, 0.85, 1], rotate: 0 }}
//     transition={{ duration: 2.6, delay, repeat: Infinity, repeatDelay: 2.2 }}
//     sx={{ position: 'absolute', top, left, width: size, height: size }}
//   >
//     <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
//   </Box>
// );

// const SuccessHero = () => {
//   return (
//     <Stack alignItems="center" spacing={4} sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
//       {/* Illustration */}
//       <Box sx={{ position: 'relative', width: 220, height: 220 }}>
//         {sparkles.map((s, i) => (
//           <Sparkle key={i} {...s} />
//         ))}

//         {/* Breathing outer rings */}
//         {[0, 1].map((i) => (
//           <Box
//             key={i}
//             component={motion.div}
//             animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.15, 0.5] }}
//             transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
//             sx={{
//               position: 'absolute',
//               inset: 20 - i * 20,
//               borderRadius: '50%',
//               border: `1.5px solid ${tokens.color.emerald400}`,
//               opacity: 0.35,
//             }}
//           />
//         ))}

//         {/* Soft core glow */}
//         <Box
//           sx={{
//             position: 'absolute',
//             inset: 28,
//             borderRadius: '50%',
//             background: `radial-gradient(circle at 50% 40%, ${tokens.color.emerald100} 0%, rgba(211,244,228,0) 72%)`,
//           }}
//         />

//         {/* Core disc */}
//         <Box
//           component={motion.div}
//           initial={{ scale: 0.7, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.6, ease: 'easeOut' }}
//           sx={{
//             position: 'absolute',
//             inset: 54,
//             borderRadius: '50%',
//             background: tokens.gradient.success,
//             boxShadow: '0 18px 40px rgba(14, 159, 104, 0.35)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <Box
//             component={motion.svg}
//             viewBox="0 0 52 52"
//             sx={{ width: 56, height: 56 }}
//           >
//             <motion.path
//               d="M14 27L22.5 35.5L39 16"
//               fill="none"
//               stroke="white"
//               strokeWidth="4.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               initial={{ pathLength: 0 }}
//               animate={{ pathLength: 1 }}
//               transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
//             />
//           </Box>
//         </Box>
//       </Box>

//       {/* Headline */}
//       <Stack spacing={1.5} sx={{ maxWidth: 640 }}>
//         <Typography
//           variant="h3"
//           component="h1"
//           sx={{ color: tokens.color.ink, fontSize: { xs: '1.9rem', sm: '2.4rem', md: '2.75rem' } }}
//         >
//           Your Workspace is
//           <Box
//             component="span"
//             sx={{
//               display: 'block',
//               backgroundImage: tokens.gradient.successText,
//               backgroundClip: 'text',
//               WebkitBackgroundClip: 'text',
//               color: 'transparent',
//             }}
//           >
//             Successfully Activated!
//           </Box>
//         </Typography>

//         <Typography
//           variant="subtitle1"
//           sx={{
//             fontSize: { xs: '0.95rem', sm: '1.05rem' },
//             maxWidth: 560,
//             mx: 'auto',
//             lineHeight: 1.65,
//           }}
//         >
//           You&rsquo;ve successfully unlocked your enterprise inventory workspace. Everything is
//           ready for you to start managing products, stock, sales and your team.
//         </Typography>
//       </Stack>
//     </Stack>
//   );
// };

// export default SuccessHero;

import { Box, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { tokens } from "./theme";

const sparkles = [
  { top: "8%", left: "18%", size: 10, delay: 0.2 },
  { top: "15%", left: "82%", size: 8, delay: 0.5 },
  { top: "78%", left: "86%", size: 9, delay: 0.8 },
  { top: "85%", left: "15%", size: 7, delay: 0.35 },
  { top: "50%", left: "5%", size: 8, delay: 0.65 },
  { top: "45%", left: "95%", size: 7, delay: 1 },
];

const Sparkle = ({ top, left, size, delay }) => (
  <Box
    component={motion.svg}
    viewBox="0 0 24 24"
    fill={tokens.color.amber}
    initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
    animate={{
      opacity: [0, 1, 0.7, 1],
      scale: [0.4, 1, 0.85, 1],
      rotate: 0,
    }}
    transition={{
      duration: 2.8,
      delay,
      repeat: Infinity,
      repeatDelay: 2,
    }}
    sx={{
      position: "absolute",
      top,
      left,

      width: {
        xs: size - 2,
        sm: size,
      },

      height: {
        xs: size - 2,
        sm: size,
      },
    }}
  >
    <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
  </Box>
);

export default function SuccessHero() {
  return (
    <Stack
      spacing={{
        xs: 3,
        md: 4,
      }}
      alignItems="center"
      textAlign="center"
      sx={{
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Illustration */}

      <Box
        sx={{
          position: "relative",

          width: {
            xs: 170,
            sm: 200,
            md: 220,
          },

          height: {
            xs: 170,
            sm: 200,
            md: 220,
          },
        }}
      >
        {sparkles.map((sparkle, index) => (
          <Sparkle
            key={index}
            {...sparkle}
          />
        ))}

        {/* Animated Rings */}

        {[0, 1].map((ring) => (
          <Box
            key={ring}
            component={motion.div}
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.45, 0.15, 0.45],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: ring * 0.5,
            }}
            sx={{
              position: "absolute",

              inset: {
                xs: ring === 0 ? 18 : 0,
                md: ring === 0 ? 20 : 0,
              },

              borderRadius: "50%",

              border: `1.5px solid ${tokens.color.emerald400}`,
            }}
          />
        ))}

        {/* Glow */}

        <Box
          sx={{
            position: "absolute",

            inset: {
              xs: 22,
              sm: 25,
              md: 28,
            },

            borderRadius: "50%",

            background: `radial-gradient(circle at 50% 40%, ${tokens.color.emerald100} 0%, rgba(211,244,228,0) 72%)`,
          }}
        />

        {/* Core */}

        <Box
          component={motion.div}
          initial={{
            scale: 0.7,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: .6,
          }}
          sx={{
            position: "absolute",

            inset: {
              xs: 40,
              sm: 48,
              md: 54,
            },

            borderRadius: "50%",

            background:
              tokens.gradient.success,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            boxShadow:
              "0 20px 45px rgba(16,185,129,.35)",
          }}
        >
          <Box
            component={motion.svg}
            viewBox="0 0 52 52"
            sx={{
              width: {
                xs: 42,
                sm: 50,
                md: 56,
              },

              height: {
                xs: 42,
                sm: 50,
                md: 56,
              },
            }}
          >
            <motion.path
              d="M14 27L22.5 35.5L39 16"
              fill="none"
              stroke="white"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: .8,
                delay: .3,
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Content */}

      <Stack
        spacing={2}
        sx={{
          maxWidth: 650,
          px: {
            xs: 2,
            sm: 0,
          },
        }}
      >
        <Typography
          component="h1"
          sx={{
            color: tokens.color.ink,

            fontWeight: 800,

            lineHeight: 1.15,

            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
            },
          }}
        >
          Your Workspace Is

          <Box
            component="span"
            sx={{
              display: "block",

              mt: .5,

              backgroundImage:
                tokens.gradient.successText,

              backgroundClip: "text",
              WebkitBackgroundClip: "text",

              color: "transparent",
            }}
          >
            Successfully Activated!
          </Box>
        </Typography>

        <Typography
          sx={{
            color: tokens.color.inkMuted,

            lineHeight: 1.8,

            fontSize: {
              xs: ".95rem",
              sm: "1.05rem",
            },
            maxWidth: 560,
            mx: "auto",
          }}
        >
          Your enterprise inventory workspace is now fully operational.
          Start managing products, monitoring stock, recording sales,
          and collaborating with your team—all from one secure,
          intelligent platform.
        </Typography>
      </Stack>
    </Stack>
  );
}