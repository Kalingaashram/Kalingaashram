import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from './../assets/images/logo.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Event', path: '/event' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Mud Therapy', path: '/mudtherapy' },
  { label: 'Videos', path: '/videos' }
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutAnchorEl, setAboutAnchorEl] = useState(null);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAboutMenuOpen = (event) => {
    setAboutAnchorEl(event.currentTarget);
  };

  const handleAboutMenuClose = () => {
    setAboutAnchorEl(null);
  };

  const handleServicesMenuOpen = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setServicesAnchorEl(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: '#d2691e' }}>
        KALINGA ASHRAM
      </Typography>
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={handleAboutMenuOpen}>
          <ListItemText primary="About " /><KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </ListItem>
        {aboutAnchorEl && (
          <Box sx={{ pl: 2 }}>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button component={Link} to="/history">
              <ListItemText primary="History" />
            </ListItem>
            <ListItem button component={Link} to="/objectives">
              <ListItemText primary="Objectives" />
            </ListItem>
            <ListItem button component={Link} to="/leadership">
              <ListItemText primary="Leadership" />
            </ListItem>
            <ListItem button component={Link} to="/health">
              <ListItemText primary="Health" />
            </ListItem>
            <ListItem button component={Link} to="/education">
              <ListItemText primary="Education" />
            </ListItem>
          </Box>
        )}
        <ListItem button onClick={handleServicesMenuOpen}>
          <ListItemText primary="Services " /><KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </ListItem>
        {servicesAnchorEl && (
          <Box sx={{ pl: 2 }}>
            <ListItem button component={Link} to="/mudtherapy">
              <ListItemText primary="Mud Therapy" />
            </ListItem>
            <ListItem button component={Link} to="/education">
              <ListItemText primary="Education" />
            </ListItem>
            <ListItem button component={Link} to="/natural-farming">
              <ListItemText primary="Natural Farming" />
            </ListItem>
          </Box>
        )}
        <ListItem button component={Link} to="/event">
          <ListItemText primary="Event" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
      <Divider />
      {/* <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 1 }}>
        <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook" color="inherit">
          <FacebookIcon sx={{ color: '#d2691e' }} />
        </IconButton>
        <IconButton href="https://youtube.com" target="_blank" aria-label="YouTube" color="inherit">
          <YouTubeIcon sx={{ color: '#d2691e' }} />
        </IconButton>
      </Box> */}
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" sx={{ backgroundColor: '#d2691e', borderRadius: '20px' }}>
          Donate
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#d2691e' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img src={logo} alt="Logo" style={{ height: 50, marginRight: 10 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              KALINGA ASHRAM
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            <Button component={Link} to="/" sx={{ color: '#d2691e', fontWeight: 'bold' }}>
              Home
            </Button>
            <Button
              sx={{ color: '#d2691e', fontWeight: 'bold' }}
              aria-controls="about-menu"
              aria-haspopup="true"
              onClick={handleAboutMenuOpen}
            >
              About <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            </Button>
            <Menu
              id="about-menu"
              anchorEl={aboutAnchorEl}
              open={Boolean(aboutAnchorEl)}
              onClose={handleAboutMenuClose}
              MenuListProps={{
                'aria-labelledby': 'about-button',
              }}
            >
              <MenuItem component={Link} to="/about" onClick={handleAboutMenuClose}>
                About Us
              </MenuItem>
            </Menu>
            <Button
              sx={{ color: '#d2691e', fontWeight: 'bold' }}
              aria-controls="services-menu"
              aria-haspopup="true"
              onClick={handleServicesMenuOpen}
            >
              Services <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            </Button>
            <Menu
              id="services-menu"
              anchorEl={servicesAnchorEl}
              open={Boolean(servicesAnchorEl)}
              onClose={handleServicesMenuClose}
              MenuListProps={{
                'aria-labelledby': 'services-button',
              }}
            >
              <MenuItem component={Link} to="/mudtherapy" onClick={handleServicesMenuClose}>
                Mud Therapy
              </MenuItem>
              <MenuItem component={Link} to="/education" onClick={handleServicesMenuClose}>
                Education
              </MenuItem>
              <MenuItem component={Link} to="/natural-farming" onClick={handleServicesMenuClose}>
                Natural Farming
              </MenuItem>
            </Menu>
            <Button component={Link} to="/event" sx={{ color: '#d2691e', fontWeight: 'bold' }}>
              Event
            </Button>
            <Button component={Link} to="/contact" sx={{ color: '#d2691e', fontWeight: 'bold' }}>
              Contact Us
            </Button>
            <Button component={Link} to="/videos" sx={{ color: '#d2691e', fontWeight: 'bold' }}>
              Videos
            </Button>
            {/* <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook" sx={{ color: '#d2691e' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://youtube.com" target="_blank" aria-label="YouTube" sx={{ color: '#d2691e' }}>
              <YouTubeIcon />
            </IconButton> */}
            <Button component={Link} to="/donate" variant="contained" sx={{ backgroundColor: '#d2691e', borderRadius: '20px', ml: 2 }}>
              Donate
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Header;
