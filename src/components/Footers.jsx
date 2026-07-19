import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import Email from "@mui/icons-material/Email"
import SendRoundedIcon from "@mui/icons-material/SendRounded";

import logo from "../assets/favicon.png"
import {textFieldStyles} from "../utils/textFieldStyles.js"

const footerLinks = {
  Product: [
    "Features",
    "Solutions",
    "Pricing",
    "Dashboard",
  ],

  Company: [
    "About",
    "Contact",
    "Partners",
    "Careers",
  ],

  Resources: [
    "Documentation",
    "Help Center",
    "API",
    "Blog",
  ],

  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "Cookies",
    "Security",
  ],
};

export default function FooterSection() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 10, md: 10 },
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: `
          radial-gradient(
            circle at top center,
            rgba(0,229,168,0.08),
            transparent 45%
          ),
          linear-gradient(
            180deg,
            #0B1120 0%,
            #020617 100%
          )
        `,
      }}
    >
      <Container maxWidth="xl">
        {/* Hero CTA */}
        <Box
          sx={{
            mb: 10,
            p: { xs: 4, md: 8 },
            borderRadius: 8,
            // background:"linear-gradient(135deg, rgba(16,185,129,.15), rgba(6,182,212,.15))",
            border:"2px solid rgba(255,255,255,.08)",
            backdropFilter: "blur(50px)",
            textAlign: "center",
            position: "relative",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 900,
              mb: 3,
              fontSize: {
                xs: "2.2rem",
                md: "4rem",
              },
            }}
          >
            Ready To <span style={{ color: "#10b981", fontFamily: "Montserrat", fontStyle: "italic" }} className="text-outline">Simplify</span>
            <br />
            Inventory Management?
          </Typography>

          <Typography
            sx={{
              color: "#CBD5E1",
              maxWidth: 750,
              mx: "auto",
              lineHeight: 1.9,
              mb: 5,
            }}
          >
            Stop relying on spreadsheets and
            disconnected tools. Start tracking
            inventory, sales, staff activities,
            and business performance from one
            powerful platform.
          </Typography>

          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowOutwardIcon />}
            sx={{
              px: 5,
              py: 1.8,
              borderRadius: 4,
              textTransform: "none",
              fontWeight: 700,
              bgcolor: "#10B981",
              "&:hover": { bgcolor: "#059669"}, 
            }}
          >
            Start Free Trial
          </Button>
        </Box>

        {/* Main Footer */}
        <Grid
          container
          spacing={{ xs: 5, md: 6 }}
          sx={{
            mb: 8,
          }}
        >
          {/* Brand */}
          <Grid
            size={{
              xs: 12,
              md: 4,
            }}
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            <Stack spacing={1.2} sx={{
                alignItems: {
                    xs: "center",
                    md: "flex-start",
                  },
                }}>
              <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: {
                      xs: "center",
                      md: "flex-start",
                    },
                    gap: 1,
                    flexGrow: "wrap",
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="Inventrino Logo"
                  sx={{
                    width: {
                      xs: 40,
                      md: 48,
                    },
                    height: {
                      xs: 40,
                      md: 48,
                    },
                  }}
                />
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 900,
                    fontFamily: "Montserrat",
                    fontStyle: "italic",
                    letterSpacing: 1,

                    fontSize: {
                      xs: "2rem",
                      sm: "2.3rem",
                      md: "2.5rem",
                    },

                    lineHeight: 1.1,
                    color: "#fff",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color: "#10B981",
                    }}
                  >
                    Invent
                  </Box>
                  rino
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#94A3B8",
                  lineHeight: 1.9,
                  maxWidth: {
                    xs: "100%",
                    md: 420,
                  },
                  mx: {
                    xs: "auto",
                    md: 0,
                  },
                  fontSize: {
                    xs: "0.95rem",
                    md: "1rem",
                  }
                }}
              >
                A modern inventory management
                platform designed to help
                businesses track stock, manage
                sales, monitor staff activity,
                and make smarter decisions.
                <br/>
                Sreamline your inventory,
                track your sales and grow 
                your bussiness with confident
              </Typography>
            </Stack>
          </Grid>

          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(
            ([title, links]) => (
              <Grid
                key={title}
                size={{
                  xs: 6,
                  md: 2,
                }}
                sx={{
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  {title}
                </Typography>

                <Stack spacing={2}>
                  {links.map((link) => (
                    <Typography
                      key={link}
                      sx={{
                        color: "#94A3B8",
                        cursor: "pointer",

                        transition:
                          "all .3s ease",

                        "&:hover": {
                          color: "#10B981",
                          transform:
                            "translateX(4px)",
                        },
                      }}
                    >
                      {link}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
            )
          )}
        </Grid>

        {/* Newsletter */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            borderRadius: 4,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Grid
            container
            spacing={3}
            alignItems="center"
          >
            <Grid size={{ xs: 12, md: 6 }}
              sx={{
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}>
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                Stay Updated
              </Typography>

              <Typography
                sx={{
                  color: "#94A3B8",
                }}
              >
                Subscribe to receive product updates, inventory insights,
                and business growth tips.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                spacing={2}
              >
                <TextField
                  fullWidth
                  placeholder="Enter your email"
                  InputProps={{
                    startAdornment: (
                      <Email
                        sx={{
                          mr: 1,
                          color: "#94A3B8",
                        }}
                      />
                    ),
                  }}
                  sx={textFieldStyles}
                />

                <Button
                  variant="contained"
                  sx={{
                    px: 4,
                    py: 1.6,
                    whiteSpace: "nowrap",
                    fontWeight: 700,
                    borderRadius: 3,
                    textTransform: "none",
                    background:"linear-gradient(135deg,#00E5A8,#00C896)",
                    "&:hover": {
                      background:"linear-gradient(135deg,#00C896,#00B383)",
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Divider
          sx={{
            borderColor:"rgba(255,255,255,.08)",
            my: 6,
            mb: 4,
          }}
        />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            py: 2,
          }}
        >
          <Typography
            sx={{
              color: "#64748B",
              fontSize: {
                xs: "0.85rem",
                md: "0.95rem",
              },
            }}
          >
            © {new Date().getFullYear()} Inventrino.
            All rights reserved.
          </Typography>

         {/* Legal Links */}
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={{
              xs: 1,
              md: 3,
            }}
            useFlexGap
            sx={{
              rowGap: 1,
            }}
          >
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookie Policy",
              "Security",
            ].map((item) => (
              <Typography
                key={item}
                sx={{
                  color: "#94A3B8",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  transition: "all .3s ease",

                  "&:hover": {
                    color: "#10B981",
                  },
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            spacing={3}
            useFlexGap
            sx={{
              rowGap: 1,
            }}
          >
            {[FacebookIcon, LinkedInIcon, XIcon].map(
              (Icon, index) => (
                <IconButton
                  key={index}
                  sx={{
                    bgcolor:"rgba(255,255,255,.04)",
                    color: "#fff",
                    border:"1px solid rgba(255,255,255,.05)",
                    transition:"all .3s ease",
                    "&:hover": {
                      bgcolor:"rgba(16,185,129,.12)",
                      color: "#10B981",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  <Icon />
                </IconButton>
              )
            )}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}