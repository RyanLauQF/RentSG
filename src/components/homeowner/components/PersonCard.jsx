import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import tenantsData from '../../../assets/tenants.json';

const dateConverter = (passExpiry) => {
  const currentDate = new Date();
  const passExpiryDate = new Date(passExpiry);

  // Calculate the time difference in milliseconds
  const timeDifference = passExpiryDate - currentDate;

  // Calculate the time thresholds in milliseconds
  const oneMonthInMillis = 30 * 24 * 60 * 60 * 1000; // 30 days
  const threeMonthsInMillis = 3 * 30 * 24 * 60 * 60 * 1000; // 180 days

  if (timeDifference < 0) {
    // If the provided date is in the past
    return '#ff8787'; // Expired (in red)
  }
  if (timeDifference <= oneMonthInMillis) {
    return '#ffd43b'; // Less than 1 month away (in yellow)
  }
  if (timeDifference <= threeMonthsInMillis) {
    return 'orange'; // Between 1 and 6 months away (in orange)
  }
  return '#69db7c'; // More than 6 months away (in green)
};

export default function PersonCard({ personID }) {
  const tenant = tenantsData.tenants[personID];
  const colour = dateConverter(tenant.passExpiry);

  const navigate = useNavigate();
  const navigateToViewProfile = () => {
    navigate('/tenant');
  };

  const name = `${tenant.firstName} ${tenant.lastName}`;

  return (
    <Card
      sx={{ backgroundColor: colour, m: 2, borderRadius: '10px' }}
      height="100vh"
    >
      <CardContent>
        <Stack
          direction="row"
          sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Tooltip title="Tenants Profile">
            <Avatar
              sx={{
                width: 65,
                height: 65,
                alignContent: 'center',
              }}
              alt={tenant.firstName}
              src={tenant.imageUrl}
            />
          </Tooltip>

          <Stack direction="column">
            <Typography variant="body1">{name}</Typography>
            <Typography variant="subtitle2">
              Last day: {tenant.leaseExpiry}
            </Typography>
            <Typography variant="subtitle2">
              Expiry date: {tenant.passExpiry}
            </Typography>
          </Stack>
          <IconButton
            onClick={() => alert('delete')}
            sx={{ marginRight: 1, marginTop: 1 }}
          >
            <CloseIcon sx={{ height: 0.7, marginRight: -2 }} />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}
