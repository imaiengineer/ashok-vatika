import React from "react";
import { Container, Typography, Button, Box, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: "url('/Assets/images/GardenBackGround.jpg')", // 👈 Updated image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          p: 4,
          backgroundColor: "rgba(0,0,0,0.4)",
          backgroundBlendMode: "darken",
        }}
      >
        <Box>
          <Typography variant="h3" gutterBottom>
            Welcome to AshokVatika 🌿
          </Typography>
          <Typography variant="h6" gutterBottom>
            Where greenery meets serenity. Discover our premium nursery plantation.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/gallery"
            sx={{ mt: 2, backgroundColor: "#66bb6a" }}
          >
            Explore Gallery
          </Button>
        </Box>
      </Box>

      {/* About Summary */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          AshokVatika is a trusted nursery plantation firm dedicated to bringing lush greenery
          to homes, offices, and landscapes. With a wide variety of indoor and outdoor plants,
          personalized care guidance, and years of experience, we help you grow your green space.
        </Typography>
        <Button variant="outlined" component={Link} to="/about" sx={{ mt: 2 }}>
          Learn More
        </Button>
      </Container>

      {/* Owner's Details Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h5" gutterBottom>
          Company Details
        </Typography>

        <Paper sx={{ padding: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                AshokVatika Green Services
              </Typography>
              <Typography variant="body1">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:ashok.kumar@ashokvatika.com"
                  style={{ color: "#1976d2", textDecoration: "none" }}
                >
                  ashokvatika.green.services@gmail.com
                </a>
              </Typography>
              <Typography variant="body1">
                <strong>Contact:</strong>{" "}
                <a
                  href="https://wa.me/8887684066"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#25D366", textDecoration: "none" }}
                >
                  +91 8887684066
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1">
                <strong>Company Address:</strong>
              </Typography>
              <Typography variant="body1">
                AshokVatika Green Services, AshaKhera, Nawabganj, Unnao, 209859, Uttar Pradesh, India
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;
