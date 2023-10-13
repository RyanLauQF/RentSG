import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function FunctionButton({ performFunction, handleClick }) {
  return (
    <Box px={4} py={1}>
      <Button
        variant="contained"
        sx={{
          width: '100%',
          bgcolor: '#d9ecf2',
          height: '3.5rem',
          boxShadow: 4,
          borderRadius: 6,
          p: 1,
        }}
        onClick={handleClick}
      >
        <Typography textAlign="center" fontWeight="bold" color="#002d40">
          {performFunction}
        </Typography>
      </Button>
    </Box>
  );
}
