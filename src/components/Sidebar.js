// components/Sidebar.js
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

const drawerWidth = 240;

const Sidebar = ({ open, onClose }) => {
  const services = [
    "Garden Maintenance",
    "Door to Door Gardener Services",
    "Plants and Grass Supply",
    "Horticulture Development",
    "Landscape Designing"
  ];

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Our Services
        </Typography>
        <List>
          {services.map((service, index) => (
            <ListItem button key={index}>
              <ListItemText primary={service} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
