import { Box, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { tokens } from '../components/WorkspaceActivatedUtils/theme.js';

import WorkspaceHeader from '../components/WorkspaceActivatedUtils/WorkspaceHeader.jsx';
import SuccessHero from '../components/WorkspaceActivatedUtils/SuccessHero.jsx';
import ActivationCard from '../components/WorkspaceActivatedUtils/ActivationCard.jsx';
import FeaturesGrid from '../components/WorkspaceActivatedUtils/FeaturesGrid.jsx';
import WorkspaceSummary from '../components/WorkspaceActivatedUtils/WorkspaceSummary.jsx';
import ActionButtons from '../components/WorkspaceActivatedUtils/ActionButtons.jsx';
import Footer from '../components/WorkspaceActivatedUtils/Footer.jsx';
import FloatingDecorations from '../components/WorkspaceActivatedUtils/FloatingDecorations.jsx';

import heroBackground from "../assets/workspaceHeroBg.png";

/**
 * Post-verification landing page shown the moment a user activates
 * their Inventrino workspace. Pure composition — every visual and
 * behavioural decision lives inside the child components above.
 */

export default function WorkspaceActivated() {
  const navigate = useNavigate();

  const handleLaunch = () => navigate('/dashboard');
  const handleBackHome = () => navigate('/');

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: tokens.color.canvas,
        display: 'flex',
        justifyContent: 'center',
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 4, md: 6 },
        overflow: 'hidden',
      }}
    >
      <FloatingDecorations />

      <Box sx={{ width: '100%', maxWidth: 1400, position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <WorkspaceHeader />
        </Box>
        {/* <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 6,
            mb: 5,
            minHeight: {
              xs: 240,
              md: 320,
            },
            display: "flex",
            alignItems: "flex-start",
            px: {
              xs: 3,
              md: 5,
            },
            py: {
              xs: 3,
              md: 5,
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${heroBackground})`,
              backgroundSize: "cover",
              backgroundPosition: "top right",
              backgroundRepeat: "no-repeat",
              opacity: 0.9,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,

              background:
                `
                linear-gradient(
                90deg,
                rgba(15,23,42,.92) 0%,
                rgba(15,23,42,.78) 35%,
                rgba(15,23,42,.45) 60%,
                rgba(15,23,42,.10) 100%
              )
              `,
            }}
          />

        </Box> */}

        <Paper
          component={motion.div}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          elevation={0}
          sx={{
            mt: { xs: 4, md: 5 },
            p: { xs: 3, sm: 5, md: 7 },
            borderRadius: 6,
            border: `1px solid ${tokens.color.border}`,
            background: tokens.color.glass,
            backdropFilter: 'blur(20px)',
            boxShadow: '0 30px 80px rgba(14, 22, 19, 0.08)',
          }}
        >
          <Stack spacing={{ xs: 5, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                borderRadius: 6,
                mb: 5,
                minHeight: {
                  xs: 240,
                  md: 320,
                },
                display: "flex",
                alignItems: "flex-start",
                px: {
                  xs: 3,
                  md: 5,
                },
                py: {
                  xs: 3,
                  md: 5,
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${heroBackground})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top right",
                  backgroundRepeat: "no-repeat",
                  opacity: 0.9,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,

                  background:
                    `
                      linear-gradient(
                      90deg,
                      rgba(15,23,42,.92) 0%,
                      rgba(15,23,42,.78) 35%,
                      rgba(15,23,42,.45) 60%,
                      rgba(15,23,42,.10) 100%
                    )
                    `,
                }}
              />
              <SuccessHero />
              <ActivationCard />
            </Box>

            <FeaturesGrid />
            <WorkspaceSummary />
            <ActionButtons onLaunch={handleLaunch} onBackHome={handleBackHome} />
          </Stack>
        </Paper>

        <Box sx={{ mt: { xs: 4, md: 5 }, mb: 1 }}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};