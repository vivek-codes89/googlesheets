import React from "react";
import { Menu, MenuItem } from "@mui/material";

const DropdownMenu = ({ anchorEl, onClose, data }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      MenuListProps={{ onMouseLeave: onClose }}
    >
      {data && data.length > 0 ? (
        data.map((item, index) => <MenuItem key={index}>{item.Content}</MenuItem>)
      ) : (
        <MenuItem>No Data Available</MenuItem>
      )}
    </Menu>
  );
};

export default DropdownMenu;
