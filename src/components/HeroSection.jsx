// src/components/HeroSection.jsx
import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const BASE = import.meta.env.BASE_URL || "/";

export default function HeroSection() {
  return (
    <Box sx={{ position: "relative", height: { xs: "60vh", md: "80vh" }, overflow: "hidden" }}>
      {/* Background video */}
      <video
        src={`${BASE}rigs.mp4`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          minWidth: "100%",
          minHeight: "100%",
          transform: "translate(-50%, -50%)",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Darker overlay (stronger than before) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          // slightly darker at the top, easing to 45% at bottom
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.45) 100%)",
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          px: 2,
          pt: 8, // keeps content out from under the header
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
            Premier Data Migration
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95, maxWidth: 900, mx: "auto", mb: 3 }}>
            Modernizing, migrating, and managing data — powered by automation and AI.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button
              component={RouterLink}
              to="/services"
              variant="contained"
              color="primary"
              size="large"
            >
              Explore Services
            </Button>
            <Button
              component={RouterLink}
              to="/contact?service=AD"
              variant="outlined"
              color="inherit"
              size="large"
            >
              Talk to us about AI
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
