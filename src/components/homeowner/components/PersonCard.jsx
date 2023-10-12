import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Chip } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import tenantsData from '../../../assets/tenants.json';

const dateConverter = (passExpiry, leaseExpiry) => {
  const currentDate = new Date();
  const passExpiryDate = new Date(passExpiry);
  const leaseExpiryDate = new Date(leaseExpiry);
  let timeDifference;
  // Calculate the time difference in milliseconds
  if (passExpiry < leaseExpiry) {
    timeDifference = passExpiryDate - currentDate;
  } else {
    timeDifference = leaseExpiryDate - currentDate;
  }
  return timeDifference;
};
const colorConverter = (timeDifference) => {
  // Calculate the time thresholds in milliseconds
  const oneMonthInMillis = 30 * 24 * 60 * 60 * 1000; // 30 days
  const threeMonthsInMillis = 3 * 30 * 24 * 60 * 60 * 1000; // 180 days

  // if (timeDifference < 0) {
  //   // If the provided date is in the past
  //   return '#ff8787'; // Expired (in red)
  // }
  if (timeDifference <= oneMonthInMillis) {
    return '#ff8787'; // Less than 1 month away (in red)
  }
  if (timeDifference <= threeMonthsInMillis) {
    return '#ffd43b'; // Between 1 and 3 months away (in orange)
  }
  return '#a7dca5';
  // return '#69db7c'; // More than 3 months away (in green)
};

export default function PersonCard({ personID }) {
  const tenant = tenantsData.tenants[personID];
  const timeDifference = dateConverter(tenant.passExpiry, tenant.leaseExpiry);
  const colour = colorConverter(timeDifference);
  let daysRemain = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  if (daysRemain <= 0) {
    daysRemain = 0;
  }
  const navigate = useNavigate();
  const navigateToViewProfile = () => {
    navigate('/tenant');
  };

  const name = `${tenant.firstName} ${tenant.lastName}`;

  return (
    <Card
      sx={{
        backgroundColor: colour,
        m: 2,
        borderRadius: '10px',
      }}
      height="100vh"
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
            <Typography variant="subtitle2" color="#002d40">
              Expiry date: {tenant.passExpiry}
            </Typography>
            {daysRemain === 0 ? (
              <Chip
                label={<Typography fontWeight="bold">Expired</Typography>}
              />
            ) : (
              <Chip label={`${daysRemain} days remaining`} />
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
