import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { createTheme } from '@mui/material/styles'; // Import ThemeProvider from Material-UI
import Typography from '@mui/material/Typography';
import * as React from 'react';

import BotButton from '../shared/BotButton';
import BottomNavigation from '../shared/BottomNavBar';
import ResidenceDisplay from './components/ResidenceDisplay';

const theme = createTheme({
  typography: {
    fontFamily: '"Nacelle", sans-serif',
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
    'https://s.yimg.com/ny/api/res/1.2/IEGNapdUW_qWZk7QNlUH3A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMjQ7aD03Njg-/https://media.zenfs.com/en-SG/homerun/rice_643/1d5468dbcffaa324d7004196cefa28dd',
  residences: ['Binjai Hall #19', 'Tanjong Hall #20', 'Banyan Hall #21'],
  NRIC: 'S1234567A',
  'Next-of-Kin': 'John Tan',
  'NOK Contact': '81234567',
};
const allResidences = {
  1: {
    Address: 'Binjai Hall #19',
    Type: '4-room HDB',
    Availability: 1,
    ImgSrc: '/assets/condo1.jpeg',
  },
  2: {
    Address: 'Tanjong Hall #20',
    Type: '2-room Condo',
    Availability: 1,
    ImgSrc: '/assets/hdb1.jpg',
  },
  3: {
    Address: 'Banyan Hall #21',
    Type: '3-room HDB',
    Availability: '2',
    ImgSrc: '/assets/hdb2.jpg',
  },
};

const { lastName, imageUrl, residences, ...landLordDetails } = landLord;

function DetailsD({ details }) {
  return (
    <>
      {Object.entries(details).map(([key, value]) => (
        <Box px={4} py={1.2}>
          <Typography variant="h6" fontWeight="bold" color="primary.main">
            {key}:
          </Typography>
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
      <Typography
        variant="h4"
        sx={{
          px: 4,
          my: 3,
          fontWeight: 'bold',
          color: 'primary.main',
        }}
      >
        Profile
      </Typography>
      <Divider
        sx={{ backgroundColor: '#1aa6b7', borderBottomWidth: 5, mx: '2rem' }}
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ pt: 3 }}
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
      </Box>
      <Box sx={{ pb: 7 }}>
        <DetailsD details={landLordDetails} />
        <ResidenceDisplay allResidences={allResidences} />
      </Box>

      <BotButton />
      <BottomNavigation account="owner" />
    </>
  );
}
