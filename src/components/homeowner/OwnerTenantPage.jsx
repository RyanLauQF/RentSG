import { Avatar, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useLocation } from 'react-router-dom';

import tenantsData from '../../assets/tenants.json';
import TenantDetail from '../shared/TenantDetail';
import BackButton from './components/BackButton';
import FunctionButton from './components/FunctionButton';

function TenantDetails({ tenant }) {
  return (
    <Box>
      <TenantDetail
        det="Name"
        value={`${tenant.firstName}` + ' ' + `${tenant.lastName}`}
      />
      <TenantDetail det="FIN Number" value={tenant.finNumber} />
      <TenantDetail det="Pass Expiry" value={tenant.passExpiry} />
      <TenantDetail det="Lease Expiry" value={tenant.leaseExpiry} />
      <TenantDetail det="Last day in Singapore" value={tenant.lastDay} />
      <TenantDetail det="Contact No" value={tenant.contactNo} />
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
  let tenantID = '000'; // placeholder
  let tenant = tenantsData.tenants[tenantID];
  const location = useLocation();
  if (location.state) {
    const { personID } = location.state;
    if (personID) {
      tenantID = personID;
      tenant = tenantsData.tenants[tenantID];
    }
  }

  const handleDelete = () => {
    alert('delete');
  };
  const handleTA = () => {
    alert('TA');
  };

  return (
    <>
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
    </>
  );
}
