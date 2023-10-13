import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function VerifyFailure() {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/tenant');
  }
  return (
    <Stack
      spacing={2}
      display="flex"
      direction="column"
      alignItems="center"
      justifyContent="center"
      mt={6}
    >
      <Box
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 'h5.fontSize',
          color: '#1aa6b7',
        }}
      >
        We could not verify you.
      </Box>

      <CancelIcon sx={{ color: 'red', width: 150, height: 150 }} />

      <Chip
        label="Contact Support"
        sx={{ bgcolor: '#1aa6b7', color: '#d9ecf2' }}
        href="https://www.mom.gov.sg/faq/work-pass-general/how-do-i-check-if-a-work-pass-is-valid"
        clickable
        mx="auto"
        size="large"
      />
    </Stack>
  );
}
