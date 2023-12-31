import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { onValue, ref } from 'firebase/database';
import React, { useMemo, useState } from 'react';
import QRCode from 'react-qr-code';
import { useParams } from 'react-router-dom';

import db from '../../config/firebase';
import BotButton from '../shared/BotButton';
import BottomNavBar from '../shared/BottomNavBar';
import TenantProfileDets from './components/TenantProfileDets';

export default function TenantProfilePage() {
  const { tenantId } = useParams();
  const [tenantInfo, setTenantInfo] = useState({});

  useMemo(() => {
    const dbref = ref(db, `/tenants/${tenantId}`);
    return onValue(dbref, (snapshot) => {
      const info = snapshot.val();
      if (snapshot.exists()) {
        setTenantInfo(info);
        console.log(info);
      }
    });
  }, [tenantId]);

  return (
    <>
      <TenantProfileDets tenant={tenantInfo} />
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
          value={tenantId}
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
        <BottomNavBar account="tenant" tenantId={tenantId} />
      </Box>
    </>
  );
}
