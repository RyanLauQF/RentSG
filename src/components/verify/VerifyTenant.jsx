import { Box, Button, Typography } from '@mui/material';
import { get, onValue, ref, update } from 'firebase/database';
import React, { useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

// import tenantsData from '../../assets/tenants.json';
import db from '../../config/firebase';
import FunctionButton from '../homeowner/components/FunctionButton';
import TenantProfileDets from '../tenant/components/TenantProfileDets';

export default function VerifyTenant() {
  const navigate = useNavigate();
  const { ownerId, residenceId } = useParams();
  let tenantID = '000'; // placeholder
  // let tenant = tenantsData.tenants[tenantID];
  const [tenantInfo, setTenantInfo] = useState({});
  const location = useLocation();

  if (location.state) {
    const { result } = location.state;
    if (result) {
      tenantID = result;
    }
  }

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

  const updateTenantList = () => {
    const ownerRef = ref(db, `/owners/${ownerId}/residences/${residenceId}`);

    get(ownerRef).then((snapshot) => {
      if (snapshot.exists()) {
        const updateTenants = snapshot.child('tenants').val() || {};

        updateTenants[tenantID] = {
          passExpiry: tenantInfo.passExpiry,
          leaseExpiry: tenantInfo.leaseExpiry,
        };
        console.log(updateTenants);

        update(ownerRef, {
          tenants: updateTenants,
        });
      }
    });

    navigate('/owner');
  };
  const handleTA = () => {
    alert('TA');
  };

  return (
    <>
      <TenantProfileDets tenant={tenantInfo} />
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
          onClick={updateTenantList}
          // component={Link}
          // to="/owner"
        >
          <Typography textAlign="center" fontWeight="bold" color="#002d40">
            Approve Tenant
          </Typography>
        </Button>
      </Box>
    </>
  );
}
