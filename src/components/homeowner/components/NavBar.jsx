import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const navigateToProfilePage = () => {
    navigate('/ownerprofile');
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sans-serif',
              fontWeight: 600,
              letterSpacing: '0rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RentSG
          </Typography>
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

          <Typography // mobile view stuff here
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'sans-serif',
              fontWeight: 600,
              letterSpacing: '0rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RentSG
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Go to Profile Page">
              <IconButton onClick={navigateToProfilePage} sx={{ p: 0 }}>
                <Avatar
                  alt="Bob Tan"
                  src="https://s.yimg.com/ny/api/res/1.2/IEGNapdUW_qWZk7QNlUH3A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMjQ7aD03Njg-/https://media.zenfs.com/en-SG/homerun/rice_643/1d5468dbcffaa324d7004196cefa28dd"
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
