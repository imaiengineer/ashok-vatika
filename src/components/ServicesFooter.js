// components/ServicesFooter.js
import React from "react";
import { Box, Typography, Container } from "@mui/material";

const ServicesFooter = () => {
  const services = [
    ["Maintenance", "Gardening", "Supply"],
    ["Horticulture", "Landscaping", "Lawncare"]
  ];

  return (
    <Box sx={{ backgroundColor: "#2e2e2e", color: "white", py: 6 }}>
      <Container>
        {/* Center-aligned title */}
        <Typography variant="h5" sx={{ mb: 4, textAlign: "center", fontWeight: "bold", color: "#66bb6a" }}>
          Our Services
        </Typography>

        {/* Flex container to hold rows */}
        {services.map((row, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center", // Center the row
              mb: 3, // space between rows
            }}
          >
            {row.map((service, idx) => (
              <Box
                key={idx}
                sx={{
                  backgroundColor: "#3e3e3e",
                  p: 3,
                  borderRadius: 2,
                  textAlign: "center",
                  width: "30%",
                  mx: 2, // added margin for spacing
                  boxShadow: 2, // shadow for depth
                  "&:hover": {
                    backgroundColor: "#66bb6a",
                    cursor: "pointer",
                    transform: "scale(1.05)", // subtle scale effect
                    transition: "0.3s",
                  },
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {service}
                  <sub style={{ fontSize: "0.8em", verticalAlign: "sub" }}>
                    {/* Optional: You can add a small annotation or description in subscript */}
                    {" "}
                  </sub>
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default ServicesFooter;
