import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React from 'react';

export default function VerifyFailure() {
  return (
    <Stack
      spacing={6}
      direction="column"
      alignItems="center"
      justifyContent="center"
      mt={25}
    >
      <Box
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 'h5.fontSize',
          color: 'primary.main',
        }}
      >
        We could not verify you.
      </Box>

      <CancelIcon sx={{ color: 'red', width: 150, height: 150 }} />

      <Chip
        label="Contact Support"
        color="primary"
        mx="auto"
        href="https://www.mom.gov.sg/faq/work-pass-general/how-do-i-check-if-a-work-pass-is-valid"
        clickable
        style={{
          width: '200px',
          height: '50px',
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#fafaf9',
          boxShadow: '2px',
        }}
      />
    </Stack>
  );
}
