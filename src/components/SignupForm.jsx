// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Checkbox from '@mui/material/Checkbox';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
// import FormControl from '@mui/material/FormControl';
// import Link from '@mui/material/Link';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';
// import MuiCard from '@mui/material/Card';
// import { styled } from '@mui/material/styles';

// import logo from "../assets/favicon.png"
// import { Link as RouterLink } from "react-router-dom";
// import {textFieldStyles} from "../utils/textFieldStyles.js"

// // import AppTheme from '../shared-theme/AppTheme';
// // import ColorModeSelect from '../shared-theme/ColorModeSelect';

// import FacebookIcon from "@mui/icons-material/Facebook";
// import { FcGoogle } from "react-icons/fc";
// import Inventory2Icon from "@mui/icons-material/Inventory2";
// // import { GoogleIcon, FacebookIcon, SitemarkIcon } from './components/CustomIcons';

// const Card = styled(MuiCard)(
//   ({ theme }) => ({
//     width: "100%",
//     maxWidth: "450px",

//     padding: theme.spacing(5),
//     boxSizing: "border-box",

//     display: "flex",
//     flexDirection: "column",

//     padding: theme.spacing(4),
//     gap: theme.spacing(2),
//     margin: "auto",

//     borderRadius: 24,

//     background: "rgba(30,41,59,.85)",
//     backdropFilter: "blur(20px)",
//     border: "1px solid rgba(255,255,255,.08)",
//     boxShadow: "0 25px 80px rgba(0,0,0,.35)",
//   })
// );

// const SignUpContainer = styled(Stack)(
//   ({ theme }) => ({
//     minHeight: "100vh",
//     width: "100%",

//     justifyContent: "center",
//     alignItems: "center",

//     padding: theme.spacing(2),

//     overflowY: "auto",

//     position: "relative",

//     [theme.breakpoints.up("sm")]: {
//       padding: theme.spacing(4),
//     },

//     "&::before": {
//       content: '""',
//       position: "absolute",
//       inset: 0,
//       zIndex: -1,

//       backgroundImage:
//         "radial-gradient(circle at center, #f8fafc 0%, #e2e8f0 100%)",

//       backgroundRepeat: "no-repeat",
//       backgroundSize: "cover",
//     },


//     background: `
//       radial-gradient(
//         circle at top left,
//         rgba(16,185,129,.18),
//         transparent 30%
//       ),
//       radial-gradient(
//         circle at bottom right,
//         rgba(6,182,212,.15),
//         transparent 35%
//       ),
//       #0F172A
//     `,
//   })
// );

// export default function SignupForm(props) {
//   const [emailError, setEmailError] = React.useState(false);
//   const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
//   const [passwordError, setPasswordError] = React.useState(false);
//   const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
//   const [nameError, setNameError] = React.useState(false);
//   const [nameErrorMessage, setNameErrorMessage] = React.useState('');

//   const validateInputs = () => {
//     const email = document.getElementById('email');
//     const password = document.getElementById('password');
//     const name = document.getElementById('name');

//     let isValid = true;

//     if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
//       setEmailError(true);
//       setEmailErrorMessage('Please enter a valid email address.');
//       isValid = false;
//     } else {
//       setEmailError(false);
//       setEmailErrorMessage('');
//     }

//     if (!password.value || password.value.length < 6) {
//       setPasswordError(true);
//       setPasswordErrorMessage('Password must be at least 6 characters long.');
//       isValid = false;
//     } else {
//       setPasswordError(false);
//       setPasswordErrorMessage('');
//     }

//     if (!name.value || name.value.length < 1) {
//       setNameError(true);
//       setNameErrorMessage('Name is required.');
//       isValid = false;
//     } else {
//       setNameError(false);
//       setNameErrorMessage('');
//     }

//     return isValid;
//   };

//   const handleSubmit = (event) => {
//     if (nameError || emailError || passwordError) {
//       event.preventDefault();
//       return;
//     }
//     const data = new FormData(event.currentTarget);
//     console.log({
//       name: data.get('name'),
//       lastName: data.get('lastName'),
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//       <SignUpContainer direction="column" sx={{ overflow: 'auto', height: '100vh', }}>
//         <Card variant="outlined" sx={{overflow: 'auto',  overflowX: "hidden", height: '100vh',}}>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               gap: 1,
//             }}
//           >
//             <Box
//               sx={{
//                 width: 70,
//                 height: 70,
//                 borderRadius: 4,
//                 bgcolor: "rgba(16,185,129,.12)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <Box
//                 component="img"
//                 src={logo}
//                 alt="Inventrino"
//                 sx={{
//                   width: {
//                     xs: 40,
//                     md: 48,
//                   },
//                   height: {
//                     xs: 40,
//                     md: 48,
//                   },
//                 }}
//               />
//             </Box>

//             <Typography
//               variant="h4"
//               fontWeight={800}
//               sx={{
//                 textAlign:"center",
//                 fontSize: {
//                   xs: "1.8rem",
//                   sm: "2rem",
//                   md: "2.2rem",
//                 },
//                 color: "#fff"
//               }}
//             >
//               Create Your Account
//             </Typography>

//             <Typography
//               variant="body2"
//               color="text.secondary"
//               sx={{
//                 textAlign:"center",
//                 fontSize: {
//                   xs: "0.95rem",
//                   sm: "1rem",
//                   md: "1.08rem",
//                 },
//                 color: "#c1cad6"
//               }}
//             >
//               Start managing inventory, sales,
//               stock movements and staff operations
//               with Inventrino.
//             </Typography>
//           </Box>
//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
//           >
//             <FormControl sx={textFieldStyles}>
//               <FormLabel htmlFor="name" sx={{ mb: 1, color: "#CBD5E1", fontWeight: 600, "&.Mui-focused": { color: "#10B981",},}}>Full name</FormLabel>
//               <TextField
//                 autoComplete="name"
//                 name="name"
//                 required
//                 fullWidth
//                 id="name"
//                 placeholder="Jon Snow"
//                 error={nameError}
//                 helperText={nameErrorMessage}
//                 color={nameError ? 'error' : 'primary'}
//               />
//             </FormControl>
//             <FormControl sx={textFieldStyles}>
//               <FormLabel htmlFor="email" sx={{ mb: 1, color: "#CBD5E1", fontWeight: 600, "&.Mui-focused": { color: "#10B981",},}} >Email</FormLabel>
//               <TextField
//                 required
//                 fullWidth
//                  id="email"
//                 placeholder="your@email.com"
//                 name="email"
//                 autoComplete="email"
//                 variant="outlined"
//                 error={emailError}
//                 helperText={emailErrorMessage}
//                 color={emailError ? 'error' : 'primary'}
//               />
//             </FormControl>
//             <FormControl sx={textFieldStyles}>
//               <FormLabel htmlFor="password" sx={{ mb: 1, color: "#CBD5E1", fontWeight: 600, "&.Mui-focused": { color: "#10B981",},}}>Password</FormLabel>
//               <TextField
//                 required
//                 fullWidth
//                 name="password"
//                 placeholder="••••••"
//                 type="password"
//                 id="password"
//                 autoComplete="new-password"
//                 variant="outlined"
//                 error={passwordError}
//                 helperText={passwordErrorMessage}
//                 color={passwordError ? 'error' : 'primary'}
//               />
//             </FormControl>
//             <FormControlLabel
//              control={
//                 <Checkbox
//                   value="allowExtraEmails"
//                   sx={{
//                     color: "#64748B",

//                     "&.Mui-checked": {
//                       color: "#10B981",
//                     },

//                     "&:hover": {
//                       backgroundColor: "rgba(16,185,129,0.08)",
//                     },
//                   }}
//                 />
//               }
//               label="I want to receive updates via email."
//               sx={{
//                 color: "#c1cad6",

//                 "& .MuiFormControlLabel-label": {
//                   color: "#94A3B8",
//                   fontSize: "0.95rem",
//                   lineHeight: 1.6,
//                   fontWeight: 500,
//                 },
//               }}
//             />
//               <Button
//                 fullWidth
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   py: 1.6,
//                   borderRadius: 3,
//                   bgcolor: "#10B981",
//                   fontWeight: 700,
//                   textTransform: "none",
//                   "&:hover": {
//                     bgcolor: "#059669",
//                   },
//                 }}
//               >
//                 Create Account
//               </Button>
//           </Box>
//           <Divider sx={{
//               my: 1.8,
//               color: "#94A3B8",

//               "&::before, &::after": {
//                 borderColor: "rgba(148,163,184,0.25)",
//               },
//             }}>
//             <Typography>or</Typography>
//           </Divider>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             <Button
//               fullWidth
//               variant="outlined"
//               startIcon={<FcGoogle />}
//               onClick={() => alert("Sign up with Google")}
//               sx={{
//                 py: 1.5,
//                 borderRadius: 3,
//                 textTransform: "none",
//                 fontWeight: 600,
//                 fontSize: "0.95rem",
//                 color: "#CBD5E1",
//                 borderColor: "rgba(255,255,255,0.12)",
//                 backgroundColor: "rgba(255,255,255,0.02)",
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                   borderColor: "#10B981",
//                   backgroundColor: "rgba(16,185,129,0.06)",
//                   transform: "translateY(-2px)",
//                   boxShadow:
//                     "0 8px 24px rgba(16,185,129,0.15)",
//                 },

//                 "&:active": {
//                   transform: "translateY(0)",
//                 },
//               }}
//             >
//               Continue with Google
//             </Button>
//             <Divider
//               sx={{
//                 my: 1.8,
//                 color: "#94A3B8",

//                 "&::before, &::after": {
//                   borderColor: "rgba(148,163,184,0.25)",
//                 },
//               }}
//             >
//               <Typography color="text.secondary" sx={{ fontSize: {
//                   xs: "0.75rem",
//                   sm: "0.85rem",
//                   md: "0.95rem",
//                 },
//                 }}>
//                 Trusted By Growing Businesses
//               </Typography>
//             </Divider>
//             <Typography
//               sx={{
//                 textAlign: "center",
//                 color: "#c1cad6",
//                 // color: "#94A3B8",
//                 fontSize: "0.95rem",
//               }}
//             >
//               Already have an account?{" "}
//               <Link
//                 component={RouterLink}
//                 to="/login"
//                 underline="none"
//                 sx={{
//                   color: "#10B981",
//                   fontWeight: 700,
//                   position: "relative",
//                   transition: "all .3s ease",

//                   "&::after": {
//                     content: '""',
//                     position: "absolute",
//                     left: 0,
//                     bottom: -2,
//                     width: "0%",
//                     height: "2px",
//                     background:
//                       "linear-gradient(90deg,#10B981,#059669)",
//                     transition: "width .3s ease",
//                   },

//                   "&:hover": {
//                     color: "#059669",
//                   },

//                   "&:hover::after": {
//                     width: "100%",
//                   },
//                 }}
//               >
//                 Sign In
//               </Link>
//             </Typography>
//           </Box>
//         </Card>
//       </SignUpContainer>
//   );
// }


import * as React from 'react';
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
  Chip,
  Paper,
} from "@mui/material";

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { FcGoogle } from "react-icons/fc";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";

import logo from "../assets/favicon.png"
import signupBg from "../assets/signup.png"
import dashboardMCKP from "../assets/dashboardMCKP.png"
import {textFieldStyles} from "../utils/textFieldStyles.js"
import {authTextFieldStyles} from "../utils/authTextFieldStyles.js"

import { Link as RouterLink } from "react-router-dom";

const highlights = [
  "Real-Time Inventory Tracking",
  "Smart Multi-Product Management",
  "Role-Based Staff Access",
  "Sales & Profit Analytics",
  "Stock Alerts & Notifications",
];

export default function SignupPage() {

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
            md: "1px solid rgba(148,163,184,.15)",
          },
        }}
      >
        <Card
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 500,
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
            alignSelf: "center",
          }}
        >
          {/* logo */}
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

          {/* Create Account */}
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
              Create Your Account
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
              Start managing inventory, sales, staff, and stock
              operations from one intelligent platform.
            </Typography>
          </Box>

          {/* Form */}
          <Stack spacing={3}>
            <FormControl sx={authTextFieldStyles}>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                autoComplete="name"
                required
                color={nameError ? 'error' : 'primary'}
                error={nameError}
                helperText={nameErrorMessage}
                sx={authTextFieldStyles}
              />
            </FormControl>

            <FormControl sx={authTextFieldStyles}>
              <TextField
                fullWidth
                label="Business Email"
                variant="outlined"
                autoComplete="email"
                required
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
                required
                color={passwordError ? 'error' : 'primary'}
                error={passwordError}
                helperText={passwordErrorMessage}
                sx={authTextFieldStyles}
              />
            </FormControl>

            <FormControl sx={authTextFieldStyles}>
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                variant="outlined"
                required
                color={confirmPasswordError ? 'error' : 'primary'}
                error={confirmPasswordError}
                helperText={confirmPasswordErrorMessage}
                sx={authTextFieldStyles}
              />
            </FormControl>

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
              label={
                <>
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    underline="hover"
                    sx={{ color: "#10B981", fontWeight: 600 }}
                  >
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    underline="hover"
                    sx={{ color: "#10B981", fontWeight: 600 }}
                  >
                    Privacy Policy
                  </Link>
                </>
              }
            />

            <Button
              component={RouterLink}
              to="/otp-verification"
              size="large"
              variant="contained"
              sx={{
                py: 1.6,
                bgcolor: "#10B981",
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 700,
                "&:hover": {
                  bgcolor: "#059669",
                },
              }}
            >
              Create Account
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<FcGoogle />}
              onClick={() => alert("Sign up with Google")}
              sx={{
                py: 1.5,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 600,
                fontSize: "0.95rem",
                color: "black",
                borderColor: "#10b981c5",
                backgroundColor: "rgba(255,255,255,0.02)",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#10B981",
                  backgroundColor: "rgba(16,185,129,0.06)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 24px rgba(16, 185, 129, 0.04)",
                },

                "&:active": {
                  transform: "translateY(0)",
                },
              }}
            >
              Continue with Google
            </Button>
            <Typography
              textAlign="center"
              sx={{
                color: "#46505f",
                fontSize: { 
                  xs: "0.875rem",
                  md: "1rem",
                },
                lineHeight: 1.6,
                display: {
                  xs: "flex",
                },
                flexDirection: {
                  md: "row"
                },
                '@media (max-width: 359px)': {flexDirection: "column"},
                gap: 0.8,
                alignItem: "center",
                justifyContent: "center"
              }}
            >
              <Box
                component="span"
              >
                Already have an account?
              </Box>

              {" "}

              <Link
                component={RouterLink}
                to="/login"
                underline="none"
                sx={{
                  color: "#10B981",
                  fontWeight: 700,
                }}
              >
                Sign In
              </Link>
            </Typography>
          </Stack>
        </Card>
      </Box>

      {/* RIGHT PANEL */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          display: {
            xs: "none",
            md: "flex",
          },
          justifyContent: "center",
          alignItem: "center",
          overflow: "hidden",
          backgroundImage: `linear-gradient(
            rgba(15, 23, 42, .55),
            rgba(15, 23, 42, .75)
          ),
          url(${signupBg})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Glow Effects */}
        <Box
          sx={{
            position: "absolute",
            top: -200,
            right: -150,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(16,185,129,.15)",
            filter: "blur(120px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -150,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(6,182,212,.15)",
            filter: "blur(120px)",
          }}
        />

        <Stack
          spacing={5}
          justifyContent="center"
          sx={{
            maxWidth: 700,
            mx: "auto",
            position: "relative",
            zIndex: 2,
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
              fontWeight: 900,
              color: "#fff",
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
            Take Complete Control
            <Box
              component="br"
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            />

            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg,#10B981,#06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Of your Inventory
            </Box>
          </Typography>

          {/* Features */}
          <Stack spacing={2}>
            {highlights.map((item) => (
              <Stack
                key={item}
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <CheckCircleRoundedIcon
                  sx={{
                    color: "#10B981",
                  }}
                />

                <Typography
                  sx={{
                    color: "#E2E8F0",
                  }}
                >
                  {item}
                </Typography>
              </Stack>
            ))}
          </Stack>

          {/* Dashboard Mockup */}
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
              src={dashboardMCKP}
              alt="Inventrino Dashboard"
              sx={{
                width: "100%",
                display: "block",
                borderRadius: 4,
              }}
            />
          </Paper>
        </Stack>
      </Box>
    </Box>
  );
}