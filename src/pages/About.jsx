import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { styled } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "50vh",
  backgroundImage: "url(/datacenter.jpg)", // Ensure the image is placed in the public folder
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

const ContentSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
}));

const SectionPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)", // Match Services accordion shadow
  borderRadius: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const coreValues = [
    {
      title: "Integrity",
      description: "Transparency, trust, and accountability in everything we do.",
    },
    {
      title: "Excellence",
      description: "Rigorous data validation and seamless project execution.",
    },
    {
      title: "Customer Focus",
      description: "Tailored solutions that empower organizations to meet their goals confidently.",
    },
    {
      title: "Security",
      description: "Advanced protocols to safeguard sensitive data.",
    },
    {
      title: "Innovation",
      description: "Leveraging cutting-edge technology to modernize seismic data storage.",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Typography variant="h2" component="h1">
          About Us
        </Typography>
      </HeroSection>

      {/* Content Sections */}
      <Container maxWidth="md">
        <ContentSection>
          <Grid container spacing={4}>
            {/* Who We Are */}
            <Grid item xs={12}>
              <SectionPaper elevation={0}>
                <Typography variant="h4" gutterBottom>
                  Who We Are
                </Typography>
                <Typography variant="body1" paragraph>
                  At Seismic Shift, we specialize in transforming legacy seismic data storage systems into secure,
                  scalable, and efficient solutions. With over 25 years of experience in the oil and gas industry,
                  we’re committed to helping organizations streamline their data workflows and modernize their
                  infrastructure.
                </Typography>
              </SectionPaper>
            </Grid>

            {/* Our Mission */}
            <Grid item xs={12}>
              <SectionPaper elevation={0}>
                <Typography variant="h4" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1" paragraph>
                  We’re dedicated to revolutionizing seismic data management by converting outdated storage mediums—
                  ranging from hard disks to optical tapes—into secure, scalable cloud-based, or on-prem solutions.
                  Through innovation, security, and customer focus, we empower clients to unlock the full potential
                  of their geological data, driving smarter, more sustainable energy solutions.
                </Typography>
              </SectionPaper>
            </Grid>

            {/* Our Vision */}
            <Grid item xs={12}>
              <SectionPaper elevation={0}>
                <Typography variant="h4" gutterBottom>
                  Our Vision
                </Typography>
                <Typography variant="body1" paragraph>
                  To lead the industry in seismic data accessibility by enabling organizations to seamlessly
                  transition to modern, secure, and efficient storage solutions. Our goal is to ensure long-term
                  innovation, reliability, and operational excellence in a data-driven world.
                </Typography>
              </SectionPaper>
            </Grid>

            {/* Our Core Values */}
            <Grid item xs={12}>
              <SectionPaper elevation={0}>
                <Typography variant="h4" gutterBottom>
                  Our Core Values
                </Typography>
                {coreValues.map((value, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === index}
                    onChange={handleAccordionChange(index)}
                    sx={{
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)", // Match Services accordion shadow
                      borderRadius: 1,
                      mb: 2,
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h6">{value.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2">{value.description}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </SectionPaper>
            </Grid>
          </Grid>
        </ContentSection>
      </Container>
    </Box>
  );
};

export default About;
