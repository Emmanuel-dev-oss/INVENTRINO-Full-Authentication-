// import { Box, Stack, Typography } from '@mui/material';
// import { motion } from 'framer-motion';
// import { tokens } from './theme';

// /**
//  * Minimal wordmark header. No navigation — this page is a single,
//  * focused moment, not a place to browse away from.
//  */
// const WorkspaceHeader = () => {
//   return (
//     <Box
//       component={motion.div}
//       initial={{ opacity: 0, y: -12 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       sx={{ position: 'relative', zIndex: 1 }}
//     >
//       <Stack direction="row" alignItems="center" spacing={1.25}>
//         <Box
//           sx={{
//             width: 34,
//             height: 34,
//             borderRadius: '9px',
//             background: tokens.gradient.success,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             boxShadow: '0 6px 16px rgba(14, 159, 104, 0.28)',
//           }}
//         >
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//             <path
//               d="M12 2L3 6.5V17.5L12 22L21 17.5V6.5L12 2Z"
//               stroke="white"
//               strokeWidth="1.6"
//               strokeLinejoin="round"
//             />
//             <path d="M3 6.5L12 11L21 6.5" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
//             <path d="M12 11V22" stroke="white" strokeWidth="1.6" />
//           </svg>
//         </Box>
//         <Typography
//           variant="h6"
//           sx={{
//             fontFamily: '"Plus Jakarta Sans", sans-serif',
//             fontWeight: 800,
//             letterSpacing: '-0.01em',
//             color: tokens.color.ink,
//           }}
//         >
//           Inventrino
//         </Typography>
//       </Stack>
//     </Box>
//   );
// };

// export default WorkspaceHeader;

import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { tokens } from "./theme";

const WorkspaceHeader = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        px: { xs: 2, sm: 3, md: 0 },
      }}
    >
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 1.25 }}
        alignItems="center"
        justifyContent={{
          xs: "center",
          sm: "flex-start",
        }}
      >
        <Box
          sx={{
            width: {
              xs: 30,
              sm: 34,
              md: 38,
            },

            height: {
              xs: 30,
              sm: 34,
              md: 38,
            },

            borderRadius: {
              xs: "8px",
              sm: "9px",
              md: "10px",
            },

            background: tokens.gradient.success,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            flexShrink: 0,

            boxShadow:
              "0 6px 16px rgba(14,159,104,.28)",
          }}
        >
          <svg
            width="55%"
            height="55%"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2L3 6.5V17.5L12 22L21 17.5V6.5L12 2Z"
              stroke="white"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />

            <path
              d="M3 6.5L12 11L21 6.5"
              stroke="white"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />

            <path
              d="M12 11V22"
              stroke="white"
              strokeWidth="1.6"
            />
          </svg>
        </Box>

        <Typography
          variant="h6"
          noWrap
          sx={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontWeight: 800,
            letterSpacing: "-0.02em",

            fontSize: {
              xs: "1.15rem",
              sm: "1.3rem",
              md: "1.45rem",
            },

            color: tokens.color.ink,
          }}
        >
          Inventrino
        </Typography>
      </Stack>
    </Box>
  );
};

export default WorkspaceHeader;