import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { logout } from './Store/Auth/Actions';

export default function Navbar({handleMenu}) {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    // <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="bg-slate-200">
        <Toolbar style={{ backgroundColor: "#1f2937" }}>
          {<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Profiles
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    // </Box>
  );
}
