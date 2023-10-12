import Box from '@mui/material/Box';
import * as React from 'react';

import BotButton from '../homeowner/components/BotButton';
import BottomNavBar from './components/BottomNavBar';
import Header from './components/Header';
import PassStatus from './components/PassStatus';
import ResidenceStatus from './components/ResidenceStatus';

export default function TenantPage() {
  const tenant = {
    firstName: 'John',
    lastName: 'Doe',
    finNumber: '123456789',
    contactNo: '81234567',
    nationality: 'American',
    imageUrl:
      'https://onecms-res.cloudinary.com/image/upload/s--4SDj7ump--/f_auto,q_auto/v1/mediacorp/tdy/image/2022/07/24/20220617_llt_uncle_raymond-3.jpg?itok=PT3Sdazu',
    pass: {
      valid: true,
      passExpiry: '25-06-2028',
      passType: 'FIN',
    },
    residence: {
      hasResidence: true,
      residenceAddress: 'Binjai Hall #19',
      leaseExpiry: '23-06-2028',
    },
  };
  return (
    <Box>
      <Header firstName={tenant.firstName} />
      <Box sx={{ width: '98%', px: 2 }}>
        <PassStatus pass={tenant.pass.valid} />
        <ResidenceStatus residence={tenant.residence} />
        <BotButton />
        <BottomNavBar />
      </Box>
    </Box>
  );
}
