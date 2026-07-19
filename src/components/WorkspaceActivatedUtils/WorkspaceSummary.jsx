// // import { Box, Paper, Stack, Typography, Divider } from '@mui/material';
// // import { motion } from 'framer-motion';
// // import { tokens } from './theme.js';

// // const summaryItems = [
// //   { label: 'Workspace Status', value: 'Active', tone: 'positive' },
// //   { label: 'Email', value: 'Verified', tone: 'positive' },
// //   { label: 'Security', value: 'Enabled', tone: 'positive' },
// //   { label: 'Plan', value: 'Enterprise', tone: 'neutral' },
// //   { label: 'Inventory Engine', value: 'Ready', tone: 'positive' },
// // ];

// // const StatusPill = ({ value, tone }) => (
// //   <Box
// //     sx={{
// //       px: 1.25,
// //       py: 0.4,
// //       borderRadius: '999px',
// //       fontFamily: '"JetBrains Mono", monospace',
// //       fontSize: '0.72rem',
// //       fontWeight: 600,
// //       letterSpacing: '0.03em',
// //       color: tone === 'positive' ? tokens.color.emerald700 : tokens.color.ink,
// //       backgroundColor: tone === 'positive' ? tokens.color.emerald50 : 'rgba(14,22,19,0.06)',
// //     }}
// //   >
// //     {value}
// //   </Box>
// // );

// // /**
// //  * A compact "system status" style card — every row reads like a real
// //  * health-check output (label left, monospace status pill right),
// //  * reinforcing that the workspace has been verified, not just welcomed.
// //  */
// // const WorkspaceSummary = () => {
// //   return (
// //     <Paper
// //       component={motion.div}
// //       initial={{ opacity: 0, y: 18 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true, amount: 0.4 }}
// //       transition={{ duration: 0.55, delay: 0.15 }}
// //       elevation={0}
// //       sx={{
// //         position: 'relative',
// //         zIndex: 1,
// //         p: { xs: 3, sm: 3.5 },
// //         borderRadius: 5,
// //         border: `1px solid ${tokens.color.border}`,
// //         background: tokens.color.canvasElevated,
// //         boxShadow: '0 12px 30px rgba(14, 22, 19, 0.05)',
// //       }}
// //     >
// //       <Typography
// //         variant="overline"
// //         sx={{ color: tokens.color.inkFaint, display: 'block', mb: 2 }}
// //       >
// //         Workspace Summary
// //       </Typography>

// //       <Stack spacing={1.5} divider={<Divider sx={{ borderColor: tokens.color.border }} />}>
// //         {summaryItems.map((item) => (
// //           <Stack key={item.label} direction="row" justifyContent="space-between" alignItems="center">
// //             <Typography variant="body2" sx={{ color: tokens.color.inkMuted, fontWeight: 500 }}>
// //               {item.label}
// //             </Typography>
// //             <StatusPill value={item.value} tone={item.tone} />
// //           </Stack>
// //         ))}
// //       </Stack>
// //     </Paper>
// //   );
// // };

// // export default WorkspaceSummary;

// import { Box, Paper, Stack, Typography, Divider } from "@mui/material";
// import { motion } from "framer-motion";
// import { tokens } from "./theme.js";

// const summaryItems = [
//   {
//     label: "Workspace Status",
//     value: "Active",
//     tone: "positive",
//   },
//   {
//     label: "Email",
//     value: "Verified",
//     tone: "positive",
//   },
//   {
//     label: "Security",
//     value: "Enabled",
//     tone: "positive",
//   },
//   {
//     label: "Plan",
//     value: "Enterprise",
//     tone: "neutral",
//   },
//   {
//     label: "Inventory Engine",
//     value: "Ready",
//     tone: "positive",
//   },
// ];

// const StatusPill = ({ value, tone }) => (
//   <Box
//     sx={{
//       px: { xs: 1.2, sm: 1.5 },
//       py: 0.5,

//       borderRadius: "999px",

//       width: "fit-content",

//       fontFamily: '"JetBrains Mono", monospace',

//       fontSize: {
//         xs: "0.68rem",
//         sm: "0.72rem",
//       },

//       fontWeight: 700,

//       letterSpacing: ".04em",

//       color:
//         tone === "positive"
//           ? tokens.color.emerald700
//           : tokens.color.ink,

//       bgcolor:
//         tone === "positive"
//           ? tokens.color.emerald50
//           : "rgba(14,22,19,.06)",

//       border: `1px solid ${
//         tone === "positive"
//           ? "rgba(16,185,129,.18)"
//           : tokens.color.border
//       }`,
//     }}
//   >
//     {value}
//   </Box>
// );

// export default function WorkspaceSummary() {
//   return (
//     <Paper
//       component={motion.div}
//       initial={{ opacity: 0, y: 18 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.4 }}
//       transition={{
//         duration: 0.55,
//         delay: 0.15,
//       }}
//       elevation={0}
//       sx={{
//         position: "relative",
//         zIndex: 1,

//         p: {
//           xs: 2.5,
//           sm: 3,
//           md: 3.5,
//         },

//         borderRadius: {
//           xs: 3,
//           sm: 4,
//           md: 5,
//         },

//         border: `1px solid ${tokens.color.border}`,

//         bgcolor: tokens.color.canvasElevated,

//         boxShadow:
//           "0 12px 30px rgba(14,22,19,.05)",
//       }}
//     >
//       <Typography
//         variant="overline"
//         sx={{
//           display: "block",

//           mb: {
//             xs: 2,
//             sm: 2.5,
//           },

//           color: tokens.color.inkFaint,

//           letterSpacing: "0.12em",

//           fontWeight: 700,
//         }}
//       >
//         Workspace Summary
//       </Typography>

//       <Stack
//         spacing={2}
//         divider={
//           <Divider
//             sx={{
//               borderColor: tokens.color.border,
//             }}
//           />
//         }
//       >
//         {summaryItems.map((item) => (
//           <Stack
//             key={item.label}
//             direction={{
//               xs: "column",
//               sm: "row",
//             }}
//             spacing={{
//               xs: 1,
//               sm: 0,
//             }}
//             justifyContent="space-between"
//             alignItems={{
//               xs: "flex-start",
//               sm: "center",
//             }}
//           >
//             <Typography
//               sx={{
//                 color: tokens.color.inkMuted,

//                 fontWeight: 600,

//                 fontSize: {
//                   xs: "0.9rem",
//                   sm: "0.95rem",
//                 },
//               }}
//             >
//               {item.label}
//             </Typography>

//             <StatusPill
//               value={item.value}
//               tone={item.tone}
//             />
//           </Stack>
//         ))}
//       </Stack>
//     </Paper>
//   );
// }

import {
  Box,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { tokens } from "./theme";

const summaryItems = [
  {
    label: "Workspace Status",
    value: "Active",
    tone: "success",
  },
  {
    label: "Email",
    value: "Verified",
    tone: "success",
  },
  {
    label: "Security",
    value: "Enabled",
    tone: "success",
  },
  {
    label: "Plan",
    value: "Enterprise",
    tone: "info",
  },
  {
    label: "Inventory Engine",
    value: "Ready",
    tone: "success",
  },
];

function StatusPill({ value, tone }) {
  const success = tone === "success";

  return (
    <Box
      sx={{
        px: 1.6,
        py: 0.7,
        borderRadius: "999px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        minWidth: 95,

        fontSize: {
          xs: ".72rem",
          sm: ".78rem",
        },

        fontWeight: 700,

        letterSpacing: ".05em",

        color: success
          ? "#10B981"
          : "#0F172A",

        bgcolor: success
          ? "rgba(16,185,129,.10)"
          : "rgba(6,182,212,.10)",

        border: success
          ? "1px solid rgba(16,185,129,.18)"
          : "1px solid rgba(6,182,212,.18)",

        whiteSpace: "nowrap",
      }}
    >
      {value}
    </Box>
  );
}

export default function WorkspaceSummary() {
  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.25,
      }}
      elevation={0}
      sx={{
        width: "100%",
        overflow: "hidden",

        borderRadius: {
          xs: 4,
          md: 5,
        },

        border:
          "1px solid rgba(16,185,129,.10)",

        background:
          "linear-gradient(180deg,#FFFFFF 0%,#F8FAFC 100%)",

        backdropFilter: "blur(16px)",

        boxShadow:
          "0 24px 60px rgba(15,23,42,.08)",

        transition: ".35s",

        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow:
            "0 32px 70px rgba(15,23,42,.12)",
        },
      }}
    >
      {/* Header */}

      <Box
        sx={{
          px: {
            xs: 2.5,
            sm: 3.5,
            md: 4,
          },

          pt: {
            xs: 2.5,
            md: 3.5,
          },

          pb: 2,
        }}
      >
        <Typography
          sx={{
            color: "#10B981",

            fontWeight: 700,

            letterSpacing: ".15em",

            textTransform: "uppercase",

            fontSize: ".75rem",
          }}
        >
          Workspace Summary
        </Typography>

        <Typography
          sx={{
            mt: 1,

            fontWeight: 800,

            color: "#0F172A",

            fontSize: {
              xs: "1.2rem",
              md: "1.45rem",
            },
          }}
        >
          Activation Completed
        </Typography>

        <Typography
          sx={{
            mt: 1,

            color: "#64748B",

            lineHeight: 1.8,

            maxWidth: 550,

            fontSize: {
              xs: ".92rem",
              md: "1rem",
            },
          }}
        >
          Your workspace has been fully
          configured and secured. Everything
          required to start managing your
          inventory is ready.
        </Typography>
      </Box>

      <Divider />

      {/* Summary */}

      <Stack
        divider={<Divider />}
        sx={{
          px: {
            xs: 2.5,
            sm: 3.5,
            md: 4,
          },

          py: 2,
        }}
      >
        {summaryItems.map((item) => (
          <Stack
            key={item.label}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              py: {
                xs: 1.4,
                md: 1.8,
              },

              gap: 2,

              flexWrap: {
                xs: "wrap",
                sm: "nowrap",
              },
            }}
          >
            <Typography
              sx={{
                color: "#475569",

                fontWeight: 600,

                fontSize: {
                  xs: ".92rem",
                  md: "1rem",
                },
              }}
            >
              {item.label}
            </Typography>

            <StatusPill
              value={item.value}
              tone={item.tone}
            />
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
}