import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BotttomNavBar({ account }) {
  const [value, setValue] = useState(0); // State to track the selected icon

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
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon />}
        component={Link}
        to={`/${account}`}
      />
      <BottomNavigationAction
        label="Profile"
        icon={<PersonIcon />}
        component={Link}
        to={`/${account}/profile`}
      />
    </BottomNavigation>
  );
}
