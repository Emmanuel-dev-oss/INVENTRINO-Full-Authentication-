import {
  ShieldCheck,
  Users,
  Boxes,
  Package,
  ShoppingCart,
  Warehouse,
  PencilLine,
  Bell,
  History,
  Search,
  LayoutDashboard,
} from "lucide-react";

import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const features = [
  {
    icon: ShieldCheck,
    title: "Authentication & Security",
    description:"JWT authentication, password hashing, protected routes, and automatic session expiry keep every account secure.",
  },
  {
    icon: Users,
    title: "Roles & Permissions",
    description:"Admin and Staff roles with strict access control enforced on both frontend and backend.",
  },
  {
    icon: Boxes,
    title: "Inventory Categories",
    description:"Create unlimited inventory categories and assign staff access to specific departments.",
  },
  {
    icon: Package,
    title: "Single & Multi Products",
    description:"Manage standalone products or bulk-to-unit inventory with automatic quantity synchronization.",
  },
  {
    icon: ShoppingCart,
    title: "Smart Selling",
    description:"Sell from unit or base level, preview profit instantly, and update stock automatically.",
  },
  {
    icon: Warehouse,
    title: "Stock Management",
    description:"Restock products, update pricing, and maintain accurate inventory records in real time.",
  },
  {
    icon: PencilLine,
    title: "Product Editing",
    description:"Edit products anytime while maintaining a complete audit trail of every change.",
  },
  {
    icon: Bell,
    title: "Stock Alerts",
    description:"Receive low-stock warnings, monitor inventory status, and prevent stock shortages.",
  },
  {
    icon: History,
    title: "Sales History",
    description:"Track sales, restocks, edits, revenue, profit, and complete transaction records.",
  },
  {
    icon: Search,
    title: "Search & Navigation",
    description:"Instant product search and pagination make large inventories easy to manage.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    description:"Get a complete business overview with revenue, profit, staff activity, and inventory insights.",
  },
];

export default function FeaturesSection() {
  return (
    <Box
      id="features"
      sx={{
        py: { xs: 10, md: 9 },
        bgcolor: "#020617",
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}

        <Stack
          spacing={3}
          alignItems="center"
          textAlign="center"
          mb={10}
          className="text-center mb-16"
        >
          <Typography
            sx={{
              color: "#34d399",
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
            // className="text-"
          >
            Features
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: "white",
              // maxWidth: 900,
              fontSize: {
                xs: "2.2rem",
                md: "4rem",
              },
            }}
            className="mt-4 text-4xl md:text-5xl font-bold"
          >
            Everything You Need To Manage Inventory <span style={{ color: "#10b981", fontFamily: "Montserrat", fontStyle: "italic" }} className="text-outline">Smarter</span>
          </Typography>
        </Stack>

        {/* Features Grid */}

        <Grid container spacing={4}>
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  lg: 4,
                }}
                key={index}
              >
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 4,
                    borderRadius: 4,
                    bgcolor: "#0f172a",
                    border: "1px solid",
                    borderColor: "rgba(255,255,255,0.06)",
                    transition: "all .3s ease",
                    cursor: "pointer",

                    "&:hover": {
                      transform: "translateY(-8px)",
                      borderColor: "#34d399",
                      boxShadow:
                        "0 10px 20px rgba(34,211,238,0.12)",
                    },
                  }}
                >
                  <Stack spacing={2}>
                    {/* Icon */}

                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor:
                          "rgba(34,211,238,0.08)",
                      }}
                    >
                      <Icon
                        size={30}
                        // color="#34d399"
                        color="#ffffff"
                      />
                    </Box>

                    {/* Title */}

                    <Typography
                      variant="h6"
                      sx={{
                        color: "#34d399",
                        fontWeight: 700,
                      }}
                    >
                      {feature.title}
                    </Typography>

                    {/* Description */}

                    <Typography
                      sx={{
                        color: "White",
                        lineHeight: 1.8,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  ); 
}