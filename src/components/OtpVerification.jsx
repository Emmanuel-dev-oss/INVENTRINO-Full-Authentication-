// import { useState } from 'react';
// import {useNavigate} from 'react-router-dom';
// import {verifyOtp} from '../services/authApi.js';

// export default function OtpVerification({email,}){

//     const [otp, setOtp] = useState('');

//     const [loading, setLoading] = useState(false);

//     const [error, setError] = useState('');

//     const navigate = useNavigate();

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         try{
//             setLoading(true);
//             setError('');
            
//             const data = await verifyOtp({email, otp});

//             localStorage.setItem (
//                 'token',
//                 data.token
//             );

//             localStorage.setItem (
//                 'user',
//                 JSON.stringify(
//                     data.user
//                 )
//             );

//             navigate('/dashboard');

//             alert(
//                 'Login Successful'
//             );

//         } catch(error) {

//             setError(
//             error.message
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="
//             bg-slate-900
//             border
//             border-white/10
//             rounded-3xl
//             p-8
//             shadow-xl
//         ">

//             <h2 className="
//                 text-3xl
//                 font-bold
//                 text-cyan-400
//                 mb-4
//             "> OTP Verification</h2>

//             <p className="
//                 text-gray-400
//                 mb-6
//             ">Enter OTP sent to:{email}</p>

//             {error && (
//             <div className="
//                 bg-red-500/20
//                 text-red-300
//                 p-3
//                 rounded-xl
//                 mb-4
//             ">{error}</div>)}

//             <form onSubmit={handleSubmit}
//                 className="space-y-5"
//             >
//                 <input 
//                     type="text"
//                     placeholder="Enter OTP"
//                     value={otp}

//                     onChange={(e) =>
//                         setOtp(e.target.value)
//                     }

//                     className="
//                         w-full
//                         rounded-2xl
//                         px-5
//                         py-4
//                         bg-black/40
//                         border
//                         border-white/10
//                         outline-none
//                         "
//                     />

//                     <button type="submit"

//                         disabled={
//                             loading
//                         }

//                         className="
//                         w-full
//                         bg-cyan-400
//                         text-black
//                         font-bold
//                         rounded-2xl
//                         py-4
//                         "
//                     >

//                     { loading?
//                     'Verifying...'
//                     :
//                     'Verify OTP'
//                     }
//                 </button>
//             </form>
//         </div> 
//     )
// }

import { useEffect, useRef, useState } from "react";

import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import VerifiedUserRoundedIcon from "@mui/icons-material/VerifiedUserRounded";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";

import { Link as RouterLink } from "react-router-dom";

import dashboardMockup from "../assets/dashboardMCKP.png";
import authBackground from "../assets/signup1.png";
import logo from "../assets/favicon.png";

const OTP_LENGTH = 6;

export default function SignupOtpVerification() {

 const [otp, setOtp] = useState(
    Array(OTP_LENGTH).fill("")
  );

  const [seconds, setSeconds] = useState(60);
  const [loading, setLoading] = useState(false);

  const inputRefs = useRef([]);

  // Replace this with wherever your email comes from
  const email = "user@example.com";

  // Focus first input on page load
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  // Countdown timer
  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  // Handle typing
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;

    setOtp(updatedOtp);

    if (
      value &&
      index < OTP_LENGTH - 1
    ) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (
    event,
    index
  ) => {
    if (
      event.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste
  const handlePaste = (event) => {
    event.preventDefault();

    const pasted = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);

    const updatedOtp = [...otp];

    pasted.split("").forEach(
      (digit, index) => {
        updatedOtp[index] = digit;
      }
    );

    setOtp(updatedOtp);

    const focusIndex = Math.min(
      pasted.length,
      OTP_LENGTH - 1
    );

    inputRefs.current[focusIndex]?.focus();
  };

  // Resend OTP
  const handleResendOtp = async () => {
    if (seconds > 0) return;

    try {
      setLoading(true);

      await authApi.resendOtp({
        email,
      });

      // Restart countdown
      setSeconds(60);

      // Clear previous OTP
      setOtp(
        Array(OTP_LENGTH).fill("")
      );

      // Focus first input
      inputRefs.current[0]?.focus();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        bgcolor: "#0F172A",
      }}
    >
      {/* LEFT */}
      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "42%",
          },
          bgcolor: "#0F172A",
          display: "flex",
          alignItems: "center",
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
          <Stack 
            spacing={3.8}
            direction="column"
          >
            {/* logo */}
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                },
                mb: 10
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

            {/* <Chip
              icon={
                <CheckCircleRoundedIcon />
              }
              label="Account Created Successfully"
              sx={{
                width: "fit-content",
                bgcolor: "rgba(16,185,129,.12)",
                color: "#fff",
                // color: "#10B981",
                fontWeight: 700,
              }}
            /> */}

            <Box>
              <Typography
                variant="h4"
                fontWeight={900}
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                  fontSize: {
                    xs: "1.75rem",
                    sm: "2rem",
                    md: "2.25rem",
                  },
                  lineHeight: {
                    xs: 1.2,
                    sm: 1.15,
                    md: 1.1,
                  },
                  fontWeight: 900,
                  marginBottom: 3,
                }}
              >
                Welcome To Inventrino
              </Typography>

              <Typography
                mt={1}
                color="#64748B"
                lineHeight={1.8}
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                Your account has been
                created successfully.

                <br />

                Verify your email to
                activate your workspace.
              </Typography>
            </Box>

            <Typography
              color="#475569"
              sx={{
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
            >
              Verification code sent to
              <Box
                component="span"
                sx={{
                  color: "#10B981",
                  fontWeight: 700,
                  ml: 1,
                }}
              >
                john@example.com
              </Box>
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                },
                width: "100%",
                mt: 2,
              }}
            >
              <Stack
                direction="row"
                spacing={{ xs: 1, sm: 1.5 }}
                onPaste={handlePaste}
                sx={{
                  "& input": {
                    "&::placeholder": {
                      color: "#CBD5E1", 
                    }
                  }
                }}
              >
                {otp.map((digit, index) => (
                  <Box
                    key={index}
                    component="input"
                    ref={(el) => (inputRefs.current[index] = el)}
                    value={digit}
                    maxLength={1}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    sx={{
                      width: { xs: 42, sm: 52, md: 58 },
                      height: { xs: 48, sm: 58, md: 64 },
                      border: "2px solid #CBD5E1",
                      borderRadius: 3,
                      textAlign: "center",
                      fontWeight: 700,
                      fontSize: {
                        xs: "1.2rem",
                        sm: "1.4rem",
                      },
                      outline: "none",
                      transition: ".25s",
                      "&:focus": {
                        borderColor: "#10B981",
                        boxShadow: "0 0 0 4px rgba(16,185,129,.15)",
                      },
                    }}
                  />
                ))}
              </Stack>
            </Box>

            <Button
              component={RouterLink}
              to="/workspace-activated"
              fullWidth
              size="large"
              variant="contained"
              endIcon={
                <ArrowForwardRoundedIcon
                  sx={{
                    fontSize: {
                      xs: 20,
                      sm: 22,
                    },
                  }}
                />
              }
              sx={{
                py: {
                  xs: 1.4,
                  sm: 1.6,
                  md: 1.8,
                },
                minHeight: {
                  xs: 52,
                  sm: 56,
                  md: 60,
                },
                borderRadius: {
                  xs: 2.5,
                  sm: 3,
                },
                bgcolor: "#10B981",
                fontWeight: 700,
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                  md: "1.05rem",
                },
                textTransform: "none",
                boxShadow: "0 12px 30px rgba(16,185,129,.25)",
                transition: "all .3s ease",
                "&:hover": {
                  bgcolor: "#059669",
                  boxShadow: "0 16px 40px rgba(16,185,129,.35)",
                  transform: "translateY(-2px)",
                },

                "&:active": {
                  transform: "scale(.98)",
                },
              }}
            >
              Activate Workspace
            </Button>

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={{
                xs: 0.5,
                sm: 1,
              }}
              justifyContent="center"
              alignItems="center"
              mt={3}
              sx={{
                width: "100%",
                textAlign: "center",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "#64748B",
                  fontSize: {
                    xs: "0.9rem",
                    sm: "0.95rem",
                  },
                }}
              >
                Didn't receive the code?
              </Typography>

              <Button
                variant="text"
                disableRipple
                disabled={seconds > 0 || loading}
                onClick={handleResendOtp}
                sx={{
                  p: 0,
                  minWidth: "auto",

                  fontSize: {
                    xs: "0.9rem",
                    sm: "0.95rem",
                  },

                  fontWeight: 700,
                  textTransform: "none",

                  color:
                    seconds > 0
                      ? "#94A3B8"
                      : "#10B981",

                  transition: "all .25s ease",

                  "&:hover": {
                    bgcolor: "transparent",
                    color: "#059669",
                  },

                  "&.Mui-disabled": {
                    color: "#94A3B8",
                  },
                }}
              >
                {loading
                  ? "Sending..."
                  : seconds > 0
                  ? `Resend in 00:${String(seconds).padStart(
                      2,
                      "0"
                    )}`
                  : "Resend Verification Code"}
              </Button>
            </Stack>
            <Button
              component={RouterLink}
              to="/signup"
              startIcon={
                <ArrowBackRoundedIcon />
              }
              sx={{
                textTransform: "none",
                color: "#10B981",
                fontWeight: 700,
              }}
            >
              Back to Sign Up
            </Button>

            <Paper
              elevation={0}
              sx={{
                mt: 4,
                p: 3,
                borderRadius: 4,
                background: "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
                border: "1px solid rgba(16,185,129,.15)",
                borderLeft: "5px solid #10B981",
                boxShadow: "0 10px 30px rgba(15,23,42,.05)",
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{
                  mb: 3,
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: 3,
                    bgcolor: "rgba(16,185,129,.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SecurityRoundedIcon
                    sx={{
                      color: "#10B981",
                      fontSize: 28,
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  color="#10B981"
                  fontWeight={600}
                  sx={{
                    alignSelf: "center",
                  }}
                >
                  Secure Email Verification
                </Typography>
              </Stack>

              <Stack spacing={2}>
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                >
                  <VerifiedUserRoundedIcon
                    sx={{
                      color: "#10B981",
                      fontSize: 20,
                    }}
                  />

                  <Typography
                    variant="body2"
                    color="#475569"
                  >
                    Verification codes expire after{" "}
                    <strong>5 minutes</strong>.
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                >
                  <VerifiedUserRoundedIcon
                    sx={{
                      color: "#10B981",
                      fontSize: 20,
                    }}
                  />

                  <Typography
                    variant="body2"
                    color="#475569"
                  >
                    Your account remains protected
                    until your email address has been
                    successfully verified.
                  </Typography>
                </Stack>
              </Stack>
            </Paper>
          </Stack>
        </Card>
      </Box>

      {/* RIGHT */}
      <Box
        sx={{
          flex: 1,
          display: {
            xs: "none",
            lg: "flex",
          },
          position: "relative",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",

          backgroundImage: `url(${authBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={5}
            sx={{
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
              color: "#ffffff",
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
                Journey Starts Here
              </Box>
            </Typography>

            <Typography
              sx={{
                color:"#dde4ec",
                lineHeight: 1.9,
                maxWidth: 650,
              }}
            >
              Activate your workspace and
              start managing inventory,
              products, suppliers, sales,
              staff, and business growth
              from one intelligent platform.
            </Typography>

            <Paper
              elevation={0}
              sx={{
                p: 2,
                borderRadius: 5,
                bgcolor: "rgba(30,41,59,.65)",
                backdropFilter: "blur(18px)",
              }}
            >
              <Box
                component="img"
                src={dashboardMockup}
                alt="Security"
                sx={{
                  width: "100%",
                  display: "block",
                  borderRadius: 3,
                }}
              />
            </Paper>

            <Stack
              direction="row"
              spacing={3}
            >
              {[
                {
                  icon: InventoryRoundedIcon,
                  title: "Unlimited Products",
                },
                {
                  icon: TrendingUpRoundedIcon,
                  title: "Real-Time Analytics",
                },
                {
                  icon: GroupsRoundedIcon,
                  title: "Role-Based Access",
                },
                {
                  icon: NotificationsActiveRoundedIcon,
                  title: "Stock Alerts",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <Paper
                    key={item.title}
                    elevation={0}
                    sx={{
                      flex: 1,
                      p: 3,
                      borderRadius: 4,
                      bgcolor: "rgba(30,41,59,.65)",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    <Icon
                      sx={{
                        color: "#10B981",
                        mb: 1,
                      }}
                    />

                    <Typography
                      sx={{
                        color:"#fff",
                        fontWeight:700
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Paper>
                );
              })}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}