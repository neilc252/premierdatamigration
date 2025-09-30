import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom textAlign="center">
            About Us
          </Typography>
          <Typography variant="body1" textAlign="center" paragraph>
            At Seismic Shift, we specialize in transforming legacy seismic data storage systems into secure,
            scalable, and efficient solutions. With over 25 years of experience in the oil and gas industry, we’re
            committed to helping organizations modernize their infrastructure.
          </Typography>
          <Box textAlign="center" mt={3}>
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/about"
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                borderRadius: 2,
                padding: '0.5rem 1.5rem',
              }}
            >
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom textAlign="center">
            Our Services
          </Typography>
          <Typography variant="body1" textAlign="center" paragraph>
            From tape migrations to cloud-based solutions, we offer a wide range of services to help you manage
            seismic data efficiently and securely.
          </Typography>

          {/* Service Highlights */}
          <Grid container spacing={4} justifyContent="center" mt={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom textAlign="center">
                Tape Migrations
              </Typography>
              <Typography variant="body2" textAlign="center">
                Detailed inventory, cataloging, and migration to modern storage solutions.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom textAlign="center">
                Cloud Solutions
              </Typography>
              <Typography variant="body2" textAlign="center">
                Secure and scalable cloud-based storage tailored to your needs.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" gutterBottom textAlign="center">
                Data Cleanup
              </Typography>
              <Typography variant="body2" textAlign="center">
                Ensure data quality with secure validation and disposal services.
              </Typography>
            </Grid>
          </Grid>

          <Box textAlign="center" mt={4}>
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/services"
              sx={{
                textTransform: 'none',
                fontWeight: 'bold',
                borderRadius: 2,
                padding: '0.5rem 1.5rem',
              }}
            >
              Explore Services
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
