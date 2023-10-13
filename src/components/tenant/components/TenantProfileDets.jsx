import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import TenantDetail from '../../shared/TenantDetail';

function TenantDetails({ tenant }) {
  return (
    <Box>
      <TenantDetail
        det="Name"
        value={`${tenant.firstName}` + ' ' + `${tenant.lastName}`}
      />
      <TenantDetail det="FIN Number" value={tenant.finNumber} />
      <TenantDetail det="Nationality" value={tenant.nationality} />
      <TenantDetail det="Pass Expiry" value={tenant.passExpiry} />
      <TenantDetail det="Contact No" value={tenant.contactNo} />
    </Box>
  );
}

export default function TenantProfileDets({ tenant }) {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          px: 4,
          my: 3,
          fontWeight: 'bold',
          color: 'primary.main',
        }}
      >
        Profile
      </Typography>
      <Divider
        sx={{ backgroundColor: '#1aa6b7', borderBottomWidth: 5, mx: '2rem' }}
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ pt: 3 }}
      >
        <Avatar
          sx={{
            width: 128,
            height: 128,
            alignContent: 'center',
            color: 'primary.main',
          }}
          alt={tenant.firstName}
          src={tenant.imageUrl}
        />
      </Box>
      <TenantDetails tenant={tenant} />
    </>
  );
}
