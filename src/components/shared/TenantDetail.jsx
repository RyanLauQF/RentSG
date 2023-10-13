import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function TenantDetail({ det, value }) {
  return (
    <Box px={4} py={1.2}>
      <Typography variant="h6" fontWeight="bold" color="primary.main">
        {det}:
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Box>
  );
}
