import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import * as React from 'react';
import { Link } from 'react-router-dom';

export default function BotttomNavBar({ account }) {
  return (
    <BottomNavigation
      showLabels
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#d9ecf2',
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon style={{ fill: '#1aa6b7' }} />}
      />
      <BottomNavigationAction
        label="Profile"
        icon={
          <Link
            to={`/${account}/profile`}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <PersonIcon style={{ fill: '#1aa6b7' }} />
          </Link>
        }
      />
    </BottomNavigation>
  );
}
