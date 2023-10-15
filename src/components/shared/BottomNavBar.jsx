import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function BottomNavBar({ account, tenantId }) {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname); // Initialize with the current route

  return (
    <Box sx={{ boxShadow: 10, border: 'white', borderWidth: 2 }}>
      <BottomNavigation
        showLabels
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#d9ecf2',
          height: 65,
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          value={
            account === 'owner' ? `/${account}` : `/${account}/${tenantId}`
          }
          icon={<HomeIcon />}
          component={Link}
          to={account === 'owner' ? `/${account}` : `/${account}/${tenantId}`}
        />
        <BottomNavigationAction
          label="Profile"
          value={
            account === 'owner'
              ? `/${account}/profile`
              : `/${account}/${tenantId}/profile`
          }
          icon={<PersonIcon />}
          component={Link}
          to={
            account === 'owner'
              ? `/${account}/profile`
              : `/${account}/${tenantId}/profile`
          }
        />
      </BottomNavigation>
    </Box>
  );
}
