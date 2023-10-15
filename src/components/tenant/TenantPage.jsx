import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { onValue, ref } from 'firebase/database';
import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import db from '../../config/firebase';
import BotButton from '../shared/BotButton';
import BottomNavBar from '../shared/BottomNavBar';
import Header from '../shared/Header';
import PassStatus from './components/PassStatus';
import ResidenceStatus from './components/ResidenceStatus';

export default function TenantPage() {
  const navigate = useNavigate();

  const { tenantId } = useParams();
  const [tenantInfo, setTenantInfo] = useState({});

  const handleChange = (event) => {
    // DEV ONLY
    // PROFILE CHANGE
    navigate(`/tenant/${event.target.value}`);
  };

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
      <Header name={tenantInfo.firstName} />
      <Divider
        sx={{ backgroundColor: '#1aa6b7', borderBottomWidth: 3, mx: '2rem' }}
      />
      <Box sx={{ width: '100%', px: 2 }} flex={1} overflow="auto">
        <PassStatus passExpiry={tenantInfo.passExpiry} />
        <ResidenceStatus
          passExpiry={tenantInfo.passExpiry}
          leaseExpiry={tenantInfo.leaseExpiry}
          residence={tenantInfo.residence}
        />
        <BotButton />
        <Box
          sx={{
            heighttransform: 'translateZ(0px)',
            flexGrow: 1,
            pb: 8,
          }}
        >
          <FormControl
            sx={{
              position: 'fixed',
              top: 50,
              right: 30,
              minWidth: 100,
            }}
            size="small"
          >
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={tenantId}
              label="Tenant"
              onChange={handleChange}
              sx={{
                color: 'transparent',
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent',
                },
                '.MuiSvgIcon-root ': {
                  fill: 'transparent !important',
                },
              }}
            >
              <MenuItem value="000">000</MenuItem>
              <MenuItem value="001">001</MenuItem>
              <MenuItem value="002">002</MenuItem>
              <MenuItem value="003">003</MenuItem>
              <MenuItem value="004">004</MenuItem>
              <MenuItem value="005">005</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <BottomNavBar account="tenant" tenantId={tenantId} />
      </Box>
    </>
  );
}
