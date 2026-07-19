// import { useState } from "react";
// import { forgotPassword } from "../services/authApi.js";

// export default function ForgotPassword({goToOtp,}) {

//   const [email, setEmail] = useState("");

//   const [loading, setLoading] = useState(false);

//   const [message, setMessage] = useState("");

//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => { 
//     e.preventDefault();
//     try {
//       setLoading(true);
//       setError("");

//       const response = await forgotPassword(email);

//       setMessage(response.message);

//       setTimeout(() => {
//         goToOtp(email);
//       }, 1500);

//     } catch (error) {
//       setError(
//         error.message
//       );

//     } finally {
//       setLoading(false);
//     }
//   };


//   return (
//     <div
//       className="
//       bg-slate-900
//       rounded-3xl
//       p-8
//       shadow-2xl
//       border
//       border-cyan-500/20
//       backdrop-blur-md
//       "
//     >

//       {/* Header */}

//       <h1
//         className="
//         text-3xl
//         font-bold
//         text-cyan-400
//         mb-2
//         "
//       >
//         Forgot Password
//       </h1>

//       <p
//         className="
//         text-gray-400
//         mb-6
//         "
//       >
//         Enter your account email.
//       </p>


//       {/* Success Message */}

//       {message && (

//         <div
//           className="
//           bg-green-500/20
//           border
//           border-green-500/30
//           text-green-300
//           p-4
//           rounded-xl
//           mb-4
//           "
//         >
//           {message}
//         </div>

//       )}


//       {/* Error Message */}

//       {error && (

//         <div
//           className="
//           bg-red-500/20
//           border
//           border-red-500/30
//           text-red-300
//           p-4
//           rounded-xl
//           mb-4
//           "
//         >
//           {error}
//         </div>

//       )}


//       {/* Form */}

//       <form
//         onSubmit={handleSubmit}
//         className="
//         space-y-5
//         "
//       >

//         <input
//           type="email"

//           placeholder="Email"

//           value={email}

//           onChange={(e) =>
//             setEmail(
//               e.target.value
//             )
//           }

//           className="
//           w-full
//           rounded-2xl
//           bg-black/30
//           p-4
//           border
//           border-white/10
//           focus:outline-none
//           focus:border-cyan-400
//           focus:ring-2
//           focus:ring-cyan-400/20
//           transition
//           "
//         />


//         <button
//           disabled={loading}

//           className="
//           w-full
//           bg-cyan-400
//           text-black
//           font-bold
//           py-4
//           rounded-2xl
//           hover:scale-105
//           hover:shadow-lg
//           disabled:opacity-50
//           disabled:cursor-not-allowed
//           transition
//           "
//         >

//           {
//             loading
//               ? "Sending..."
//               : "Send OTP"
//           }

//         </button>

//       </form>

//     </div>

//   );
// }

import {
  Box,
  Button,
  Card,
  Chip,
  Divider,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import Grid from "@mui/material/Grid";
import FormControl from '@mui/material/FormControl';
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

import * as React from 'react';
import { Link as RouterLink } from "react-router-dom";
import {authTextFieldStyles} from "../utils/authTextFieldStyles.js"
import logo from "../assets/favicon.png";

//Premium illustration image
import securityIllustration from "../assets/security-illustration.png";

export default function ForgotPassword() {

  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');

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
            borderRadius: 4,
            px: {
              xs: 2.9,
              md: 4.3,
            },
            py: {
              xs: 2,
              md: 3,
              lg: 4.3,
            },
          }}
        >
          {/* Logo */}
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 1.5 }}
            alignItems="center"
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

          {/* Header */}
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
              Forgot Your Password?
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
              No worries.

              <br />
              <br />

              Enter your registered business
              email and we'll send a secure
              verification code to help you
              regain access to your account.
            </Typography>
          </Box>

          {/* Form */}
          <Stack spacing={3} mt={5}>
            <FormControl sx={authTextFieldStyles}>
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                autoComplete="email"
                color={emailError ? 'error' : 'primary'}
                error={emailError}
                helperText={emailErrorMessage}
                sx={authTextFieldStyles}
              />
            </FormControl>

            <Button
              component={RouterLink}
              to="/verify-reset-otp"
              size="large"
              variant="contained"
              endIcon={
                <ArrowForwardRoundedIcon />
              }
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
              Send Verification Code
            </Button>
          </Stack>

          <Divider  sx={{ my: { xs: 3, md: 4,},}} />

          {/* Back */}
          <Link
            component={RouterLink}
            to="/login"
            underline="none"
            sx={{
              display: "block",
              width: "100%",
              mt: 2,
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
              sx={{
                width: "100%",
                py: 1.5,
                px: 2,
                borderRadius: 3,
                color: "#10B981",
                fontWeight: 700,
                transition: "all .3s ease",
                cursor: "pointer",

                "&:hover": {
                  bgcolor: "rgba(16,185,129,.08)",
                  color: "#059669",
                },

                "& svg": {
                  fontSize: {
                    xs: 20,
                    sm: 22,
                  },
                },
              }}
            >
              <ArrowBackRoundedIcon />
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: {
                    xs: "0.95rem",
                    sm: "1rem",
                  },
                  textAlign: "center",
                }}
              >
                Back to Sign In
              </Typography>
            </Stack>
          </Link>

          {/* Security */}
          <Paper
            elevation={0}
            sx={{
              mt: { xs: 4, md: 5 },
              p: { xs: 2.5, sm: 3 },
              borderRadius: { xs: 3, sm: 4 },
              bgcolor: "#F8FAFC",
              border: "1px solid rgba(148,163,184,.15)",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              flexWrap="wrap"
              mb={4}
              sx={{
                marginBottom: 2,
              }}
            >
              <SecurityRoundedIcon
                sx={{
                  color: "#10B981",
                  fontSize: {
                    xs: 24,
                    sm: 28,
                  },
                  flexShrink: 0,
                }}
              />

              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#0F172A",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.1rem",
                  },
                }}
              >
                Enterprise Security
              </Typography>
            </Stack>

            <Typography
              sx={{
                color: "#64748B",
                lineHeight: 1.8,
                fontSize: {
                  xs: "0.9rem",
                  sm: "0.95rem",
                  md: "1rem",
                },
              }}
            >
              Passwords are securely encrypted using bcrypt.
              <br />
              <br />
              Every recovery request is verified through email
              before account access is restored.
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
            lg: "flex",
          },
          justifyContent: "center",
          alignItem: "center",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg,#0F172A,#111827)",
        }}
      >
        {/* Emerald Glow */}
        <Box
          sx={{
            position: "absolute",
            top: -200,
            right: -150,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(16,185,129,.15)",
            filter: "blur(130px)",
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
            background: "rgba(6,182,212,.12)",
            filter: "blur(120px)",
          }}
        />

        {/* Dappled Light */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,

            background:
              "radial-gradient(circle at 20% 25%, rgba(255,255,255,.06), transparent 18%),radial-gradient(circle at 80% 35%, rgba(255,255,255,.04), transparent 20%),radial-gradient(circle at 55% 80%, rgba(255,255,255,.04), transparent 22%)",
          }}
        />

        <Stack
          justifyContent="center"
          spacing={5}
          sx={{
            maxWidth: 700,
            mx: "auto",
            px: {
              md: 3.8,
              lg: 5,
            },
            py: {
              md: 4.9,
              lg: 5,
            },
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 900,
              lineHeight: {
                xs: 1.2,
                sm: 1.15,
                md: 1.1,
              },
              fontSize: {
                md: "3rem",     // 64px
                lg: "3.8rem",  // 76px
              },
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            Your Inventory
            <br />
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg,#10B981,#06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Is Safe
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#CBD5E1",
              lineHeight: 1.9,
              maxWidth: 650,
            }}
          >
            Your business data remains
            protected.

            <br />

            Every password reset requires
            secure email verification before
            access is restored.
          </Typography>

          {/* Illustration */}
          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 5,
              bgcolor: "rgba(30,41,59,.65)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,.08)",
            }}
          >
            <Box
              component="img"
              src={securityIllustration}
              alt="Security"
              sx={{
                width: "100%",
                display: "block",
                borderRadius: 3,
              }}
            />
          </Paper>
          <Grid container spacing={3}>
            {[
              {
                icon: ShieldRoundedIcon,
                title: "Encrypted Passwords",
              },
              {
                icon: VerifiedUserRoundedIcon,
                title: "Email Verification",
              },
              {
                icon: SecurityRoundedIcon,
                title: "JWT Authentication",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={item.title}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      height: "100%",
                      p: { xs: 1, sm: 2 },
                      borderRadius: 4,
                      bgcolor: "rgba(30,41,59,.65)",
                      backdropFilter: "blur(18px)",
                      border: "1px solid rgba(255,255,255,.08)",
                      transition: "all .3s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        borderColor: "rgba(16,185,129,.35)",
                        bgcolor: "rgba(30,41,59,.82)",
                      },
                    }}
                  >
                    <Stack
                      spacing={2}
                      alignItems="flex-start"
                    >
                      <Box
                        sx={{
                          width: {
                            xs: 46,
                            sm: 52,
                          },
                          height: {
                            xs: 46,
                            sm: 52,
                          },
                          borderRadius: 2,
                          bgcolor: "rgba(16,185,129,.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon
                          sx={{
                            color: "#10B981",
                            fontSize: {
                              xs: 24,
                              sm: 28,
                            },
                          }}
                        />
                      </Box>

                      <Typography
                        sx={{
                          color: "#fff",
                          fontWeight: 700,

                          fontSize: {
                            xs: "1rem",
                            sm: "1.05rem",
                          },
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Stack>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Box>
    </Box>
  ); 
}