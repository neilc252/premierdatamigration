import React from "react";
import { Box, Typography, Grid, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom"; // Import React Router Link

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333", // Dark background
        color: "#FFFFFF", // White text
        py: 4, // Vertical padding
        px: 2, // Horizontal padding
        mt: 8, // Margin at the top
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* About Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            We specialize in transforming seismic data management systems with innovative and secure solutions.
          </Typography>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box>
            <Link to="/" style={linkStyle} className="footer-link">
              Home
            </Link>
            <Link to="/about" style={linkStyle} className="footer-link">
              About Us
            </Link>
            <Link to="/services" style={linkStyle} className="footer-link">
              Services
            </Link>
            <Link to="/contact" style={linkStyle} className="footer-link">
              Contact Us
            </Link>
          </Box>
        </Grid>

        {/* Contact Info Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body2">
            Email:{" "}
            <MuiLink
              href="mailto:Info@seismicshift.net"
              color="inherit"
              underline="hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Info@seismicshift.net
            </MuiLink>
          </Typography>
          <Typography variant="body2">Phone: +1 (832)-458-1208</Typography>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Seismic Shift. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

// Custom styles for React Router Links
const linkStyle = {
  display: "block",
  color: "inherit",
  textDecoration: "none",
  marginBottom: "8px",
  transition: "color 0.3s ease",
  position: "relative",
};

export default Footer;
