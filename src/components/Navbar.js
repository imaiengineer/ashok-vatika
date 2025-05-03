// components/Navbar.js
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
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
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
          }}
        >
          <Box
            component="img"
            src="/Assets/images/logo.png"
            alt="AshokVatika Logo"
            sx={{ height: 110, mr: 2 ,border: "2px solid red"}}
          />
          <Typography noWrap sx={{ fontSize: "2rem", fontWeight: "bold" }}>
            AshokVatika
          </Typography>
        </Box>

        {/* Nav Links */}
        {["/about", "/gallery", "/reviews", "/contact"].map((path, index) => (
          <Button
            key={path}
            color="inherit"
            component={Link}
            to={path}
            sx={{ textTransform: "none" }}
          >
            {["About", "Gallery", "Reviews", "Contact"][index]}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
