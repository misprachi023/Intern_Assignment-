import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const SimpleDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };
  const handleListItemClick = () => {
    
    toggleDrawer(false)();
  };
  const list = (
    <List>
      {["Qualifications", "Organizations", "Research & Analysis", "Lorem ipsum", "Lorem ipsum"].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton onClick={handleListItemClick}>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <div>
      <button className='navbarMenuBtn' onClick={toggleDrawer(true)}>Menu</button>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
};

export default SimpleDrawer;
