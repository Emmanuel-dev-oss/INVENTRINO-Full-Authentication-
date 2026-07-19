import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Avatar,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Divider,
} from "@mui/material";

import logo from "../assets/favicon.png"

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import InventoryIcon from "@mui/icons-material/Inventory";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

const navLinks = [
  "Home",
  "Features",
  "About",
  "Solutions",
  "Pricing",
  "Contact",
];

export default function Navbar({
    scrollToSection,
    activeSection, 
    onLoginClick,
    onSignupClick
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 0,
        background: "linear-gradient(90deg, #0f172a, #1e293b)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: 0,
      }}
    >
      <Toolbar
        sx={{
          minHeight: {
            xs: 72,
            md: 84,
          },
        }}>

        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexGrow: 1,
            minWidth: 0,
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Inventrino"
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
              fontFamily: "Montserrat",
              // fontSize: {
              //   xs: "1.8rem",
              //   sm: "2rem",
              //   md: "2.4rem",
              // },
              fontSize: {
                xs: "1.5rem",
                sm: "1.8rem",
                md: "2rem",
                lg: "2.3rem",
              },

              whiteSpace: "nowrap",
              fontWeight: 800,
              fontStyle: "italic",
              letterSpacing: 1,
              textTransform: "none",
              color: "#10b981"
            }}
            // className="text-white"
          >
            Invent
            <span style={{ color: "#fff" }}>rino</span>
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box
          sx={{
            display: "flex",
            "@media (max-width:1050px)": {
              display: "none",
            },
            gap: {
              xs: 0.5,
              sm: 0.8,
              lg: 1,
              xl: 2,
            },
            mr: {
              xs: 1,
              sm: 2,
              md: 3,
              lg: 4,
            }
          }}
        >
        {navLinks.map((item) => (
          // const sectionId = item.toLowerCase();
          <Button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            sx={{
              color:
                activeSection === item.toLowerCase()
                  ? "#10B981"
                  : "#CBD5E1",

              position: "relative",

              "&::after": {
                content: '""',
                position: "absolute",
                left: 12,
                right: 12,
                bottom: 4,
                height: 2,
                borderRadius: 10,
                backgroundColor: "#10B981",

                transform:
                  activeSection === item.toLowerCase()
                    ? "scaleX(1)"
                    : "scaleX(0)",

                transition: ".3s",
              },

              textTransform: "none",

              fontSize: {
                md: "1rem",
                lg: "1rem",
                xl: "1rem",
              },

              px: {
                md: 1,
                lg: 1.5,
                xl: 2,
              },

              minWidth: "auto",

              "&:hover": {
                color: "#10B981",
                backgroundColor:
                  "rgba(16,185,129,.08)",
              },
            }}
          >
            {item}
          </Button>
          ))}
        </Box>

        {/* Auth Buttons */}
        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Button
            variant="outlined"
            onClick={onLoginClick}
            sx={{
              borderColor: "#10B981",
              color: "#fff",
              textTransform: "none",
              borderRadius: 3,

              "&:hover": {
                borderColor: "#10B981",
                color: "#10B981",
              },
              px: {
                md: 1.5,
                lg: 2.5,
              },
              fontSize: {
                md: "0.85rem",
                lg: "1rem",
              },
            }}
          >
            Login
          </Button>

          <Button
            variant="contained"
            onClick={onSignupClick}
            sx={{
              borderRadius: 3,
              textTransform: "none",
              background:"linear-gradient(135deg,#10B981,#34D399)",
              "&:hover": {
                background:"linear-gradient(135deg,#059669,#10B981)",
              },
            }}
          >
            SignUp
          </Button>
        </Stack>

        {/* Action Icons */}
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>

        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>

        {/* Mobile Menu */}
        <IconButton
          onClick={toggleDrawer}
          color="inherit"
          sx={{
            display: "none",
            "@media (max-width:1050px)": {
              display: "flex",
            },
            ml: 1,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={toggleDrawer}
        >
          <Box
            sx={{
              width: 280,
              height: "100%",
              // bgcolor: "#020617",
              bgcolor: "#1E293B",
              color: "#fff",
              p: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                onClick={toggleDrawer}
                sx={{ color: "#fff" }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <List>
              {navLinks.map((item) => (
                <ListItemButton key={item}>
                  <ListItemText primary={item} />
                </ListItemButton>
              ))}
            </List>

            <Divider
              sx={{
                my: 3,
                borderColor:
                  "rgba(255,255,255,.08)",
              }}
            />

            <Stack spacing={2}>
              <Button
                fullWidth
                variant="outlined"
                onClick={onLoginClick}
              >
                Login
              </Button>

              <Button
                fullWidth
                variant="contained"
                onClick={onSignupClick}
                sx={{
                  backgroundColor: "#10B981",
                }}
              >
                Get Started
              </Button>
            </Stack>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}