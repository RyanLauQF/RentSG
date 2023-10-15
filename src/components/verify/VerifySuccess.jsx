import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function VerifySuccess() {
  const tenantID = '000'; // placeholder
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/tenant/${tenantID}`);
  }
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
          fontSize: 'h4.fontSize',
          color: 'primary.main',
        }}
      >
        Verified!
      </Box>

      <CheckCircleIcon sx={{ color: 'green', width: 150, height: 150 }} />

      <Chip
        label="Get Started Now!"
        color="primary"
        onClick={handleClick}
        mx="auto"
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
