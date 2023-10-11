// import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function BotttomNavBar() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 3,
        left: 0,
        right: 0,
      }}
    >
      <Divider
        variant="middle"
        sx={{ borderBottomWidth: 2, borderColor: 'primary.main' }}
      />
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Profile"
          icon={(
            <Link
              to="/owner/profile"
              s
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <PersonIcon />
            </Link>
  )}
        />
        <BottomNavigationAction label="ChatBot" icon={<HeadsetMicIcon />} />
      </BottomNavigation>
    </Box>
  );
}
