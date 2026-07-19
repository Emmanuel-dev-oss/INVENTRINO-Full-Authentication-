import {
  ClipboardList,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import missionImg from "../assets/OurMission.png"

const pillars = [
  {
    icon: ClipboardList,
    title: "Simplify Operations",
    description:
      "Replace spreadsheets, notebooks, and manual calculations with one centralized inventory system.",
  },

  {
    icon: TrendingUp,
    title: "Drive Growth",
    description:
      "Understand sales performance, stock movement, and profitability through actionable insights.",
  },

  {
    icon: ShieldCheck,
    title: "Maintain Control",
    description:
      "Protect your inventory with role-based access, audit trails, and secure account management.",
  },
];

export default function AboutSection() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 12, md: 10 },
        bgcolor: "linear-gradient(to bottom right, #020617, #0F172A, #064E3B)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          top: 100,
          right: -150,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(6,182,212,.08)",
          filter: "blur(120px)",
        }}
      />

      <Container maxWidth="xl">
        <Grid
          container
          spacing={8}
          alignItems="center"
        >
          {/* LEFT SIDE */}
          <Grid
            size={{
              xs: 12,
              lg: 6,
            }}
          >
            <Stack spacing={4}>
              <Typography
                sx={{
                  color: "#34d399",
                  fontWeight: 700,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                }}
              >
                About Us
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  color: "#fff",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  fontSize: {
                    xs: "2.5rem",
                    md: "4rem",
                  },
                }}
              >
                Built For Businesses
                That Need More Than
                Spreadsheets
              </Typography>

              <Typography
                sx={{
                  color: "#94A3B8",
                  fontSize: "1.1rem",
                  lineHeight: 1.9,
                }}
              >
                Many businesses still rely on
                spreadsheets, notebooks, and
                disconnected tools to manage
                inventory.

                As inventory grows, mistakes
                become costly, stock becomes
                harder to track, and valuable
                business insights remain hidden.
              </Typography>

              <Typography
                sx={{
                  color: "#CBD5E1",
                  lineHeight: 1.9,
                }}
              >
                Inventrino was created to give
                businesses a smarter way to
                manage products, monitor stock,
                track sales, oversee staff
                activity, and make informed
                decisions from a single platform.
              </Typography>

              <Button
                variant="contained"
                endIcon={<ArrowRight />}
                sx={{
                  width: "fit-content",
                  bgcolor: "#10B981",
                  px: 4,
                  py: 1.6,
                  borderRadius: 3,
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": {
                    bgcolor: "#059669",
                  },
                }}
              >
                Explore Features
              </Button>
            </Stack>
          </Grid>

          {/* RIGHT SIDE */}

          <Grid
            size={{
              xs: 12,
              lg: 6,
            }}
          >
            <Stack spacing={3}>
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <Paper
                    key={pillar.title}
                    elevation={0}
                    sx={{
                      p: 4,
                      borderRadius: 5,
                      // bgcolor: "#1E293B",
                      bgcolor: "#0f172a",
                      border:"1px solid rgba(255,255,255,.05)",
                      transition: ".3s ease",
                      "&:hover": {
                        transform:"translateX(8px)",
                        borderColor:"#10B981",
                      },
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={3}
                    >
                      <Box
                        sx={{
                          minWidth: 60,
                          width: 60,
                          height: 60,
                          borderRadius: 3,
                          bgcolor:"rgba(16,185,129,.1)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent:"center",
                        }}
                      >
                        <Icon
                          size={29}
                          // color="#10B981"
                          color="#ffffff"
                        />
                      </Box>

                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            color: "#10B981",
                            fontWeight: 700,
                            mb: 1,
                          }}
                        >
                          {pillar.title}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#fff",
                            lineHeight: 1.8,
                          }}
                        >
                          {pillar.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                );
              })}
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Story Card */}

        <Paper
          elevation={0}
          sx={{
            mt: 12,
            p: { xs: 4, md: 6 },
            borderRadius: 6,
            background: "#020617",
            border: "1px solid rgba(255,255,255,.05)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background Image */}
          <Box
            component="img"
            src={missionImg}
            alt="Mission"
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "55%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.85,
              zIndex: 0,
            }}
          />

          {/* Dark Fade Overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, #020617 0%, #020617 45%, rgba(2,6,23,.85) 65%, rgba(2,6,23,.2) 100%)",
              zIndex: 1,
            }}
          />

          {/* Content */}
          <Stack
            spacing={3}
            sx={{
              position: "relative",
              zIndex: 2,
              maxWidth: "60%",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontWeight: 800,
              }}
            >
              Our Mission
            </Typography>

            <Typography
              sx={{
                color: "#CBD5E1",
                lineHeight: 2,
                fontSize: "1.05rem",
                fontWeight: "700"
              }}
            >
             To empower businesses with a modern, intelligent inventory management platform that delivers complete visibility, operational control, and data-driven confidence across every aspect of inventory and sales operations.
             Inventrino enables organizations to accurately track stock movements, streamline sales processes, monitor business performance in real time, and eliminate costly inefficiencies. By transforming complex inventory workflows into simple, actionable insights, we help businesses reduce losses, optimize resources, improve productivity, and make smarter decisions that drive sustainable growth and long-term success.
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}