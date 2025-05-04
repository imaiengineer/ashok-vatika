import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = ({ onMenuClick }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#2e2e2e" }}>
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <IconButton
          edge="start"
          color="inherit"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { xs: "block", md: "none" } }} // Show only on mobile
        >
          <MenuIcon />
        </IconButton>

        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
            flexGrow: 1,
            minWidth: 0,
          }}
        >
          <Box
            component="img"
            src="/Assets/images/logo.png"
            alt="AshokVatika Logo"
            sx={{
              height: { xs: 50, sm: 70, md: 90 },
              mr: 2,
            }}
          />
          <Typography
            noWrap
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
              fontWeight: "bold",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            AshokVatika
          </Typography>
        </Box>

        {/* Nav Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {["/about", "/gallery", "/reviews", "/contact"].map((path, index) => (
            <Button
              key={path}
              color="inherit"
              component={Link}
              to={path}
              sx={{ textTransform: "none", fontSize: "1rem" }}
            >
              {["About", "Gallery", "Reviews", "Contact"][index]}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
