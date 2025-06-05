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
          height: "100%",
        },
      }}
    >
      <Box sx={{ p: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
        >
          Our Services
        </Typography>
        <List>
          {services.map((service, index) => (
            <ListItem button key={index} sx={{ py: 1.5 }}>
              <ListItemText
                primary={service}
                primaryTypographyProps={{
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
