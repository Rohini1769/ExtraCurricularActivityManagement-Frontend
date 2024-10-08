import React from 'react'
import logo from '../logo.svg';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';


const settings = ['Profile', 'My Participation', 'Dashboard', 'Login'];
const Navbar = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
   const navigate=useNavigate();
    const handleCloseUserMenu = (setting) => 
    {
        setAnchorElUser(null);
        if (setting === 'Login') {
          navigate('/login'); // Navigate to login page
        }
        else if(setting=='Dashboard')
            {
                navigate('/');
            }  
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

  return (
    <div>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='title'>
         Studentiva
        </p>
        <input className='input' type='text'placeholder='Search'/>
        
        <button className='cat-button'>Categories</button>
        <button className='about-button'>About Us</button>
        <button className='event-button'>Events</button>
        <button className='club-button'>Clubs</button>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
      </header>
    </div>
  )
}

export default Navbar