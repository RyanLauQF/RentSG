import AddSharpIcon from '@mui/icons-material/AddSharp';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddPerson() {
  const navigate = useNavigate();
  const navigateToAddTenant = () => {
    navigate('/tenant');
  };

  return (
    <Box m={2}>
      <Card
        raised
        sx={{
          minWidth: 275,
          bgcolor: '#ffffe4',
          height: '4rem',
          boxShadow: 4,
          borderRadius: 6,
          p: 0.3,
        }}
      >
        <CardContent
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: '6.5rem',
          }}
        >
          <Typography textAlign="center" marginRight="3.8rem">
            Add Person
          </Typography>
          <AddSharpIcon />
        </CardContent>
      </Card>
    </Box>
  );
}
