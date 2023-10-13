import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import timeDiffConverter from '../../shared/TimeDifferenceConverter';

export default function PassStatus({ passExpiry }) {
  const timeDifference = timeDiffConverter(passExpiry);
  const validPass = timeDifference > 0;

  return (
    <Stack direction="column" sx={{ py: 2 }} spacing={2}>
      <Stack
        direction="row"
        sx={{ px: 3, justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Typography variant="h6">Pass Status </Typography>

        {validPass ? (
          <Stack direction="row">
            <Typography sx={{ color: 'green' }}>Valid</Typography>
            <CheckCircleIcon sx={{ color: 'green' }} />
          </Stack>
        ) : (
          <Stack direction="row">
            <Typography sx={{ color: 'red' }}>Invalid</Typography>
            <CancelIcon sx={{ color: 'red' }} />
          </Stack>
        )}
      </Stack>
      <CardMedia
        sx={{
          paddingX: '16px',
        }}
        component="img"
        image="/assets/tenant_fin.png"
      />
    </Stack>
  );
}
