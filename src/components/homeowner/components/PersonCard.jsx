import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Chip } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { onValue, ref } from 'firebase/database';
import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import db from '../../../config/firebase';
import colourConverter from '../../shared/ColourConverter';
import timeDiffConverter from '../../shared/TimeDifferenceConverter';

function calculateRemainingDays(passExpiry, leaseExpiry) {
  const timeDiffPass = timeDiffConverter(passExpiry);
  const timeDiffLease = timeDiffConverter(leaseExpiry);
  let timeDifference;
  if (timeDiffPass < timeDiffLease) {
    timeDifference = timeDiffPass;
  } else {
    timeDifference = timeDiffLease;
  }
  const daysRemain = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
}

export default function PersonCard({ personID, ownerID }) {
  const [tenantInfo, setTenantInfo] = useState({});

  useMemo(() => {
    const dbref = ref(db, `/tenants/${personID}`);
    return onValue(dbref, (snapshot) => {
      const info = snapshot.val();
      if (snapshot.exists()) {
        setTenantInfo(info);
        console.log(info);
      }
    });
  }, [personID]);

  const timeDiffPass = timeDiffConverter(tenantInfo.passExpiry);
  const timeDiffLease = timeDiffConverter(tenantInfo.leaseExpiry);

  let timeDifference;
  if (timeDiffPass < timeDiffLease) {
    timeDifference = timeDiffPass;
  } else {
    timeDifference = timeDiffLease;
  }
  const colour = colourConverter(timeDifference);
  let daysRemain = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  const monthsRemain = Math.floor(daysRemain / 30);
  if (daysRemain <= 0) {
    daysRemain = 0;
  }

  const name = `${tenantInfo.firstName} ${tenantInfo.lastName}`;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/owner/${personID}/profile`);
  };

  return (
    <Card
      sx={{
        backgroundColor: colour,
        m: 2,
        borderRadius: '10px',
        boxShadow: 3,
      }}
      height="100vh"
      onClick={handleClick}
    >
      <CardContent>
        <Stack direction="row" sx={{ alignItems: 'center' }}>
          <Tooltip title="Tenants Profile">
            <Avatar
              sx={{
                width: 80,
                height: 80,
                marginRight: 2,
              }}
              alt={tenantInfo.firstName}
              src={tenantInfo.imageUrl}
            />
          </Tooltip>

          <Stack direction="column">
            <Typography variant="body1" fontWeight="bold" color="#002d40">
              {name}
            </Typography>
            {daysRemain === 0 ? (
              <Box>
                <Typography variant="subtitle2" color="#002d40">
                  Expiry date:
                </Typography>
                <Typography variant="subtitle2" color="#002d40">
                  {tenantInfo.passExpiry}
                </Typography>
                <Chip
                  label={
                    <Typography fontWeight="bold">End contract</Typography>
                  }
                />
              </Box>
            ) : (
              <Box>
                <Typography variant="subtitle2" color="#002d40">
                  Expiry date: {tenantInfo.passExpiry}
                </Typography>
                <Chip
                  label={`${
                    daysRemain <= 90 ? daysRemain : monthsRemain
                  } days remaining`}
                />
              </Box>
            )}
          </Stack>
          {daysRemain === 0 ? (
            <NotificationsActiveIcon
              sx={{ height: 0.7, marginLeft: 2, color: '#002d40' }}
            />
          ) : null}
        </Stack>
      </CardContent>
    </Card>
  );
}
