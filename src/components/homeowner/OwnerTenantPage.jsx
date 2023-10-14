import { Avatar, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useParams } from 'react-router-dom';

import tenantsData from '../../assets/tenants.json';
import Detail from '../shared/Detail';
import BackButton from './components/BackButton';
import FunctionButton from './components/FunctionButton';

function TenantDetails({ tenant }) {
  return (
    <Box>
      <Detail
        det="Name"
        value={`${tenant.firstName}` + ' ' + `${tenant.lastName}`}
      />
      <Detail det="FIN Number" value={tenant.finNumber} />
      <Detail det="Pass Expiry" value={tenant.passExpiry} />
      <Detail det="Lease Expiry" value={tenant.leaseExpiry} />
      <Detail det="Last day in Singapore" value={tenant.lastDay} />
      <Detail det="Contact No" value={tenant.contactNo} />
    </Box>
  );
}

function TenantProfileDets({ tenant }) {
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
        Tenant Profile
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

export default function OwnerTenantPage() {
  const { tenantId } = useParams();
  const tenant = tenantsData.tenants[tenantId];

  const handleDelete = () => {
    alert('delete');
  };
  const handleTA = () => {
    alert('TA');
  };

  return (
    <Box sx={{ pb: 7 }}>
      <BackButton />
      <TenantProfileDets tenant={tenant} />
      <FunctionButton
        performFunction="Delete Tenant"
        handleClick={handleDelete}
      />
      <FunctionButton
        performFunction="Tenancy Agreement"
        handleClick={handleTA}
      />
    </Box>
  );
}