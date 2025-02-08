import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import DropdownMenu from "./DropdownMenu";
import { fetchGoogleSheetsData } from "../api/fetchData";

const menuItems = [
  { label: "About Us", key: "AboutUs" },
  { label: "Services", key: "Services" },
  { label: "Why Choose Us?", key: "WhyChooseUs" },
  { label: "How It Works", key: "HowItWorks" },
  { label: "Contact Us", key: "ContactUs" },
];

const Navbar = () => {
  const [data, setData] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [hoveredKey, setHoveredKey] = useState(null);

  useEffect(() => {
    fetchGoogleSheetsData().then((result) => {
      console.log("Fetched Data:", result); // Debugging
      setData(result);
    });
  }, []);

  const handleMouseEnter = (event, key) => {
    if (data[key]) {
      setAnchorEl(event.currentTarget);
      setHoveredKey(key);
    }
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setHoveredKey(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#333" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>
        {menuItems.map((item) => (
          <Box
            key={item.key}
            onMouseEnter={(e) => handleMouseEnter(e, item.key)}
            onMouseLeave={handleMouseLeave}
          >
            <Button sx={{ color: "#fff", mx: 1 }}>{item.label}</Button>
            {hoveredKey === item.key && (
              <DropdownMenu
                anchorEl={anchorEl}
                onClose={handleMouseLeave}
                data={data[item.key]}
              />
            )}
          </Box>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
