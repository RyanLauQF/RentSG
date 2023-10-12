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
      direction="column"
      alignItems="center"
      justifyContent="center"
      mt={4}
    >
      <Box
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 'h5.fontSize',
        }}
      >
        We could not verify you.
      </Box>

      <CancelIcon sx={{ color: 'red', width: 150, height: 150 }} />

      <Chip
        label="Contact Support"
        color="primary"
        href="https://www.mom.gov.sg/faq/work-pass-general/how-do-i-check-if-a-work-pass-is-valid"
        clickable
        mx="auto"
        size="medium"
      />
    </Stack>
  );
}
