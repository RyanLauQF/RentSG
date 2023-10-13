import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import QRCode from 'react-qr-code';

import tenantsData from '../../assets/tenants.json';
import BotButton from '../shared/BotButton';
import BotttomNavBar from '../shared/BottomNavBar';
import TenantProfileDets from '../shared/TenantProfileDets';

export default function TenantProfilePage() {
  const tenantID = '000'; // placeholder
  const tenant = tenantsData.tenants[tenantID];

  return (
    <>
      <TenantProfileDets tenant={tenant} />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ pt: 3, pb: 7 }}
      >
        <Typography variant="body2" sx={{ pt: 1.2 }}>
          Scan QR to Connect with Homeowners
        </Typography>
        <QRCode
          style={{ marginBottom: '4rem', maxWidth: '180px', width: '180px' }}
          value={tenantID}
          viewBox="0 0 180 180"
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <BotButton />
        <BotttomNavBar account="tenant" />
      </Box>
    </>
  );
}
