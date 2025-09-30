import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Divider,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";
import ShieldIcon from "@mui/icons-material/Shield";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LockIcon from "@mui/icons-material/Lock";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

// Use BASE so background/hero images work in dev (/) and prod (/premierdatamigration/)
const BASE = import.meta.env.BASE_URL || "/";
const asset = (p) => `${BASE}${String(p).replace(/^\/+/, "")}`;

// Hero matches the site’s hero feel (centered, gradient overlay, large title)
const Hero = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "38vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#fff",
  backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${asset(
    "OilRig.jpg"
  )})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: theme.spacing(6, 2),
}));

// Site-style “card”: rounded corners, soft shadow, comfy padding
const Card = styled(Paper)(({ theme }) => ({
  borderRadius: 14,
  padding: theme.spacing(3),
  boxShadow: "0 8px 30px rgba(0,0,0,.08)",
}));

// Consistent section title + divider spacing
const SectionTitle = ({ children }) => (
  <>
    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
      {children}
    </Typography>
    <Divider sx={{ mb: 2 }} />
  </>
);

export default function About() {
  return (
    <Box sx={{ bgcolor: "#f7fafc" }}>
      {/* HERO */}
      <Hero>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" sx={{ fontWeight: 800, mb: 1 }}>
            About Us
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95 }}>
            Modernizing, migrating, and managing data with integrity and innovation.
          </Typography>
        </Container>
      </Hero>

      {/* CONTENT */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card>
              <SectionTitle>Who We Are</SectionTitle>
              <Typography color="text.secondary">
                Premier Data Migration is a specialized data solutions company helping
                businesses modernize, migrate, and manage their data. With over 25 years of
                experience across industries like oil &amp; gas, healthcare, and banking,
                we deliver expert data migrations and automation using tools like Ansible
                Automation Platform or AWX. We’re a team driven by values of Integrity,
                Excellence, Customer Focus, Security, and Innovation—committed to making
                data more accessible, secure, and efficient.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <SectionTitle>Our Mission</SectionTitle>
              <Typography color="text.secondary">
                At Premier Data Migration, our mission is to transform the way organizations
                manage and move their data. We specialize in migrating data from all formats,
                including legacy storage systems such as tapes and hard drives, to secure,
                modern cloud or on-premises environments. Through cutting-edge automation and
                a relentless focus on efficiency, we help clients unlock the full potential of
                their data infrastructure.
              </Typography>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <SectionTitle>Our Vision</SectionTitle>
              <Typography color="text.secondary">
                Our vision is to lead the future of data migration and automation by making data
                more accessible, secure, and manageable. We aim to become the trusted partner for
                organizations seeking seamless, future-ready storage and automation solutions—
                driving innovation and operational excellence across every industry.
              </Typography>
            </Card>
          </Grid>

          {/* CORE VALUES (bottom of page) */}
          <Grid item xs={12}>
            <Card>
              <SectionTitle>Core Values</SectionTitle>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <ShieldIcon sx={{ fontSize: 32, color: "primary.main", mt: "2px" }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        Integrity
                      </Typography>
                      <Typography color="text.secondary">
                        We uphold honesty, transparency, and trust in every engagement.
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <StarBorderIcon sx={{ fontSize: 32, color: "primary.main", mt: "2px" }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        Excellence
                      </Typography>
                      <Typography color="text.secondary">
                        We strive for quality and continuous improvement in everything we do.
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <HandshakeIcon sx={{ fontSize: 32, color: "primary.main", mt: "2px" }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        Customer Focus
                      </Typography>
                      <Typography color="text.secondary">
                        Our clients’ goals guide our solutions — we put their success first.
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <LockIcon sx={{ fontSize: 32, color: "primary.main", mt: "2px" }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        Security
                      </Typography>
                      <Typography color="text.secondary">
                        We safeguard data with rigorous practices and technologies.
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <AutoAwesomeIcon sx={{ fontSize: 32, color: "primary.main", mt: "2px" }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        Innovation
                      </Typography>
                      <Typography color="text.secondary">
                        We leverage the latest tools — including AI and automation — to deliver
                        forward-looking solutions.
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
