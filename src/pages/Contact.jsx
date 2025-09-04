import React from "react";
import { Box, Container, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { FiMail } from "react-icons/fi";

// Hero Section Styling
const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "50vh",
  backgroundImage: "url(/contacts.jpg)", // Ensure this image exists in the public folder
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#FFFFFF",
  textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
  [theme.breakpoints.down("sm")]: {
    height: "30vh",
  },
}));

const ContactUsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Typography variant="h2" component="h1">
          Contact Us
        </Typography>
      </HeroSection>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ py: 8, minHeight: "50vh", textAlign: "center" }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          We'd love to hear from you! Click the button below to send us an email.
        </Typography>

        {/* Email Button */}
        <Button
          variant="contained"
          size="large"
          sx={{
            mt: 2,
            px: 4,
            py: 1.5,
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            "&:hover": {
              background: "linear-gradient(45deg, #1976D2 30%, #00BCD4 90%)",
            },
          }}
          startIcon={<FiMail />}
          href="mailto:info@seismicshift.net" // Click to open email
        >
          Send an Email
        </Button>
      </Container>
    </Box>
  );
};

export default ContactUsPage;