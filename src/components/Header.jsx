// src/components/Header.jsx
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      elevation={2}
      sx={{
        backgroundColor: "white", // Set header background to white
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional: subtle shadow
        padding: "10px 0",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo and Branding (Now Clickable) */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <RouterLink to="/" style={{ textDecoration: "none" }}>
            <img
              src="/SeismicLogo3.png" // Ensure the image is in the public folder
              alt="Seismic Logo"
              style={{ height: "60px", width: "auto", maxWidth: "200px", marginRight: "15px", cursor: "pointer" }} // Added cursor pointer
            />
          </RouterLink>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", color: "#000000" }} // Changed text color for contrast
          >
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box>
          <Button color="inherit" component={RouterLink} to="/" sx={{ color: "#000000", fontSize: "1rem" }}>
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/about" sx={{ color: "#000000", fontSize: "1rem" }}>
            About Us
          </Button>
          <Button color="inherit" component={RouterLink} to="/services" sx={{ color: "#000000", fontSize: "1rem" }}>
            Services
          </Button>
          <Button color="inherit" component={RouterLink} to="/contact" sx={{ color: "#000000", fontSize: "1rem" }}>
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;