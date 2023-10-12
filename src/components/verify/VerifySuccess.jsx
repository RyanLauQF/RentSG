import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function VerifySuccess() {
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
        Verified!
      </Box>

      <CheckCircleIcon sx={{ color: 'green', width: 150, height: 150 }} />

      <Chip
        label="Find a home"
        color="primary"
        onClick={handleClick}
        mx="auto"
        size="medium"
      />
    </Stack>
  );
}
