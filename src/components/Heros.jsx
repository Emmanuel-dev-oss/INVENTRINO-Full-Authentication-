import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";


import { Box, Button, Stack, Chip, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        maxWidth: "900px",
        mx: "auto",
        textAlign: "center",
        px: {xs: 2, sm: 4, md: 1,},
        py: {xs: 6, md: 5}
      }}
    >
      {/* Badge */}
      <Chip
        icon={<Sparkles size={14} color="#fff" />}
        label="Ai-Powered"
        sx={{
          color: "#fff",
          fontWeight: 700,
          fontSize: {xs: '0.75rem', md: '0.8125rem'},
          letterSpacing: "0.3px",
          height: {xs: 32, md: 36},
          textTransform: 'uppercase',
          backdropFilter: 'blur(10px)',
          px: 1,
          mb: 2,
          border: "1px solid rgba(16,185,129,.25)",
          boxShadow: "0 0 0 1px rgba(16, 185, 129, 0.1), 0 4px 12px rgba(16, 185, 129, 0.15)",
          '&.MuiChip-icon':{
            color: 'rgba(16,185,129)',
            animaiton: 'pulse 2s infinite',
          },
          '@keyframes pulse': {
            '0%, 100%': {opacity: 1},
            '50%': {opacity: 0.4}
          }
        }}
      />

      {/* Heading */}
      <Typography
        sx={{
          fontWeight: 900,
          lineHeight: 1.1,
          fontSize: {
            xs: "3rem",
            md: "5rem",
          },
          color: "#fff",
        }}
      >
        Smart Inventory 
        <Box
          component="span"
          sx={{
            display: "block",
            color: "#10B981",
          }}
        >
          Management System
        </Box>
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          mt: 3,
          mb: 6,
          color: "#CBD5E1",
          fontSize: {
            xs: "1.1rem",
            md: "1.25rem",
          },
          lineHeight: 1.8,
        }}
      >
        <Box
          component="span"
          sx={{
            fontStyle: "italic",
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "#fff",
            mr: 1,
          }}
        >
          Inventrino
        </Box>
            helps businesses track stock, manage products,
            monitor sales, control staff access, and gain real-time
            visibility into inventory performance from a single intelligent platform.
      </Typography>

      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          flexDirection: {xs: "column", sm: "row"},
          gap: 2,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Button
          endIcon={<ArrowOutwardIcon />}
          variant="contained"
          onClick={() => navigate("/signup")}
          sx={{
            px: 5,
            py: 1.8,
            borderRadius: 3,
            fontWeight: 700,
            textTransform: "none",
            bgcolor: "#10B981",
            boxShadow: "0 10px 30px rgba(16,185,129,0.25)",
            "&:hover": {
              bgcolor: "#059669",
            },
          }}
        >
          Get Started
        </Button>

        <Button
          onClick={() => navigate("/login")}
          variant="outlined"
          sx={{
            px: 5,
            py: 1.8,
            borderRadius: 3,
            fontWeight: 700,
            textTransform: "none",
            color: "#fff",
            borderColor: "rgba(255,255,255,0.2)",
            "&:hover": {
              borderColor: "#10B981",
              color: "#10B981",
              backgroundColor: "rgba(16,185,129,0.05)",
            },
          }}
        >
          Existing User
        </Button>
      </Box>
    </Box>
  );
}