import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { createTheme } from '@mui/material/styles'; // Import ThemeProvider from Material-UI
import Typography from '@mui/material/Typography';
import * as React from 'react';

import ownersData from '../../assets/owner.json';
import BotButton from '../shared/BotButton';
import BottomNavigation from '../shared/BottomNavBar';
import ResidenceDisplay from './components/ResidenceDisplay';
import Detail from '../shared/Detail';

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

function OwnerDetails({ owner }) {
  return (
    <Box>
      <Detail
        det="Name"
        value={`${owner.firstName}` + ' ' + `${owner.lastName}`}
      />
      <Detail det="NRIC" value={owner.nric} />
      <Detail det="Next-of-Kin" value={owner.nok} />
      <Detail det="Contact No" value={owner.contact} />
    </Box>
  );
}

export default function OwnerProfile() {
  const ownerID = '000'; // placeholder
  const owner = ownersData.owners[ownerID];

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
        sx={{ backgroundColor: '#1aa6b7', borderBottomWidth: 3, mx: '2rem' }}
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
          alt={owner.firstName}
          src={owner.imageUrl}
        />
      </Box>
      <OwnerDetails owner={owner}/>
      <Box sx={{ pb: 7 }}>
        <ResidenceDisplay residences={owner.residences} />
      </Box>
      <BotButton />
      <BottomNavigation account="owner" />
    </>
  );
}
