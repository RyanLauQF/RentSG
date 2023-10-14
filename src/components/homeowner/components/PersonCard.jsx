import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Chip } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import tenantsData from '../../../assets/tenants.json';
import colourConverter from '../../shared/ColourConverter';
import timeDiffConverter from '../../shared/TimeDifferenceConverter';

export default function PersonCard({ personID }) {
  const tenant = tenantsData.tenants[personID];
  const timeDiffPass = timeDiffConverter(tenant.passExpiry);
  const timeDiffLease = timeDiffConverter(tenant.leaseExpiry);

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

  const name = `${tenant.firstName} ${tenant.lastName}`;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/owner/${personID}/profile`, {
      state: {
        personID,
      },
    });
  };

  return (
    <Card
      sx={{
        backgroundColor: colour,
        m: 2,
        borderRadius: '10px',
        boxShadow: 3
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
              alt={tenant.firstName}
              src={tenant.imageUrl}
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
                  {tenant.passExpiry}
                </Typography>
                <Chip
                  label={
                    <Typography fontWeight="bold">End contract</Typography>
                  }
                />
              </Box>
            ) : daysRemain <= 90 ? (
              <Box>
                <Typography variant="subtitle2" color="#002d40">
                  Expiry date: {tenant.passExpiry}
                </Typography>
                <Chip label={`${daysRemain} days remaining`} />
              </Box>
            ) : (
              <Box>
                <Typography variant="subtitle2" color="#002d40">
                  Expiry date: {tenant.passExpiry}
                </Typography>
                <Chip label={`${monthsRemain} months remaining`} />
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
