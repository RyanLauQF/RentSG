import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import timeDiffConverter from '../../shared/TimeDifferenceConverter';

export default function PassStatus({ passExpiry }) {
  const timeDifference = timeDiffConverter(passExpiry);
  const validPass = timeDifference > 0;

  return (
    <Box sx={{ py: 2 }}>
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
      <Card sx={{ borderRadius: '10px', height: 150, m: 2 }} />
    </Box>
  );
}
