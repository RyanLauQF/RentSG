import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import Detail from '../../shared/Detail';

function TenantDetails({ tenant }) {
  return (
    <Box>
      <Detail
        det="Name"
        value={`${tenant.firstName}` + ' ' + `${tenant.lastName}`}
      />
      <Detail det="FIN Number" value={tenant.finNumber} />
      <Detail det="Nationality" value={tenant.nationality} />
      <Detail det="Pass Expiry" value={tenant.passExpiry} />
      <Detail det="Contact No" value={tenant.contactNo} />
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
        sx={{ backgroundColor: '#1aa6b7', borderBottomWidth: 3, mx: '2rem' }}
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
