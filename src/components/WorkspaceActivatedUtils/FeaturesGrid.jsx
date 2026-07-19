// import Grid from '@mui/material/Grid';
// import { tokens } from './theme';
// import FeatureCard from './FeatureCard';

// const iconProps = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none' };

// const features = [
//   {
//     title: 'Centralize Inventory',
//     description: 'Manage every SKU, warehouse and supplier from a single source of truth.',
//     icon: (
//       <svg {...iconProps}>
//         <path d="M3 7l9-4 9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
//         <path d="M3 7v10l9 4 9-4V7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
//         <path d="M12 11v10" stroke="currentColor" strokeWidth="1.6" />
//       </svg>
//     ),
//   },
//   {
//     title: 'Real-Time Insights',
//     description: 'Track stock levels, sales velocity and demand with live analytics.',
//     icon: (
//       <svg {...iconProps}>
//         <path d="M4 20V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
//         <path d="M11 20V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
//         <path d="M18 20v-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
//       </svg>
//     ),
//   },
//   {
//     title: 'Team Collaboration',
//     description: 'Assign roles, share visibility and keep every teammate in sync.',
//     icon: (
//       <svg {...iconProps}>
//         <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
//         <path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//         <circle cx="17" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.6" />
//         <path d="M15.2 14.3c2.4.3 4.1 2.1 4.1 4.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
//       </svg>
//     ),
//   },
//   {
//     title: 'Enterprise Security',
//     description: 'SOC 2-aligned controls, encryption at rest and granular permissions.',
//     icon: (
//       <svg {...iconProps}>
//         <path
//           d="M12 3l7 3v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z"
//           stroke="currentColor"
//           strokeWidth="1.6"
//           strokeLinejoin="round"
//         />
//         <path d="M9.2 12l1.9 1.9 3.7-3.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//   },
// ];

// /**
//  * Responsive grid of feature tiles. Data-driven so the markup stays
//  * flat and every card is generated from FeatureCard rather than
//  * hand-duplicated JSX.
//  */
// const FeaturesGrid = () => {
//   return (
//     <Grid container spacing={2.5} sx={{ position: 'relative', zIndex: 1 }}>
//       {features.map((feature, index) => (
//         <Grid key={feature.title} size={{ xs: 12, sm: 6, md: 3 }}>
//           <FeatureCard {...feature} delay={0.08 * index} />
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default FeaturesGrid;

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FeatureCard from "./FeatureCard";

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
};

const features = [
  {
    title: "Centralize Inventory",
    description:
      "Manage every SKU, warehouse and supplier from a single source of truth.",
    icon: (
      <svg {...iconProps}>
        <path
          d="M3 7l9-4 9 4-9 4-9-4z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M3 7v10l9 4 9-4V7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M12 11v10"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    title: "Real-Time Insights",
    description:
      "Track stock levels, sales velocity and demand with live analytics.",
    icon: (
      <svg {...iconProps}>
        <path
          d="M4 20V10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M11 20V4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M18 20v-7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Team Collaboration",
    description:
      "Assign roles, share visibility and keep every teammate in sync.",
    icon: (
      <svg {...iconProps}>
        <circle
          cx="9"
          cy="8"
          r="3.2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle
          cx="17"
          cy="9"
          r="2.4"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M15.2 14.3c2.4.3 4.1 2.1 4.1 4.7"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Enterprise Security",
    description:
      "SOC 2-aligned controls, encryption at rest and granular permissions.",
    icon: (
      <svg {...iconProps}>
        <path
          d="M12 3l7 3v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9.2 12l1.9 1.9 3.7-3.9"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function FeaturesGrid() {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Grid
        container
        spacing={{
          xs: 2,
          sm: 3,
          md: 4,
        }}
        justifyContent="center"
        alignItems="stretch"
      >
        {features.map((feature, index) => (
          <Grid
            key={feature.title}
            size={{
              xs: 12,
              sm: 6,
              lg: 3,
            }}
            sx={{
              display: "flex",
            }}
          >
            <FeatureCard
              {...feature}
              delay={index * 0.08}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}