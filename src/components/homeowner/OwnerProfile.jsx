import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { onValue, ref } from 'firebase/database';
import React, { useMemo, useState } from 'react';

import db from '../../config/firebase';
import BotButton from '../shared/BotButton';
import BottomNavigation from '../shared/BottomNavBar';
import Detail from '../shared/Detail';
import ResidenceDisplay from './components/ResidenceDisplay';

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

export default function OwnerProfile({ ownerID }) {
  const [ownerInfo, setOwnerInfo] = useState({});

  useMemo(() => {
    const dbref = ref(db, `/owners/${ownerID}`);
    return onValue(dbref, (snapshot) => {
      const info = snapshot.val();
      if (snapshot.exists()) {
        setOwnerInfo(info);
      }
    });
  }, [ownerID]);

  const name = `${ownerInfo.firstName} ${ownerInfo.lastName}`;

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
          alt={name}
          src={ownerInfo.imageUrl}
        />
      </Box>
      <OwnerDetails owner={ownerInfo} />
      <Box sx={{ pb: 7 }}>
        {ownerInfo.residences && (
          <ResidenceDisplay residences={ownerInfo.residences} />
        )}
      </Box>
      <BotButton />
      <BottomNavigation account="owner" />
    </>
  );
}
