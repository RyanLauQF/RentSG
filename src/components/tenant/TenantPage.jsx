import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import * as React from 'react';

import tenantsData from '../../assets/tenants.json';
import BotButton from '../shared/BotButton';
import BottomNavBar from '../shared/BottomNavBar';
import Header from '../shared/Header';
import PassStatus from './components/PassStatus';
import ResidenceStatus from './components/ResidenceStatus';

export default function TenantPage() {
  const tenantID = '000'; // placeholder
  const tenant = tenantsData.tenants[tenantID];

  return (
    <Box height="100vh" display="flex" flexDirection="column" sx={{ pb: 7 }}>
      <Header name={tenant.firstName} />
      <Divider
        sx={{ backgroundColor: '#1aa6b7', borderBottomWidth: 3, mx: '2rem' }}
      />
      <Box sx={{ width: '100%', px: 2 }} flex={1} overflow="auto">
        <PassStatus passExpiry={tenant.passExpiry} />
        <ResidenceStatus
          passExpiry={tenant.passExpiry}
          leaseExpiry={tenant.leaseExpiry}
          residence={tenant.residence}
        />
        <BotButton />
        <BottomNavBar account="tenant" />
      </Box>
    </Box>
  );
}
