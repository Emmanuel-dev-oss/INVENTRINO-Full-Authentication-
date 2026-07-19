import * as React from 'react';
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
  Chip,
} from "@mui/material";

import FormControl from '@mui/material/FormControl';
import { FcGoogle } from "react-icons/fc";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import logo from "../assets/favicon.png"
import dashboardMockup from "../assets/dashboardMCKP.png";
import {authTextFieldStyles} from "../utils/authTextFieldStyles.js"


export default function LoginPage() {

  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState('');

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        bgcolor: "#0F172A",
      }}
    >
      {/* LEFT PANEL */}
      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "42%",
          },

          bgcolor: "#0F172A",

          display: "flex",
          justifyContent: "center",

          overflowY: "auto",
          px: {
            xs: 0.7,
            md: 1.6,
          },
          py: {
            xs: 0.7,
            sm: 1.2,
            md: 1.9,
            lg: 0,
          },

          borderRight: {
            lg: "1px solid rgba(148,163,184,.15)",
          },
        }}
      >
        <Card
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 480,

            alignSelf: "center",

            px: {
              xs: 2.9,
              md: 4.3,
            },
            py: {
              xs: 2,
              md: 3,
              lg: 4.3,
            },

            borderRadius: 4,
          }}
        >
          {/* Logo */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={{ xs: 1, sm: 1.5 }}
            sx={{
              mb: { xs: 1, md: 1.5 },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Inventrino"
              sx={{
                width: {
                  xs: 40,
                  sm: 48,
                  md: 56,
                },
                height: {
                  xs: 40,
                  sm: 48,
                  md: 56,
                },
                objectFit: "contain",
                flexShrink: 0,
              }}
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                pt: { xs: 0, md: 0.5 },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "1.5rem",
                    sm: "1.75rem",
                    md: "2rem",
                  },
                  fontWeight: 900,
                  lineHeight: 1,
                  background: "linear-gradient(90deg,#10B981,#06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Inventrino
              </Typography>
            </Box>
          </Stack>

          {/* Welcome */}
          <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: { xs: 1, sm: 0.5 },
                textAlign: { xs: "center", md: "left" },
                width: "100%",
            }}
          >
            <Typography
              variant="h4"
              fontWeight={900}
              mb={1}
              sx={{
                fontWeight: 900,
                fontSize: {
                  xs: "1.75rem", // Mobile
                  sm: "1.9rem",    // Tablet
                  md: "2rem",  // Desktop
                  lg: "2.5rem",
                },
                lineHeight: 1.2,
              }}
            >
              Welcome Back 👋
            </Typography>

            <Typography
              sx={{
                color: "#46505f",
                mb: { xs: 3, md: 4 },
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                },
                lineHeight: 1.7,
                maxWidth: {
                  xs: "100%",
                  sm: "500px",
                },
                mx: {
                  xs: "auto",
                  md: 0,
                },
              }}
            >
              Sign in to continue managing
              your inventory, sales, staff,
              and stock operations.
            </Typography>
          </Box>

          {/* Form */}
          <Stack spacing={3}>
            <FormControl sx={authTextFieldStyles}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                autoComplete="email"
                color={emailError ? 'error' : 'primary'}
                error={emailError}
                helperText={emailErrorMessage}
                sx={authTextFieldStyles}
              />
            </FormControl>

            <FormControl sx={authTextFieldStyles}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
                error={passwordError}
                helperText={passwordErrorMessage}
                sx={authTextFieldStyles}
              />
            </FormControl>

            {/* Remember Me */}
            <Stack
              sx={{
                flexDirection: {
                  xs: "row",
                },
                '@media (max-width: 367px)' : {flexDirection: "column"},
                alignItems: {
                  xs: "center",
                },
                justifyContent: {xs: "space-between"},
                gap: {
                  xs: 0.8,
                  sm: 2,
                },
                width: "100%",
              }}
            >
              <FormControlLabel
                sx={{
                  m: 0,

                  "& .MuiFormControlLabel-label": {
                    fontSize: {
                      xs: "0.875rem",
                      sm: "0.95rem",
                      md: "1rem",
                    },
                    lineHeight: 1.6,
                    color: "#64748B",
                  },
                }}
                control={
                  <Checkbox
                    size="small"
                    sx={{
                      color: "#10B981",

                      "&.Mui-checked": {
                        color: "#10B981",
                      },
                    }}
                  />
                }
                label="Remember Me"
              />

              <Link
                component={RouterLink}
                to="/forgot-password"
                underline="none"
                sx={{
                  ml: {
                    xs: 1,
                  },
                  color: "#10B981",
                  fontWeight: 600,
                  fontSize: {
                    xs: "0.875rem",
                    sm: "0.95rem",
                    md: "1rem",
                  },
                  alignSelf: {
                    xs: "center",
                  },

                  "&:hover": {
                    color: "#059669",
                  },
                }}
              >
                Forgot Password?
              </Link>
            </Stack>

            <Button
              component={RouterLink}
              to="/dashboard"
              fullWidth
              size="large"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                py: {
                  xs: 1.4,
                  sm: 1.5,
                  md: 1.6,
                },
                bgcolor: "#10B981",
                borderRadius: 3,
                fontWeight: 700,
                textTransform: "none",
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                },

                "&:hover": {
                  bgcolor: "#059669",
                },
              }}
            >
              Sign In
            </Button>
          </Stack>

          <Divider
            sx={{
              my: {
                xs: 3,
                md: 4,
              },
            }}
          >
            <Typography
              sx={{
                color: "#94A3B8",
                fontSize: {
                  xs: ".8rem",
                  sm: ".9rem",
                },
              }}
            >
              OR
            </Typography>
          </Divider>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<FcGoogle />}
            onClick={() => alert("Sign up with Google")}
            sx={{
              py: {
                xs: 1.3,
                sm: 1.5,
              },
              borderRadius: 3,
              textTransform: "none",
              fontWeight: 600,
              fontSize: {
                xs: "0.9rem",
                sm: "0.95rem",
              },
              color: "#000",
              borderColor: "#10b981c5",
              backgroundColor: "rgba(255,255,255,0.02)",
              transition: "all 0.3s ease",

              "&:hover": {
                borderColor: "#10B981",
                backgroundColor: "rgba(16,185,129,0.06)",
                transform: {
                  xs: "none",
                  md: "translateY(-2px)",
                },
                boxShadow: "0 8px 24px rgba(16, 185, 129, 0.04)",
              },

              "&:active": {
                transform: "translateY(0)",
              },
            }}
          >
            Continue with Google
          </Button>

          {/* Sign Up */}
          <Typography
            textAlign="center"
            sx={{
              mt: {
                xs: 3,
                md: 4,
              },
              color: "#64748B",
              fontSize: {
                xs: "0.875rem",
                sm: "0.95rem",
                md: "1rem",
              },
              lineHeight: 1.6,
              px: {
                xs: 2,
                sm: 0,
              },
            }}
          >
            Don't have an account?{" "}
            <Link
              component={RouterLink}
              to="/signup"
              underline="none"
              sx={{
                color: "#10B981",
                fontWeight: 700,
                fontSize: "inherit",

                "&:hover": {
                  color: "#059669",
                },
              }}
            >
              Create Account
            </Link>
          </Typography>

          {/* Security */}
          <Paper
            elevation={0}
            sx={{
              mt: {
                xs: 3,
                sm: 4,
                md: 5,
              },
              p: {
                xs: 2,
                sm: 2.5,
                md: 3,
              },
              borderRadius: {
                xs: 3,
                md: 4,
              },
              bgcolor: "#F8FAFC",
              border: "1px solid rgba(148,163,184,.15)",
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                mb: {
                  xs: 1.5,
                  md: 2,
                },
              }}
            >
              <SecurityRoundedIcon
                sx={{
                  color: "#10B981",
                  fontSize: {
                    xs: 20,
                    sm: 22,
                    md: 24,
                  },
                }}
              />

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: {
                    xs: "0.95rem",
                    sm: "1rem",
                    md: "1.05rem",
                  },
                }}
              >
                Enterprise Security
              </Typography>
            </Stack>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: {
                  xs: "0.875rem",
                  sm: "0.95rem",
                },
                lineHeight: 1.7,
              }}
            >
              JWT Authentication, encrypted password storage,
              secure sessions, and role-based access control.
            </Typography>
          </Paper>
        </Card>
      </Box>

      {/* RIGHT PANEL */}
      <Box
        sx={{
          flex: 1,
          display: {
            xs: "none",
            md: "flex",
          },
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg,#0F172A 0%,#111827 100%)",
        }}
      >
        {/* Emerald Glow */}
        <Box
          sx={{
            position: "absolute",
            top: -150,
            right: -150,

            width: 500,
            height: 500,

            borderRadius: "50%",
            background: "rgba(16,185,129,.18)",
            filter: "blur(120px)",
          }}
        />

        {/* Cyan Glow */}
        <Box
          sx={{
            position: "absolute",
            bottom: -150,
            left: -100,

            width: 450,
            height: 450,

            borderRadius: "50%",
            background: "rgba(6,182,212,.15)",
            filter: "blur(120px)",
          }}
        />

        {/* Dappled Light */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 15% 20%, rgba(255,255,255,.05), transparent 15%), radial-gradient(circle at 70% 35%, rgba(255,255,255,.04), transparent 18%), radial-gradient(circle at 45% 80%, rgba(255,255,255,.03), transparent 20%)",
          }}
        />

        <Stack
          justifyContent="center"
          spacing={5}
          sx={{
            position: "relative",
            zIndex: 2,
            maxWidth: 800,
            mx: "auto",
            px: {
              md: 3.8,
              lg: 5,
            },
            py: {
              md: 4.9,
              lg: 5,
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Everything You Need
            <br />

            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg,#10B981,#06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              To Run Inventory
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#CBD5E1",
              maxWidth: 650,
              lineHeight: 1.9,
              fontSize: "1.1rem",
            }}
          >
            Track products, monitor
            sales, manage staff access,
            and stay ahead of stock
            shortages with real-time
            inventory visibility.
          </Typography>

          {/* Dashboard */}
          <Paper
            elevation={0}
            sx={{
              p: 2,

              borderRadius: 6,
              bgcolor: "rgba(30,41,59,.65)",

              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,.08)",
            }}
          >
            <Box
              component="img"
              src={dashboardMockup}
              alt="Inventrino Dashboard"
              sx={{
                width: "100%",
                display: "block",
                borderRadius: 4,
              }}
            />
          </Paper>

          {/* Stats */}
          <Stack
            direction="row"
            spacing={3}
          >
            {[
              {
                icon:
                  TrendingUpRoundedIcon,
                value: "₦12.4M",
                label: "Revenue",
                color: "#10B981",
              },

              {
                icon:
                  InventoryRoundedIcon,
                value: "1,245",
                label: "Products",
                color: "#06B6D4",
              },

              {
                icon:
                  WarningAmberRoundedIcon,
                value: "32",
                label: "Alerts",
                color: "#F59E0B",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <Paper
                  key={item.label}
                  elevation={0}
                  sx={{
                    flex: 1,

                    p: 3,

                    borderRadius: 4,

                    bgcolor:
                      "rgba(30,41,59,.6)",

                    backdropFilter:
                      "blur(20px)",
                  }}
                >
                  <Icon
                    sx={{
                      color:
                        item.color,
                      mb: 1,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 800,
                    }}
                  >
                    {item.value}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#94A3B8",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Paper>
              );
            })}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}