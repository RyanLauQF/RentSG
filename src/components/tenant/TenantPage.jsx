import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { onValue, ref } from 'firebase/database';
import React, { useMemo, useState } from 'react';

import db from '../../config/firebase';
import BotButton from '../shared/BotButton';
import BottomNavBar from '../shared/BottomNavBar';
import Header from '../shared/Header';
import PassStatus from './components/PassStatus';
import ResidenceStatus from './components/ResidenceStatus';

export default function TenantPage({ tenantID }) {
  const [tenantInfo, setTenantInfo] = useState({});

  // const tenantID = '000'; // placeholder

  useMemo(() => {
    const dbref = ref(db, `/tenants/${tenantID}`);
    return onValue(dbref, (snapshot) => {
      const info = snapshot.val();
      if (snapshot.exists()) {
        setTenantInfo(info);
        console.log(info);
      }
    });
  }, [tenantID]);

  return (
    <Box height="100vh" display="flex" flexDirection="column" sx={{ pb: 7 }}>
      <Header name={tenantInfo.firstName} />
      <Divider
        sx={{ backgroundColor: '#1aa6b7', borderBottomWidth: 3, mx: '2rem' }}
      />
      <Box sx={{ width: '100%', px: 2 }} flex={1} overflow="auto">
        <PassStatus passExpiry={tenantInfo.passExpiry} />
        <ResidenceStatus
          passExpiry={tenantInfo.passExpiry}
          leaseExpiry={tenantInfo.leaseExpiry}
          residence={tenantInfo.residence}
        />
        <BotButton />
        <BottomNavBar account="tenant" />
      </Box>
    </Box>
  );
}
