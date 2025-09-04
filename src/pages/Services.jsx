import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  Divider,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "50vh",
  backgroundImage: "url(/OilRig.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#FFFFFF",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  [theme.breakpoints.down("sm")]: {
    height: "30vh",
  },
}));

const ContentSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
}));

const CarouselWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
});

const CarouselContainer = styled(Box)({
  display: "flex",
  overflowX: "auto",
  scrollBehavior: "smooth",
  width: "100%",
  maxWidth: "900px",
});

const CarouselItem = styled(Card)({
  minWidth: "300px",
  maxWidth: "300px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease",
  margin: "0 10px",
  "&:hover": { transform: "translateY(-8px)" },
});

const GridItem = styled(Card)({
  flex: "0 0 calc(33.33% - 20px)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease",
  margin: "0 10px",
  "&:hover": { transform: "translateY(-8px)" },
});

const Services = () => {
  const carouselRef = useRef(null);
  const [expanded, setExpanded] = useState(null);

  const combinedServices = [
    { title: "Tape Cataloging & Organization", description: "Detailed inventory and organization of all tapes to be migrated.", image: "/SortingMigration.jpg" },
    { title: "Tape to Cloud Migration", description: "Migration to major cloud providers like AWS, GCP, and Azure, with secure data transfer.", image: "/cloud.jpg" },
    { title: "Tape to On-Prem Migration", description: "Secure and efficient data movement to customer-owned on-premises storage.", image: "/secureData.jpg" },
    { title: "Media Independence", description: "Support for a wide range of media types: 3590, 3592, LTO1–LTO9, hard disks, USB drives, optical media.", image: "/alltypesMedia.jpg" },
    { title: "Tape Cleanup & Disposal", description: "Secure tape storage and disposal services (e.g., shredding, destruction). Data validation and fail-back options with tape retention.", image: "/cloud-cleanup.jpg" },
  ];

  const nonTapeMigrations = [
    { title: "On-Premises Data Migration", description: "Seamless migration from servers, NAS, and SAN to cloud or other on-premises storage.", image: "/OnPremise.jpg" },
    { title: "Cloud-Based Solutions", description: "Secure storage tiers like Glacier for infrequent access and S3 for frequent access.", image: "/cloud_based.jpg" },
    { title: "Customer Cloud Environments", description: "Migration to customer-managed cloud environments with provided credentials.", image: "/customerCloud.jpg" },
  ];

  const benefits = [
    { key: "Reduced Costs", value: "Lower operational costs associated with tape storage and management." },
    { key: "Improved Agility", value: "Increased flexibility and scalability with cloud-based data storage." },
    { key: "Enhanced Security", value: "Robust cloud security features to safeguard sensitive data." },
    { key: "Increased Efficiency", value: "Streamlined access and faster retrieval times for seismic data." },
    { key: "Modernization", value: "Transition to a cutting-edge data storage infrastructure that supports future business growth." },
  ];

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 350; // Adjusted scroll distance
      carouselRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <HeroSection>
        <Typography variant="h2" component="h1">
          Our Services
        </Typography>
      </HeroSection>

      <Container maxWidth="lg">
        <ContentSection>
          <Typography variant="h4" align="center" gutterBottom>
            Comprehensive Solutions for Seismic Data Management
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary">
            Explore our range of tape and non-tape migration services tailored to your business needs. Modernize your data storage and improve operational efficiency.
          </Typography>
          <Divider sx={{ my: 4 }} />
        </ContentSection>

        {/* Tape Migrations Section with Arrows */}
        <ContentSection>
          <Typography variant="h4" gutterBottom>
            Tape Migrations
          </Typography>
          <CarouselWrapper>
            <IconButton onClick={() => handleScroll("left")}>
              <ArrowBackIosIcon />
            </IconButton>
            <CarouselContainer ref={carouselRef}>
              {combinedServices.map((service, index) => (
                <CarouselItem key={index}>
                  <CardMedia component="img" height="160" image={service.image} alt={service.title} />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </CarouselItem>
              ))}
            </CarouselContainer>
            <IconButton onClick={() => handleScroll("right")}>
              <ArrowForwardIosIcon />
            </IconButton>
          </CarouselWrapper>
        </ContentSection>

        {/* Non-Tape Migrations (Static Grid) */}
        <ContentSection>
          <Typography variant="h4" gutterBottom>
            Non-Tape Migrations
          </Typography>
          <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} maxWidth="1200px" mx="auto">
            {nonTapeMigrations.map((migration, index) => (
              <GridItem key={index}>
                <CardMedia component="img" height="160" image={migration.image} alt={migration.title} />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {migration.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {migration.description}
                  </Typography>
                </CardContent>
              </GridItem>
            ))}
          </Box>
        </ContentSection>

        {/* Key Benefits with Collapsible Sections */}
        <ContentSection>
          <Typography variant="h4" gutterBottom>
            Key Benefits
          </Typography>
          {benefits.map((benefit, index) => (
            <Accordion key={index} expanded={expanded === index} onChange={handleAccordionChange(index)} sx={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{benefit.key}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  {benefit.value}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </ContentSection>
      </Container>
    </Box>
  );
};

export default Services;
