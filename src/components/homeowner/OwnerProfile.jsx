import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material/styles'; // Import ThemeProvider from Material-UI
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

const landLord = {
  Name: 'Land',
  lastName: 'lord',
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/en/7/72/Housing_and_Development_Board_%28logo%29.png',
  residences: ['Binjai Hall #19', 'Tanjong Hall #20', 'Banyan Hall #21'],
  NRIC: 'S123456789',
  'Next-of-Kin': 'John Tan, 81234567',
  'NOK Contact': '81234567',
};

const { lastName, imageUrl, residences, ...landLordDetails } = landLord;

function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <IconButton onClick={goBack} sx={{ padding: 2 }}>
      <ArrowBackIcon />
    </IconButton>
  );
}

function DetailsD({ details }) {
  return (
    <>
      {Object.entries(details).map(([key, value]) => (
        <Box px={4} py={1.2}>
          <Typography variant="subtitle2">{key}:</Typography>
          <Typography variant="body1">{value}</Typography>
        </Box>
      ))}
    </>
  );
}

export default function OwnerProfile() {
  const name = `${landLord.Name} ${landLord.lastName}`;
  return (
    <>
      <BackButton />
      <Typography variant="h6" sx={{ px: 3 }}>
        {name} Profile
      </Typography>
      <Divider
        variant="middle"
        sx={{ borderBottomWidth: 2, borderColor: 'primary.main' }}
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ pt: 3 }}
      >
        <Paper
          sx={{
            width: 128,
            height: 128,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar
            sx={{
              width: 128,
              height: 128,
              alignContent: 'center',
              color: 'primary.main',
            }}
            alt={landLord.firstName}
            src={landLord.imageUrl}
          />
        </Paper>
      </Box>
      <DetailsD details={landLordDetails} />
    </>
  );
}
