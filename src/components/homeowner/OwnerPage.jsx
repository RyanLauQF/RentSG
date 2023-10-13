import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

import ownersData from '../../assets/owner.json';
import BotButton from '../shared/BotButton';
import BottomNavigation from '../shared/BottomNavBar';
import Header from '../shared/Header';
import AddPerson from './components/AddPerson';
import PersonCard from './components/PersonCard';

export default function HomeOwnerPage({ tenant }) {
  const ownerID = '000'; // placeholder
  const owner = ownersData.owners[ownerID];

  return (
    <>
      <Header name={owner.firstName} />
      <Divider
        sx={{ backgroundColor: '#1aa6b7', borderBottomWidth: 5, mx: '2rem' }}
      />
      <Box sx={{ pb: 7 }}>
        {owner.residences.map((residence) => (
          <Box key={residence.residenceName} m="1rem">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                variant="body2"
                marginLeft="1rem"
                fontWeight="bold"
                fontSize="h6.fontSize"
                color="primary.main"
              >
                {residence.residenceName}
              </Typography>
              <Typography
                variant="body2"
                marginRight="1rem"
                fontWeight="bold"
                // fontSize=""
                color="primary.main"
              >
                {residence.type}
              </Typography>
            </Stack>
            {residence.tenants.map((tenantID) => (
              <PersonCard personID={tenantID} />
            ))}
            <AddPerson />
          </Box>
        ))}
      </Box>
      <BotButton />
      <BottomNavigation
        // ownerName={owner.firstName}
        // residenceList={owner.residences}
        // image={owner.imageUrl}
        // nric={owner.nric}
        // nok={owner.nok}
        // contact={owner.contact}
        account="owner"
      />
    </>
  );
}
