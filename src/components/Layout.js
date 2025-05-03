// components/Layout.js
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import ServicesFooter from "./ServicesFooter"; // Import the new footer

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar onMenuClick={handleDrawerToggle} />
      <Sidebar open={drawerOpen} onClose={handleDrawerToggle} />
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <ServicesFooter /> {/* Add this here */}
      <Footer />
    </Box>
  );
};

export default Layout;
