// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const BASE = import.meta.env.BASE_URL || "/";
// If your file is named differently, change it below (e.g., "PremierLogo3.png")
const LOGO_FILE = "SeismicLogo3.png";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const bgColor = isHome && !scrolled ? "transparent" : "primary.main";
  const elevation = isHome && !scrolled ? 0 : 4;

  return (
    <AppBar
      position="fixed"
      elevation={elevation}
      sx={{
        backgroundColor: bgColor,
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        color: "#fff",
      }}
    >
      <Toolbar>
        {/* Logo + Brand */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <RouterLink to="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
            <img
              src={`${BASE}${LOGO_FILE}`}
              alt="Premier Data Migration"
              style={{
                height: 48,
                width: "auto",
                marginRight: 12,
                // subtle glow so it’s readable on bright video frames
                filter: "drop-shadow(0 0 6px rgba(0,0,0,0.6))",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
                display: { xs: "none", sm: "inline-block" }, // hide text on very small screens
              }}
            >
              Premier Data Migration
            </Typography>
          </RouterLink>
        </Box>

        {/* Nav */}
        <Box>
          <Button component={RouterLink} to="/about" color="inherit">About</Button>
          <Button component={RouterLink} to="/services" color="inherit">Services</Button>
          <Button component={RouterLink} to="/ai" color="inherit">AI</Button>
          <Button component={RouterLink} to="/contact" color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
