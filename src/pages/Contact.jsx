import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import { styled } from "@mui/system";

// FormSubmit settings (mirror your contact.html)
const FORM_ACTION = "https://formsubmit.co/info@seismicshift.net";
const SUBJECT = "New inquiry from premierdatamigration.com";
const NEXT_URL = "https://premierdatamigration.com/thank-you.html";

// Nice card styling
const Card = styled(Paper)(({ theme }) => ({
  borderRadius: 14,
  padding: theme.spacing(3),
  boxShadow: "0 8px 30px rgba(0,0,0,.08)",
}));

// Dropdown options (includes Web Scraping + AI)
const SERVICE_OPTIONS = [
  "Data Migration & Modernization",
  "IT Automation & DevOps",
  "Cloud & Systems Consulting",
  "Custom Development & Tooling",
  "Web Scraping",
  "AI",
  "Other",
];

export default function Contact() {
  const [service, setService] = useState("");

  // Preselect service from URL (e.g., /contact?service=AI)
	
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get("service");
  if (!raw) return;

  const preset = raw.trim().toLowerCase();

  // aliases so ?service=AD picks AI
  const aliasMap = {
    ad: "AI",
    ai: "AI",
    "web scraping": "Web Scraping",
  };

  const desired = aliasMap[preset] ?? SERVICE_OPTIONS.find(
    (s) => s.toLowerCase() === preset
  );

  if (desired) setService(desired);
}, []);

  return (
    <Box sx={{ bgcolor: "#f7fafc", minHeight: "100vh", py: { xs: 4, md: 8 } }}>
      <Container maxWidth="md">
        <Card>
          <Typography component="h1" variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
            Contact Us
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            Fill out the form below and we’ll get back to you.
          </Typography>

          {/* Plain HTML form so FormSubmit gets the exact fields */}
          <Box component="form" action={FORM_ACTION} method="POST" noValidate sx={{ mt: 1 }}>
            {/* Hidden controls (match contact.html behavior) */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value={SUBJECT} />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={NEXT_URL} />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Your Name"
                  name="name"
                  required
                  fullWidth
                  placeholder="Your Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  required
                  fullWidth
                  placeholder="you@example.com"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone (optional)"
                  name="phone"
                  type="tel"
                  fullWidth
                  placeholder="Phone (optional)"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Company (optional)"
                  name="company"
                  fullWidth
                  placeholder="Company (optional)"
                />
              </Grid>

              {/* Service dropdown */}
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  required
                  fullWidth
                  label="Service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  helperText="Choose what you need help with"
                >
                  <MenuItem value="">Select a service</MenuItem>
                  {SERVICE_OPTIONS.map((s) => (
                    <MenuItem key={s} value={s}>
                      {s}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* If Other, let them specify */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="If Other, describe (optional)"
                  name="other_service"
                  fullWidth
                  placeholder="Briefly describe your request"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Notes / What do you need?"
                  name="message"
                  required
                  fullWidth
                  multiline
                  minRows={6}
                  placeholder="Tell us about your project, timelines, constraints, etc."
                />
              </Grid>

              <Grid item xs={12}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      px: 3,
                      py: 1.5,
                      fontWeight: 700,
                      textTransform: "none",
                      backgroundColor: "#1976d2",
                      "&:hover": { backgroundColor: "#1565c0" },
                    }}
                  >
                    Send Message
                  </Button>
                  <Typography variant="body2" color="text.secondary">
                    Prefer email?{" "}
                    <a href="mailto:info@seismicshift.net">info@seismicshift.net</a>
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
