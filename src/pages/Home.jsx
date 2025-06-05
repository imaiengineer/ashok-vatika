import React from "react";
import { Container, Typography, Button, Box, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import ServicesFooter from "../components/ServicesFooter";
>>>>>>> 4bb602c (change the order)

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: "url('/Assets/images/GardenBackGround.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: { xs: "50vh", sm: "60vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          px: 2,
          py: { xs: 4, sm: 6 },
          backgroundColor: "rgba(0,0,0,0.4)",
          backgroundBlendMode: "darken",
        }}
      >
        <Box sx={{ maxWidth: "90%" }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
          >
            Welcome to AshokVatika 🌿
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
          >
<<<<<<< HEAD
            Where greenery meets serenity. Discover our premium nursery plantation.
=======
            Where greenery meets serenity. Discover our premium nursery
            plantation.
>>>>>>> 4bb602c (change the order)
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
      <Container sx={{ py: { xs: 4, sm: 6 } }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
        >
          About Us
        </Typography>
<<<<<<< HEAD
        <Typography variant="body1" paragraph sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}>
          AshokVatika is a trusted nursery plantation firm dedicated to bringing lush greenery
          to homes, offices, and landscapes. With a wide variety of indoor and outdoor plants,
          personalized care guidance, and years of experience, we help you grow your green space.
=======
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          AshokVatika is a trusted nursery plantation firm dedicated to bringing
          lush greenery to homes, offices, and landscapes. With a wide variety
          of indoor and outdoor plants, personalized care guidance, and years of
          experience, we help you grow your green space.
>>>>>>> 4bb602c (change the order)
        </Typography>
        <Button variant="outlined" component={Link} to="/about" sx={{ mt: 2 }}>
          Learn More
        </Button>
      </Container>

<<<<<<< HEAD
=======
      <ServicesFooter />

>>>>>>> 4bb602c (change the order)
      {/* Owner's Details Section */}
      <Container sx={{ py: { xs: 4, sm: 6 } }}>
        <Typography variant="h5" gutterBottom>
          Company Details
        </Typography>

        <Paper sx={{ padding: { xs: 2, sm: 3 } }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
<<<<<<< HEAD
              <Typography variant="body1">AshokVatika Green Services</Typography>
=======
              <Typography variant="body1">
                AshokVatika Green Services
              </Typography>
>>>>>>> 4bb602c (change the order)
              <Typography variant="body1">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:ashokvatika.green.services@gmail.com"
<<<<<<< HEAD
                  style={{ color: "#1976d2", textDecoration: "none", wordBreak: "break-word" }}
=======
                  style={{
                    color: "#1976d2",
                    textDecoration: "none",
                    wordBreak: "break-word",
                  }}
>>>>>>> 4bb602c (change the order)
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
<<<<<<< HEAD
                AshokVatika Green Services, AshaKhera, Nawabganj, Unnao, 209859, Uttar Pradesh, India
=======
                AshokVatika Green Services, AshaKhera, Nawabganj, Unnao, 209859,
                Uttar Pradesh, India
>>>>>>> 4bb602c (change the order)
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;
