import React from "react";
import { Box, Container, Typography, Grid, Button, Card, CardContent } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const BASE = import.meta.env.BASE_URL || "/";

export default function AI() {
  return (
    <Box sx={{ pt: 8 }}>
      <Box
        sx={{
          py: 8,
          backgroundImage: `url(${BASE}cloud.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          textShadow: "0 2px 8px rgba(0,0,0,.5)",
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography variant="h3" component="h1" gutterBottom>
            AI Solutions
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 800, mx: "auto" }}>
            We help any company identify high-impact AI use cases. We also use AI to power our
            migrations and automation—reducing risk, accelerating timelines, and improving quality.
          </Typography>

          {/* RouterLink ensures the base path (/premierdatamigration/) is respected in prod */}
          <Button
            component={RouterLink}
            to="/contact?service=AD"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 3 }}
          >
            Talk to us about AI
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={2}>
          {[
            { title: "AI-assisted Migration", desc: "Schema mapping, field normalization, anomaly & error detection during cutovers." },
            { title: "Automation Copilots", desc: "Accelerate ETL, file processing, QA, and reporting to reduce manual effort." },
            { title: "Document Intelligence", desc: "Extract, classify, and route PDFs & forms at scale to shorten cycle times." },
            { title: "Legacy Modernization", desc: "Translate and clean legacy datasets for modern platforms with repeatable pipelines." },
            { title: "Ops Optimization", desc: "Forecast usage, detect anomalies, and optimize cloud costs with ML." },
          ].map((item, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            component={RouterLink}
            to="/contact?service=AD"
            variant="contained"
            color="primary"
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

