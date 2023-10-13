import AddSharpIcon from '@mui/icons-material/AddSharp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddPerson() {
  const navigate = useNavigate();
  const navigateToAddTenant = () => {
    navigate('/tenant');
  };

  return (
    <Box m={2} alignContent="center">
      <Button
        variant="contained"
        endIcon={<AddSharpIcon />}
        sx={{
          width: '100%',
          bgcolor: '#d9ecf2',
          height: '4rem',
          boxShadow: 4,
          borderRadius: 6,
          p: 0.3,
          alignSelf: 'center',
        }}
      >
        <Typography textAlign="center" fontWeight="bold" color="#002d40">
          Add Tenant
        </Typography>
      </Button>
    </Box>
  );
}
