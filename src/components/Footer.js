import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2e7d32",
        color: "white",
        px: { xs: 2, sm: 4 },  // horizontal padding adjusts with screen size
        py: { xs: 1.5, sm: 2 }, // vertical padding adjusts too
        mt: 4,
        textAlign: "center",
      }}
    >
      <Typography
        variant="body2"
        sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem" } }} // text scales on smaller screens
      >
        © 2025 AshokVatika. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
