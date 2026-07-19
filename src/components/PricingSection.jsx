import { Check, Sparkles } from "lucide-react";

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

const plans = [
  {
    name: "Starter",
    price: "$9",
    description:
      "Perfect for small shops and businesses getting started with inventory management.",
    features: [
      "1 Admin Account",
      "3 Staff Accounts",
      "5 Inventory Categories",
      "Single Products",
      "Multi Products",
      "Sales Tracking",
      "Stock Alerts",
      "Email Support",
    ],
    highlighted: false,
  },

  {
    name: "Growth",
    price: "$29",
    description:
      "Built for growing businesses that need advanced inventory control and reporting.",
    features: [
      "1 Admin Account",
      "15 Staff Accounts",
      "Unlimited Categories",
      "Single & Multi Products",
      "Sales Analytics",
      "Profit Tracking",
      "Staff Activity Logs",
      "Priority Support",
    ],
    highlighted: true,
  },

  {
    name: "Enterprise",
    price: "Custom",
    description:
      "Tailored solutions for organizations managing large inventories and teams.",
    features: [
      "Unlimited Staff",
      "Unlimited Categories",
      "Advanced Reporting",
      "Dedicated Account Manager",
      "Custom Integrations",
      "Audit Logs",
      "Priority Infrastructure",
      "24/7 Support",
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <Box
      id="pricing"
      sx={{
        py: { xs: 10, md: 10 },
        bgcolor: "#020617",
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Stack
          spacing={3}
          alignItems="center"
          textAlign="center"
          justifyContent='center'
          mb={10}
          sx={{ mb: 8 }}
        >
          <Typography
            sx={{
              color: "#34d399",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 3,
              textAlign: "center",
            }}
          >
            Pricing
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 800,
              textAlign: "center",
              fontSize: {
                xs: "2.5rem",
                md: "4rem",
              },
            }}
          >
            Simple Pricing For
            Every Business Size
          </Typography>

          <Typography
            sx={{
              color: "#94a3b8",
              textAlign: "center",
              lineHeight: 1.8,
              fontSize: "1.1rem",
            }}
          >
            Choose a plan that matches your inventory needs.
            Upgrade anytime as your business grows.
          </Typography>
        </Stack>

        {/* Pricing Cards */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
        >
          {plans.map((plan, index) => (
            <Grid
              key={index}
              size={{
                xs: 12,
                md: 4,
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  p: 4,
                  borderRadius: 5,
                  position: "relative",
                  bgcolor: plan.highlighted
                    ? "#0f172a"
                    : "#0b1220",
                  border: plan.highlighted
                    ? "2px solid #34d399"
                    : "1px solid rgba(255,255,255,.08)",
                  transition: "all .3s ease",

                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                {plan.highlighted && (
                  <Chip
                    icon={<Sparkles size={14} />}
                    label="Most Popular"
                    sx={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      bgcolor: "#F59E0B",
                      color: "#fff",
                      fontWeight: 700,
                    }}
                  />
                )}

                <Stack spacing={4}>

                  {/* Plan Header */}
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "white",
                        fontWeight: 700,
                        mb: 1,
                      }}
                    >
                      {plan.name}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#94a3b8",
                        lineHeight: 1.8,
                      }}
                    >
                      {plan.description}
                    </Typography>
                  </Box>

                  {/* Price */}

                  <Box>
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: 800,
                        fontSize: "3rem",
                      }}
                    >
                      {plan.price}
                    </Typography>

                    {plan.price !== "Custom" && (
                      <Typography
                        sx={{
                          color: "#94a3b8",
                        }}
                      >
                        per month
                      </Typography>
                    )}
                  </Box>

                  {/* Features */}

                  <Stack spacing={2}>
                    {plan.features.map(
                      (feature, idx) => (
                        <Stack
                          key={idx}
                          direction="row"
                          spacing={2}
                          alignItems="center"
                        >
                          <Check
                            size={18}
                            color="#34d399"
                          />

                          <Typography
                            sx={{
                              color: "#cbd5e1",
                            }}
                          >
                            {feature}
                          </Typography>
                        </Stack>
                      )
                    )}
                  </Stack>

                  {/* CTA */}

                  <Button
                    fullWidth
                    size="large"
                    variant={
                      plan.highlighted
                        ? "contained"
                        : "outlined"
                    }
                    sx={{
                      mt: 2,
                      py: 1.6,
                      borderRadius: 3,
                      textTransform: "none",
                      fontWeight: 700,

                      bgcolor: plan.highlighted
                        ? "#34d399"
                        : "transparent",

                      color: plan.highlighted
                        ? "#02120a"
                        : "white",

                      borderColor: "#334155",

                      "&:hover": {
                        bgcolor: plan.highlighted
                          ? "#10b981"
                          : "rgba(255,255,255,.04)",
                      },
                    }}
                  >
                    {plan.name === "Enterprise"
                      ? "Contact Sales"
                      : "Get Started"}
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Trust Message */}
        <Box
          sx={{
            mt: 10,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: "1rem",
            }}
          >
            No setup fees • Cancel anytime •
            Secure cloud infrastructure •
            Automatic updates included
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}