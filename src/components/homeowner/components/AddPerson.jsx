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
          bgcolor: '#d9ecf2',
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
            // marginLeft: '6.5rem',
            mx: 'auto',
            justifyContent: 'space-evenly',
          }}
        >
          <AddSharpIcon />
          <Typography
            textAlign="center"
            marginRight="3.8rem"
            fontWeight="bold"
            color="#002d40"
          >
            Add Person
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
