import {
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import callIcon from "../assets/callicon.png"
import {textFieldStyles} from "../utils/textFieldStyles.js"

export default function ContactSection() {
  return (
    <Box
      id="contact"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 12, md: 5 },
        // bgcolor: "#0F172A",
        bgcolor: "#020617", 
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: -250,
          right: -150,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:"rgba(6,182,212,.12)",
          filter: "blur(160px)",
        }}
      />

      <Container maxWidth="xl">
        {/* Header */}
        <Stack
          spacing={3}
          alignItems="center"
          textAlign="center"
          mb={10}
          className="mb-16"
        >
          <Typography
            sx={{
              color: "#10B981",
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Contact Us
          </Typography>

          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: 900,
              textAlign: "center",
              fontSize: {
                xs: "2.5rem",
                md: "4.5rem",
              },
            }}
          >
            Let's Talk About
            Your Inventory
          </Typography>
          <Typography
            sx={{
              color: "#09090a",
              textAlign: "center",
              // width: 500,
              lineHeight: 1.9,
              fontSize: "1.1rem",
            }}
          >
            Whether you're managing a small shop
            or a growing business, we'd love to
            show you how Inventrino can simplify
            <br/>
            inventory management and improve
            operational efficiency.
          </Typography>
           <Box
              component="img"
              src={callIcon}
              alt="contact"
              sx={{
              position: "absolute",
              top: -19,
              right: "7%",
              zindex: 0,
              width: 170,
              opacity: 0.7,
              transform: "rotate(15deg)",
              pointerEvents: "none",
             }}
            />
        </Stack>

        <Grid
          container
          spacing={5}
          alignItems="stretch"
        >
          {/* Contact Form */}
          <Grid
            size={{
              xs: 12,
              md: 7,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2, md: 3 },
                height: "90%",
                borderRadius: 6,
                backdropFilter:"blur(20px)",
                bgcolor: "#0f172a",
                border:"1px solid rgba(255,255,255,.08)",
              }}
            >
              <Stack spacing={3}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                  }}
                >
                  Send Us a Message
                </Typography>

                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  sx={textFieldStyles}
                />

                <TextField
                  fullWidth
                  label="Email Address"
                  sx={textFieldStyles}
                />

                <TextField
                  fullWidth
                  label="Business Name"
                  sx={textFieldStyles}
                />

                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  label="How can we help?"
                  sx={textFieldStyles}
                />

                <Button
                  variant="contained"
                  size="large"
                  endIcon={
                    <ArrowRight />
                  }
                  sx={{
                    alignSelf:"flex-start",
                    bgcolor:"#10B981",
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    fontWeight: 700,
                    textTransform: "none",
                    "&:hover": {bgcolor:"#059669"},
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Paper>
          </Grid>

          {/* Contact Info */}
          <Grid
            size={{
              xs: 12,
              md: 5,
            }}
          >
            <Stack spacing={3}>
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  value:"hello@inventrino.com",
                  color: "#10B981",
                },

                {
                  icon: Phone,
                  title: "Call Us",
                  value:"+234 800 000 0000",
                  color: "#06B6D4",
                },

                {
                  icon: MessageSquare,
                  title: "Live Chat",
                  value:"Available 24/7",
                  color: "#F59E0B",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <Paper
                    key={item.title}
                    elevation={0}
                    sx={{
                      p: 4.5,
                      borderRadius: 5,
                      bgcolor: "#0f172a",
                      border:"1px solid rgba(255,255,255,.08)",
                      backdropFilter:"blur(20px)",
                      transition:".3s ease",
                      "&:hover": {
                        transform:"translateY(-6px)",
                      },
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={3}
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: 3,
                          display: "flex",
                          alignItems:"center",
                          justifyContent:"center",
                          bgcolor: `${item.color}15`,
                        }}
                      >
                        <Icon
                          color={
                            item.color
                          }
                          size={28}
                        />
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            color:"#94A3B8",
                          }}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          sx={{
                            color:"#fff",
                            fontWeight: 700,
                          }}
                        >
                          {item.value}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                );
              })}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}