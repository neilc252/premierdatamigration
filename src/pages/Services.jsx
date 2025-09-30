import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
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

// --- asset helper so images work in dev (/) and prod (/premierdatamigration/)
const BASE = import.meta.env.BASE_URL || "/";
const asset = (p) => `${BASE}${String(p).replace(/^\/+/, "")}`;

// --- Styled blocks
const HeroSection = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "50vh",
  backgroundImage: `url(${asset("OilRig.jpg")})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#FFFFFF",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  [theme.breakpoints.down("sm")]: { height: "30vh" },
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
  maxWidth: 360,
  "&:hover": { transform: "translateY(-8px)" },
});

export default function Services() {
  const carouselRef = useRef(null);
  const [expanded, setExpanded] = useState(null);

  // --- Data
  const combinedServices = [
    { title: "Tape Cataloging & Organization", description: "Detailed inventory and organization of all tapes to be migrated.", image: asset("SortingMigration.jpg") },
    { title: "Tape to Cloud Migration", description: "Migration to AWS, GCP, and Azure with secure data transfer.", image: asset("CloudSolution.jpg") },
    { title: "Tape to On-Prem Migration", description: "Secure and efficient movement to customer-owned storage.", image: asset("OnPremise.jpg") },
    { title: "Media Independence", description: "Support for 3590/3592, LTO1–LTO9, HDDs, USB, optical media.", image: asset("DataError.jpg") },
    { title: "Tape Cleanup & Disposal", description: "Secure retention and disposal; validation and fail-back options.", image: asset("CloudSolution.jpg") },
  ];

  const nonTapeMigrations = [
    { title: "On-Premises Data Migration", description: "Servers, NAS, and SAN to cloud or other on-prem targets.", image: asset("OnPremise.jpg") },
    { title: "Cloud-Based Solutions", description: "Right-tier storage: Glacier for archive, S3 for frequent access.", image: asset("CloudSolution.jpg") },
    { title: "Customer Cloud Environments", description: "We migrate to your cloud with your credentials and controls.", image: asset("CloudSolution.jpg") },
  ];

  const aiAutomation = [
    {
      title: "AI Solutions",
      description:
        "Apply AI to accelerate migrations, automate processes, and uncover insights. Schema mapping, validation, and document intelligence.",
      image: asset("CloudSolution.jpg"),
      link: "/ai",
    },
    {
      title: "Automation Copilots",
      description:
        "Speed up ETL, file processing, QA, and reporting. Reduce manual effort and increase reliability.",
      image: asset("DataError.jpg"),
      link: "/ai",
    },
    {
      title: "Document Intelligence",
      description: "Extract, classify, and route PDFs/forms at scale to cut cycle times.",
      image: asset("OnPremise.jpg"),
      link: "/ai",
    },
  ];

  const benefits = [
    { key: "Reduced Costs", value: "Lower operational costs associated with legacy media and storage." },
    { key: "Improved Agility", value: "Flexibility and scale with cloud-native architectures." },
    { key: "Enhanced Security", value: "Robust controls and encryption for sensitive data." },
    { key: "Increased Efficiency", value: "Streamlined access and faster retrieval times." },
    { key: "Modernization", value: "Future-ready foundations for analytics and AI." },
  ];

  // --- Handlers
  const handleScroll = (dir) => {
    if (!carouselRef.current) return;
    const amt = 350;
    carouselRef.current.scrollLeft += dir === "left" ? -amt : amt;
  };

  const handleAccordionChange = (panel) => (_e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // --- Render
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
            Comprehensive Solutions for Seismic & Enterprise Data
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary">
            Explore our tape and non-tape migration services. Modernize data storage and improve operational efficiency.
          </Typography>
          <Divider sx={{ my: 4 }} />
        </ContentSection>

        {/* Tape Migrations */}
        <ContentSection>
          <Typography variant="h4" gutterBottom>
            Tape Migrations
          </Typography>
          <CarouselWrapper>
            <IconButton onClick={() => handleScroll("left")}>
              <ArrowBackIosIcon />
            </IconButton>
            <CarouselContainer ref={carouselRef}>
              {combinedServices.map((service, i) => (
                <CarouselItem key={i}>
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

        {/* Non-Tape Migrations */}
        <ContentSection>
          <Typography variant="h4" gutterBottom>
            Non-Tape Migrations
          </Typography>
          <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} maxWidth="1200px" mx="auto">
            {nonTapeMigrations.map((m, i) => (
              <GridItem key={i}>
                <CardMedia component="img" height="160" image={m.image} alt={m.title} />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {m.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {m.description}
                  </Typography>
                </CardContent>
              </GridItem>
            ))}
          </Box>
        </ContentSection>

        {/* AI & Automation */}
        <ContentSection>
          <Typography variant="h4" gutterBottom>
            AI & Automation
          </Typography>
          <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} maxWidth="1200px" mx="auto">
            {aiAutomation.map((item, i) => (
              <GridItem key={i}>
                <a href={item.link} style={{ textDecoration: "none", color: "inherit" }}>
                  <CardMedia component="img" height="160" image={item.image} alt={item.title} />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }} color="primary">
                      Learn more →
                    </Typography>
                  </CardContent>
                </a>
              </GridItem>
            ))}
          </Box>
        </ContentSection>

        {/* Key Benefits */}
        <ContentSection>
          <Typography variant="h4" gutterBottom>
            Key Benefits
          </Typography>
          {benefits.map((b, i) => (
            <Accordion
              key={i}
              expanded={expanded === i}
              onChange={handleAccordionChange(i)}
              sx={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", mb: 2 }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{b.key}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  {b.value}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </ContentSection>
      </Container>
    </Box>
  );
}
