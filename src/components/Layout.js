// components/Layout.js
import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Check if current route is home
  const isHomePage = location.pathname === "/";

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar onMenuClick={handleDrawerToggle} />
      <Sidebar open={drawerOpen} onClose={handleDrawerToggle} />

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {isHomePage ? (
          // Full-width Hero Page
          <Outlet />
        ) : (
          // Other pages inside a responsive container
          <Container maxWidth="lg" sx={{ py: { xs: 2, md: 4 } }}>
            <Outlet />
          </Container>
        )}
      </Box>

      {/* Footers */}
      <Footer />
    </Box>
  );
};

export default Layout;
