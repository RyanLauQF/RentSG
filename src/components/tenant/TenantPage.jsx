import Box from '@mui/material/Box';
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
    <Box height="100vh" display="flex" flexDirection="column">
      <Header name={tenant.firstName} />
      <Box sx={{ width: '100%', px: 2 }} flex={1} overflow="auto">
        <PassStatus passExpiry={tenant.passExpiry} />
        <ResidenceStatus
          leaseExpiry={tenant.leaseExpiry}
          residence={tenant.residence}
        />
        <BotButton />
        <BottomNavBar account="tenant" />
      </Box>
    </Box>
  );
}
