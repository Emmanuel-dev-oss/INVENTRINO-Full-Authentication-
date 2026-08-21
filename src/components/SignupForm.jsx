import { useState } from "react";
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
  Paper,
} from "@mui/material";

import CircularProgress from "@mui/material/CircularProgress";
import FormControl from '@mui/material/FormControl';
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { FcGoogle } from "react-icons/fc";

import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import LinearProgress from "@mui/material/LinearProgress";

import logo from "../assets/favicon.png"
import signupBg from "../assets/signup.png"
import dashboardMCKP from "../assets/dashboardMCKP.png"
import {textFieldStyles} from "../utils/textFieldStyles.js"
import {authTextFieldStyles} from "../utils/authTextFieldStyles.js"

import { signupUser, googleSignup } from "../services/authApi.js";
import { GoogleLogin } from '@react-oauth/google';

const getPasswordStrength = (password) => {
  let score = 0;

  if (password.length >= 8) score++;

  if (/[A-Z]/.test(password)) score++;

  if (/[0-9]/.test(password)) score++;

  if (/[^A-Za-z0-9]/.test(password)) score++;

  const strength = [
    {
      label: "Very Weak",
      color: "#EF4444",
      value: 20,
    },
    {
      label: "Weak",
      color: "#F97316",
      value: 40,
    },
    {
      label: "Fair",
      color: "#EAB308",
      value: 60,
    },
    {
      label: "Good",
      color: "#3B82F6",
      value: 80,
    },
    {
      label: "Strong",
      color: "#10B981",
      value: 100,
    },
  ];

  return strength[Math.min(score, 4)];
};

const highlights = [
  "Real-Time Inventory Tracking",
  "Smart Multi-Product Management",
  "Role-Based Staff Access",
  "Sales & Profit Analytics",
  "Stock Alerts & Notifications",
];

export default function SignupPage() {

  const navigate = useNavigate();

  // Form Data State
  const [userData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "staff" //Default role
  });

  // Error State for form validation
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State to track whether the user has agreed to the terms and privacy policy
  const [agreed, setAgreed] = useState(false);

  // Loading, error, and success states for form submission
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // State to toggle password visibility for both password and 
  // confirm password fields
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  // Focus State for Password strength visibility Field
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  // Function to toggle password visibility for the specified field
  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  // Function to validate the form fields and set error messages if any field is invalid
  const validateForm = () => {
    const newErrors = {};

    if (!userData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!userData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!userData.password) {
      newErrors.password = "Password is required";
    } else if (userData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!userData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (userData.password !== userData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Function to handle changes in form fields and update the form data state accordingly. It also clears any existing error messages for the changed field.
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Function to handle form submission. It validates the form, checks if the user has agreed to the terms, and then attempts to sign up the user using the signupUser function. It also handles loading, error, and success states, and redirects to the OTP verification page upon successful signup.
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!validateForm()) {
      return;
    }

    if (!agreed) {
      setError("Please accept the Terms and Privacy Policy.");
      return;
    }

    try {
      setLoading(true);

      const response = await signupUser({
        fullName: userData.fullName,
        email: userData.email,
        password: userData.password,
        role: userData.role,
      });

      sessionStorage.setItem ( 
        "verificationToken",
        response.verificationToken
      );

      setSuccess(response.message);

      console.log(response);

      // Optional: clear the form
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "staff",
      });

      // Optional: redirect after successful signup
      // navigate("/verify-otp");
      setTimeout(() => {
        if (response.nextStep === "VERIFY_OTP") {
            navigate("/otp-verification", {
                state: {
                    email: response.user.email,
                },
            });
        }
      }, 1200);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Password Strength Calculation
  const passwordStrength = getPasswordStrength(userData.password);

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
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <FormControl sx={authTextFieldStyles}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="fullName"
                  value={userData.fullName}
                  onChange={handleChange}
                  variant="outlined"
                  autoComplete="name"
                  required
                  error={Boolean(errors.fullName)}
                  helperText={errors.fullName}
                  sx={authTextFieldStyles}
                />
              </FormControl>

              <FormControl sx={authTextFieldStyles}>
                <TextField
                  fullWidth
                  label="Business Email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  variant="outlined"
                  autoComplete="email"
                  required
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                  sx={authTextFieldStyles}
                />
              </FormControl>

              <FormControl
                fullWidth
                error={Boolean(errors.password)}
                sx={authTextFieldStyles}
              >
                <InputLabel>Password</InputLabel>

                <OutlinedInput
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  type={showPassword.password ? "text" : "password"}
                  label="Password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => togglePassword("password")}
                        onMouseDown={(e) => e.preventDefault()}
                        sx={{
                          color: "#64748B",
                          "&:hover": {
                            color: "#10B981",
                          },
                        }}
                      >
                        {showPassword.password ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />

                {errors.password && (
                  <Typography
                    variant="caption"
                    color="error"
                    sx={{ ml: 2, mt: 0.5 }}
                  >
                    {errors.password}
                  </Typography>
                )}
              </FormControl>

            { isPasswordFocused && userData.password && (
              <Box sx={{ mt: -1 }}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  mb={0.5}
                  sx={{
                    display: {
                      xs: "flex",
                      sm: "flex",
                      md: "flex",
                    },
                    flexDirection: {
                      xs: "row",
                      sm: "row",
                      md: "row",
                    },
                    alignItems: {
                      xs: "flex-start",
                      sm: "center",
                      md: "center",
                    },
                    gap: {
                      xs: 0.5,
                      sm: 0,
                      md: 0,
                    },
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    Password Strength: 
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      color: passwordStrength.color,
                    }}
                  >
                    {userData.password
                      ? passwordStrength.label
                      : ""}
                  </Typography>
                </Stack>

                <LinearProgress
                  variant="determinate"
                  value={
                    userData.password
                      ? passwordStrength.value
                      : 0
                  }
                  sx={{
                    height: 8,
                    borderRadius: 10,
                    backgroundColor: "#E5E7EB",

                    "& .MuiLinearProgress-bar": {
                      borderRadius: 10,
                      backgroundColor: passwordStrength.color,
                    },
                  }}
                />
              </Box>
            )}

              <FormControl
                fullWidth
                error={Boolean(errors.confirmPassword)}
                sx={authTextFieldStyles}
              >
                <InputLabel>Confirm Password</InputLabel>

                <OutlinedInput
                  name="confirmPassword"
                  value={userData.confirmPassword}
                  onChange={handleChange}
                  type={showPassword.confirmPassword ? "text" : "password"}
                  label="Confirm Password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() =>
                          togglePassword("confirmPassword")
                        }
                        onMouseDown={(e) => e.preventDefault()}
                        sx={{
                          color: "#64748B",
                          "&:hover": {
                            color: "#10B981",
                          },
                        }}
                      >
                        {showPassword.confirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />

                {errors.confirmPassword && (
                  <Typography
                    variant="caption"
                    color="error"
                    sx={{ ml: 2, mt: 0.5 }}
                  >
                    {errors.confirmPassword}
                  </Typography>
                )}
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
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
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
                type="submit"
                size="large"
                variant="contained"
                disabled={loading}
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
                {loading ? (
                  <CircularProgress
                    size={24}
                    sx={{ color: "white" }}
                  />
                ) : (
                  "Create Account"
                )}
              </Button>

              <Box
                sx={{
                  "& > div": {
                    width: "100%",
                  },
                  "& > div > div": {
                    width: "100%",
                  }
                }}
              >
                <GoogleLogin
                  onSuccess={async (credentialResponse) => {
                    try {
                      setLoading(true);
                      const response = await googleSignup(credentialResponse.credential);
                      
                      sessionStorage.setItem(
                        "verificationToken",
                        response.verificationToken
                      );

                      setSuccess(response.message);

                      setTimeout(() => {
                        if (response.nextStep === "VERIFY_OTP") {
                          navigate("/otp-verification", {
                            state: {
                              email: response.user.email,
                            },
                          });
                        } else if (response.nextStep === "DASHBOARD") {
                          navigate("/dashboard");
                        }
                      }, 1200);
                    } catch (err) {
                      setError(err.message || "Google signup failed");
                    } finally {
                      setLoading(false);
                    }
                  }}
                  onError={() => {
                    setError("Google signup failed. Please try again.");
                  }}
                  text="signup_with"
                  size="large"
                  width="100%"
                  theme="filled_black"
                />
              </Box>

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
                  alignItems: "center",
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
          </Box>

          <Snackbar
            open={Boolean(error)}
            autoHideDuration={5000}
            onClose={() => setError("")}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Alert
              severity="error"
              variant="filled"
              onClose={() => setError("")}
              sx={{ width: "100%" }}
            >
              {error}
            </Alert>
          </Snackbar>

          <Snackbar
            open={Boolean(success)}
            autoHideDuration={4000}
            onClose={() => setSuccess("")}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Alert
              severity="success"
              variant="filled"
              onClose={() => setSuccess("")}
              sx={{ 
                width: "100%",
                backgroundColor: "#10B981",
                color: "#fff",
              }}
            >
              {success}
            </Alert>
          </Snackbar>

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
          alignItems: "center",
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