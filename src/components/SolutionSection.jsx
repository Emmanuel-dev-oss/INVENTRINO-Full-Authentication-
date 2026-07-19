import {
  Eye,
  ShoppingCart,
  Users,
  BarChart3,
  ArrowRight,
} from "lucide-react";

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const solutions = [
  {
    icon: Eye,
    title: "Complete Inventory Visibility",
    description:
      "Track stock levels, product movement, and inventory status in real time across every category from a single dashboard.",
  },

  {
    icon: ShoppingCart,
    title: "Faster Sales Operations",
    description:
      "Sell products quickly, preview profit instantly, and keep stock records automatically synchronized after every transaction.",
  },

  {
    icon: Users,
    title: "Controlled Team Access",
    description:
      "Assign staff to specific inventory categories and ensure everyone only sees what they are authorized to manage.",
  },

  {
    icon: BarChart3,
    title: "Actionable Business Insights",
    description:
      "Monitor revenue, profit, stock performance, and staff activities to make informed business decisions.",
  },
];

export default function SolutionSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 7 },
        bgcolor: "linear-gradient(to bottom right, #020617, #0F172A, #064E3B)",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={8}
          alignItems="center"
        >
          {/* Left Side */}

          <Grid
            size={{
              xs: 12,
              md: 5,
            }}
          >
            <Stack spacing={4}>
              <Typography
                sx={{
                  color: "#34d399",
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                The Solution
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  fontSize: {
                    xs: "2.5rem",
                    md: "3.8rem",
                  },
                }}
              >
                Everything Your
                Inventory Needs
                In One Platform
              </Typography>

              <Typography
                sx={{
                  color: "#94a3b8",
                  fontSize: "1.1rem",
                  lineHeight: 1.9,
                }}
              >
                Stop relying on spreadsheets,
                manual calculations, and
                disconnected tools.

                Inventrino centralizes inventory
                tracking, sales management,
                stock monitoring, staff control,
                and business reporting into one
                streamlined system designed for
                growing businesses.
              </Typography>

              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                spacing={2}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowRight size={18} />}
                  sx={{
                    py: 1.6,
                    px: 4,
                    borderRadius: 3,
                    fontWeight: 700,
                    textTransform: "none",
                    bgcolor: "#34d399",

                    "&:hover": {
                      bgcolor: "#10b981",
                    },
                  }}

                  className="bg-emerald-400"
                >
                  Start Free Trial
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    py: 1.6,
                    px: 4,
                    borderRadius: 3,
                    textTransform: "none",
                    borderColor: "#334155",
                    color: "#fff",

                    "&:hover": {
                      borderColor: "#34d399",
                    },
                  }}
                >
                  Request Demo
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* Right Side */}

          <Grid
            size={{
              xs: 12,
              md: 7,
            }}
          >
            <Grid container spacing={3}>
              {solutions.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Grid
                    size={{
                      xs: 12,
                      sm: 6,
                    }}
                    key={index}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 4,
                        height: "100%",
                        borderRadius: 4,
                        // bgcolor: "#1E293B",
                        bgcolor: "#0f172a",
                        border:
                          "1px solid rgba(255,255,255,.06)",
                        transition:
                          "all .3s ease",

                        "&:hover": {
                          transform:
                            "translateY(-6px)",
                          borderColor:
                            "#34d399",
                        },
                      }}
                    >
                      <Stack spacing={3}>
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: 3,
                            // bgcolor: "rgba(52,211,153,.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Icon
                            size={28}
                            color="White"
                          />
                        </Box>

                        <Typography
                          variant="h6"
                          sx={{
                            color: "#34d399",
                            fontWeight: 700,
                          }}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#ffffff",
                            lineHeight: 1.8,
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Stack>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}