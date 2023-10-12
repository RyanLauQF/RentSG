import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function Header({ firstName }) {
  return (
    <Box sx={{ px: 4, py: 3 }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: 'bold', color: 'primary.main' }}
      >
        Welcome Back,
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', color: 'primary.main', flexWrap: 'wrap' }}
      >
        {firstName}!
      </Typography>
    </Box>
  );
}
