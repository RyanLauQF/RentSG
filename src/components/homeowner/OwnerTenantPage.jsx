import { Avatar, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { get, onValue, ref, update } from 'firebase/database';
import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import db from '../../config/firebase';
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

export default function OwnerTenantPage({ ownerID }) {
  const navigate = useNavigate();
  const { residenceId, tenantId } = useParams();
  const [tenantInfo, setTenantInfo] = useState({});

  useMemo(() => {
    const dbref = ref(db, `/tenants/${tenantId}`);
    return onValue(dbref, (snapshot) => {
      const info = snapshot.val();
      if (snapshot.exists()) {
        setTenantInfo(info);
      }
    });
  }, [tenantId]);

  const handleDelete = () => {
    // delete tenant from owner and navigate back to owner page
    const ownerRef = ref(db, `/owners/${ownerID}/residences/${residenceId}`);

    get(ownerRef).then((snapshot) => {
      if (snapshot.exists()) {
        const updateTenants = snapshot.child('tenants').val() || {};
        console.log(updateTenants, tenantId, residenceId);
        delete updateTenants[tenantId];

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
    <Box sx={{ pb: 7 }}>
      <BackButton />
      <TenantProfileDets tenant={tenantInfo} />
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
