import { Box, Button, Typography } from '@mui/material';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

import tenantsData from '../../assets/tenants.json';
import FunctionButton from '../homeowner/components/FunctionButton';
import TenantProfileDets from '../shared/TenantProfileDets';

export default function VerifyTenant() {
  let tenantID = '000'; // placeholder
  let tenant = tenantsData.tenants[tenantID];
  const location = useLocation();
  if (location.state) {
    const { result } = location.state;
    if (result) {
      tenantID = result;
      tenant = tenantsData.tenants[tenantID];
      console.log(tenantID);
    }
  }

  const updateTenantList = () => {
    alert('update tenant list');
  };
  const handleTA = () => {
    alert('TA');
  };

  return (
    <>
      <TenantProfileDets tenant={tenant} />
      <FunctionButton
        performFunction="Tenancy Agreement"
        handleClick={handleTA}
      />
      <Box px={4} py={1}>
        <Button
          variant="contained"
          sx={{
            width: '100%',
            bgcolor: '#69db7c',
            height: '3.5rem',
            boxShadow: 4,
            borderRadius: 6,
            p: 1,
          }}
          component={Link}
          to="/owner"
        >
          <Typography textAlign="center" fontWeight="bold" color="#002d40">
            Approve Tenant
          </Typography>
        </Button>
      </Box>
    </>
  );
}
