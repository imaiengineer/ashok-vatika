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
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            textAlign: "center",
            fontWeight: "bold",
            color: "#66bb6a",
          }}
        >
          Our Services
        </Typography>

        {services.map((row, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
              gap: 2,
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
                  width: { xs: "90%", sm: "30%" },
                  boxShadow: 2,
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "#66bb6a",
                    cursor: "pointer",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {service}
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
